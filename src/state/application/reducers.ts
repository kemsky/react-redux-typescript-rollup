import { ApplicationActions } from './actions';
import { RootAction } from '../actions';

export const ApplicationReducer = (state: IState, action: RootAction) =>
{
    switch(action.type)
    {
        case ApplicationActions.SimpleAction1:
            console.info(action.type, action.payload);
            return state;
        case ApplicationActions.SimpleAction2:
            console.info(action.type, action.payload);
            return state;
        default:
            return state;
    }
};