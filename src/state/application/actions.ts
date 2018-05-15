import { actionCreatorFactory } from '../actions.common';

export enum ApplicationActions
{
    Action1 = 'Action1',
    Action2 = 'Action2'
}

export const createAction1 = actionCreatorFactory<ApplicationActions.Action1, number>(ApplicationActions.Action1);

export const createAction2 = actionCreatorFactory<ApplicationActions.Action2, string>(ApplicationActions.Action2);

export type ApplicationActionType = ReturnType<typeof createAction1> | ReturnType<typeof createAction2>;