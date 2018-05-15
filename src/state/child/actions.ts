import { actionFactory } from '../actions.common';

export enum ChildActionTypes
{
    Action5 = 'Action5',
    Action6 = 'Action6',
}

const createAction5 = actionFactory<ChildActionTypes.Action5, { index: number, count: number }>(ChildActionTypes.Action5);

const createAction6 = actionFactory<ChildActionTypes.Action6, string>(ChildActionTypes.Action6);

export const ChildActions = {createAction5, createAction6};