export interface IActionCreatorWithTypeFn<T extends string>
{
    Type: T;
}

export interface IActionFn<T extends string> extends IActionCreatorWithTypeFn<T>
{
    (): { type: T };
}

export interface IActionWithPayloadFn<T extends string, P> extends IActionCreatorWithTypeFn<T>
{
    (payload: P): { type: T, payload: P };
}

// noinspection JSUnusedLocalSymbols
export function actionFactory<T extends string>(type: T): IActionFn<T>;
// noinspection JSUnusedLocalSymbols
export function actionFactory<T extends string, P>(type: T): IActionWithPayloadFn<T, P>;
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