import { RootAction } from '../actions';
import { ChildActions } from './actions';

export const ChildReducer = (state: IState, action: RootAction) =>
{
    switch(action.type)
    {
        case ChildActions.createAction4.Type:
            action.payload = 0;
            console.info(action.type, action.payload);
            return state;
        case ChildActions.createAction5.Type:
            console.info(action.type, action.payload.count, action.payload.index);
            return state;
        default:
            return state;
    }
};