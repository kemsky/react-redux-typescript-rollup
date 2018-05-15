import { ApplicationActions } from './actions';
import { RootAction } from '../actions';

export const ApplicationReducer = (state: IState, action: RootAction) =>
{
    switch(action.type)
    {
        case ApplicationActions.Action1:
            action.payload = 0;
            console.info(action.type, action.payload);
            return state;
        case ApplicationActions.Action2:
            console.info(action.type, action.payload.count, action.payload.index);
            return state;
        default:
            return state;
    }
};