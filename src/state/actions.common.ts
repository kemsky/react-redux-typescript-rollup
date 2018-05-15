export type ActionFn<T> = () => { type: T };
export type ActionPayloadFn<T, P> = (payload: P) => { type: T, payload: P };

// noinspection JSUnusedLocalSymbols
export function actionFactory<T>(type: T): ActionFn<T>;
// noinspection JSUnusedLocalSymbols
export function actionFactory<T, P>(type: T): ActionPayloadFn<T, P>;
export function actionFactory<T, P>(type: T): ActionFn<T> | ActionPayloadFn<T, P>
{
    return (payload?: any) =>
    {
        if (typeof payload === 'undefined')
        {
            return {type: type};
        }
        else
        {
            return {type: type, payload: payload};
        }
    };
}

export type Fn = (...args: any[]) => any;
export type FnMap = { [key: string]: Fn };
export type ActionUnionType<T extends FnMap> = ReturnType<T[keyof T]>; //union of return types