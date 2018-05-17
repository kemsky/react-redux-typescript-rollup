import { ApplicationActionTypes } from './actions';
import { RootAction } from '../actions';

export const ApplicationReducer = (state: IState, action: RootAction) =>
{
    switch(action.type)
    {
        case ApplicationActionTypes.Action1:
            action.payload = 0;
            console.info(action.type, action.payload);
            return state;
        case ApplicationActionTypes.Action2:
            console.info(action.type, action.payload.count, action.payload.index);
            return state;
        case ApplicationActionTypes.Action4:
            console.info(action.type, action.payload);
            return state;
        default:
            return state;
    }
};