import { actionFactory } from '../actions.common';

export enum ApplicationActionTypes
{
    Action1= 'Action1',
    Action2= 'Action2',
    Action3= 'Action3',
}

const createAction1 = actionFactory<ApplicationActionTypes.Action1, number>(ApplicationActionTypes.Action1);

const createAction2 = actionFactory<ApplicationActionTypes.Action2, { index: number, count: number }>(ApplicationActionTypes.Action2);

const createAction3 = actionFactory<ApplicationActionTypes.Action3>(ApplicationActionTypes.Action3);

export const ApplicationActions = {createAction1, createAction2, createAction3};