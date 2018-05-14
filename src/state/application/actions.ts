import { Action } from 'redux';

export enum ApplicationActions
{
    SimpleAction1 = 'SimpleAction1',
    SimpleAction2 = 'SimpleAction2',
}


export abstract class SimpleAction1 implements Action
{
    public readonly type = ApplicationActions.SimpleAction1;
    public readonly payload: number;

    public static create(payload: number): SimpleAction1
    {
        return {
            type   : ApplicationActions.SimpleAction1,
            payload: payload
        };
    }
}

export abstract class SimpleAction2 implements Action
{
    public readonly type = ApplicationActions.SimpleAction2;
    public readonly payload: boolean;

    public static create(payload: boolean): SimpleAction2
    {
        return {
            type   : ApplicationActions.SimpleAction2,
            payload: payload
        };
    }
}

export type ApplicationActionType = SimpleAction1 | SimpleAction2;