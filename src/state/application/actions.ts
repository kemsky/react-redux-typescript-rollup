import { actionCreator } from '../actions.common';

export enum ApplicationActions
{
    SimpleAction1 = 'SimpleAction1',
    SimpleAction2 = 'SimpleAction2'
}

export const simpleAction1 = actionCreator<ApplicationActions.SimpleAction1, number>(ApplicationActions.SimpleAction1);

export const simpleAction2 = actionCreator<ApplicationActions.SimpleAction2, string>(ApplicationActions.SimpleAction2);

export type ApplicationActionType = ReturnType<typeof simpleAction1> | ReturnType<typeof simpleAction2>;