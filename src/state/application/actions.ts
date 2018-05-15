import { actionFactory, ActionUnionType } from '../actions.common';

const createAction1 = actionFactory<'Action1', number>('Action1');

const createAction2 = actionFactory<'Action2', { index: number, count: number }>('Action2');

const createAction3 = actionFactory<'Action3'>('Action3');

export const ApplicationActions = {createAction1, createAction2, createAction3};

export type ApplicationActions = ActionUnionType<typeof ApplicationActions>;