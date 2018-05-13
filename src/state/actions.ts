import { Action } from 'redux';

export abstract class SimpleAction1 implements Action
{
    public static readonly Type = 'SimpleAction1';

    public readonly type = SimpleAction1.Type;
    public readonly payload: number;

    public static create(payload: number): SimpleAction1
    {
        return {
            type   : SimpleAction1.Type,
            payload: payload
        };
    }
}

export abstract class SimpleAction2 implements Action
{
    public static readonly Type = 'SimpleAction2';

    public readonly type = SimpleAction2.Type;
    public readonly payload: boolean;

    public static create(payload: boolean): SimpleAction2
    {
        return {
            type   : SimpleAction2.Type,
            payload: payload
        };
    }
}

export type CustomAction = SimpleAction1 | SimpleAction2;