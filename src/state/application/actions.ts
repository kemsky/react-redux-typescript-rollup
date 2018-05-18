import { Action } from 'redux';
import { actionFactory, ActionWithPayload } from '../common/actions';

export enum ApplicationActionTypes
{
    Action1 = 'Action1',
    Action2 = 'Action2',
    Action3 = 'Action3',
    Action4 = 'Action4',
}

export type Action1 = ActionWithPayload<ApplicationActionTypes.Action1, number>;
export type Action2 = ActionWithPayload<ApplicationActionTypes.Action2, { index: number, count: number }>;
export type Action3 = Action<ApplicationActionTypes.Action3>;
export type Action4 = ActionWithPayload<ApplicationActionTypes.Action4, string>;

const createAction1 = actionFactory<Action1>(ApplicationActionTypes.Action1);

const createAction2 = actionFactory<Action2>(ApplicationActionTypes.Action2);

const createAction3 = actionFactory<Action3>(ApplicationActionTypes.Action3);

const createAction4 = actionFactory<Action4>(ApplicationActionTypes.Action4);

export const ApplicationActions = {createAction1, createAction2, createAction3, createAction4};