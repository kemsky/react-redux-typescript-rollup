import { Action } from 'redux';

/* tslint:disable */
export interface ActionWithPayload<T, P> extends Action<T>
{
    payload: P;
}
/* tslint:enable */

type ExtractType<T> = T extends Action<infer A> ? A : never;
type ExtractPayload<T> = T extends ActionWithPayload<infer A, infer B> ? B : never;

type ActionFactory<T> = () => Action<ExtractType<T>>;
type ActionWithPayloadFactory<T> = (payload: ExtractPayload<T>) => ActionWithPayload<ExtractType<T>, ExtractPayload<T>>;

export function actionFactory<T extends ActionWithPayload<any, any>>(type: ExtractType<T>): ActionWithPayloadFactory<T>;
export function actionFactory<T extends Action<any>>(type: ExtractType<T>): ActionFactory<T>;
export function actionFactory<T extends Action<T>>(type: ExtractType<T>)
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