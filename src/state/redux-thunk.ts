/* tslint:disable */

//todo: wow, just wow, https://github.com/reduxjs/redux-thunk/issues/169#issuecomment-365129930

import { Action, AnyAction, Dispatch, Middleware } from 'redux';

//merge declarations with redux

export type ThunkAction<R, S, A extends Action = AnyAction, E = {}> = {
    (dispatch: Dispatch<A, S>, getState: () => S, extraArgument: E): R
};


declare module 'redux'
{
    export interface Dispatch<A extends Action = AnyAction, S = {}>
    {
        <R, E>(thunk: ThunkAction<R, S, A, E>): R
    }
}

//redux-reduxThunk code:

function createThunkMiddleware<R, S, A extends Action = AnyAction, E = {}>(extraArgument?: E): (action: any) => any
{
    return function({dispatch, getState}: { dispatch: Dispatch<A, S>, getState: () => S })
    {
        return (next: (action: A) => void) => (action: A) =>
        {
            if (typeof action === 'function')
            {
                return (action as Function)(dispatch, getState, extraArgument);
            }

            return next(action);
        };
    };
}

export type Thunk = Middleware & {
    withExtraArgument(extraArgument: any): Middleware;
};

export const thunk: Thunk = createThunkMiddleware() as Thunk;

thunk.withExtraArgument = createThunkMiddleware;

/* tslint:enable */