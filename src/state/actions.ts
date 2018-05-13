import { Action } from 'redux';

export class SimpleAction1 implements Action
{
    public static readonly Type = 'SimpleAction1';

    public readonly type = SimpleAction1.Type;
    public readonly payload:number;

    constructor(payload: number)
    {
        this.payload = payload;
    }
}

export class SimpleAction2 implements Action
{
    public static readonly Type = 'SimpleAction2';

    public readonly type = SimpleAction2.Type;
    public readonly payload:boolean;

    constructor(payload: boolean)
    {
        this.payload = payload;
    }
}

export type CustomAction = SimpleAction1 | SimpleAction2;