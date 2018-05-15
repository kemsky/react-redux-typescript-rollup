export type ActionFn<T> = ()=> {type:T};
export type ActionPayloadFn<T, P> = (payload:P)=> {type:T, payload:P};

export function actionCreator<T>(type: T): ActionFn<T>;
export function actionCreator<T, P>(type: T): ActionPayloadFn<T, P>;
export function actionCreator<T, P>(type:T): ActionFn<T> | ActionPayloadFn<T, P>
{
    return (payload?:any) => typeof payload === 'undefined' ? {type:type} :{type: type, payload: payload};
}