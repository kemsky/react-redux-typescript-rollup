import { ApplicationActions } from './actions';
import { RootAction } from '../actions';

export const ApplicationReducer = (state: IState, action: RootAction) =>
{
    switch(action.type)
    {
        case ApplicationActions.createAction1.Type:
            action.payload = 0;
            console.info(action.type, action.payload);
            return state;
        case ApplicationActions.createAction2.Type:
            console.info(action.type, action.payload.count, action.payload.index);
            return state;
        default:
            return state;
    }
};