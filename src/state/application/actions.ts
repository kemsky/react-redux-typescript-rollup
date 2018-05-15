import { actionFactory, ActionUnionType } from '../actions.common';

const enum ApplicationActionNames
{
    Action1 = 'Action1',
    Action2 = 'Action2',
    Action3 = 'Action3',
}

const createAction1 = actionFactory<ApplicationActionNames.Action1, number>(ApplicationActionNames.Action1);

const createAction2 = actionFactory<ApplicationActionNames.Action2, { index: number, count: number }>(ApplicationActionNames.Action2);

const createAction3 = actionFactory<ApplicationActionNames.Action3>(ApplicationActionNames.Action3);

export const ApplicationActions = {createAction1, createAction2, createAction3};

export type ApplicationActions = ActionUnionType<typeof ApplicationActions>;