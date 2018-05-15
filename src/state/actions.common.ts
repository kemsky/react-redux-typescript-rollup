export type ActionFn<T> = () => { type: T };
export type ActionPayloadFn<T, P> = (payload: P) => { type: T, payload: P };

// noinspection JSUnusedLocalSymbols
export function actionCreatorFactory<T>(type: T): ActionFn<T>;
// noinspection JSUnusedLocalSymbols
export function actionCreatorFactory<T, P>(type: T): ActionPayloadFn<T, P>;
export function actionCreatorFactory<T, P>(type: T): ActionFn<T> | ActionPayloadFn<T, P>
{
    return (payload?: P) => typeof payload === 'undefined' ? {type: type} : {type: type, payload: payload};
}