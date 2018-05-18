import { call as sagaCall, CallEffectFactory } from 'redux-saga/effects';

export function promise<T>(arg: () => Promise<T>): CallEffectFactory<Promise<T>>
{
    return sagaCall(arg) as any as CallEffectFactory<Promise<T>>;
}