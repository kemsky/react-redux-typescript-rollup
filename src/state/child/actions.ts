import { actionFactory } from '../actions.common';

export enum ChildActionTypes
{
    Action4 = 'Action4',
    Action5 = 'Action5',
    Action6 = 'Action6',
}

const createAction4 = actionFactory<ChildActionTypes.Action4, number>(ChildActionTypes.Action4);

const createAction5 = actionFactory<ChildActionTypes.Action5, { index: number, count: number }>(ChildActionTypes.Action5);

const createAction6 = actionFactory<ChildActionTypes.Action6>(ChildActionTypes.Action6);

export const ChildActions = {createAction4, createAction5, createAction6};