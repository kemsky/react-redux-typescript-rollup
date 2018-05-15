export interface IActionCreatorWithType<T extends string> extends Function
{
    Type: T;
}

export interface IActionFn<T extends string> extends IActionCreatorWithType<T>
{
    (): { type: T };
}

export interface IActionPayloadFn<T extends string, P> extends IActionCreatorWithType<T>
{
    (payload: P): { type: T, payload: P };
}

// noinspection JSUnusedLocalSymbols
export function actionFactory<T extends string>(type: T): IActionFn<T>;
// noinspection JSUnusedLocalSymbols
export function actionFactory<T extends string, P>(type: T): IActionPayloadFn<T, P>;
export function actionFactory<T extends string, P>(type: T)
{
    return Object.assign(function actionCreator(payload?: P)
    {
        if (typeof payload === 'undefined')
        {
            return {type: type};
        }
        else
        {
            return {type: type, payload: payload};
        }
    }, {Type: type});
}

export type Fn = (...args: any[]) => any;
export type FnMap = { [key: string]: Fn };
export type ActionUnionType<T extends FnMap> = ReturnType<T[keyof T]>; //union of return types