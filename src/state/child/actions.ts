import { actionFactory } from '../actions.common';

const createAction4 = actionFactory<'Action4', number>('Action4');

const createAction5 = actionFactory<'Action5', { index: number, count: number }>('Action5');

const createAction6 = actionFactory<'Action6'>('Action6');

export const ChildActions = {createAction4, createAction5, createAction6};