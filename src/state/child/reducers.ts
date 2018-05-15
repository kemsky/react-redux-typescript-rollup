import { RootAction } from '../actions';
import { ChildActions } from './actions';

export const ChildReducer = (state: IState, action: RootAction) =>
{
    switch(action.type)
    {
        case ChildActions.createAction5.Type:
            console.info(action.type, action.payload);
            return state;
        case ChildActions.createAction6.Type:
            action.payload = '';
            console.info(action.type, action.payload);
            return state;
        default:
            return state;
    }
};