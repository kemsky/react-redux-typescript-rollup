import { Action, createStore, Store } from 'redux';

export interface IState
{
    message: string;
}

export const store: Store<IState> = createStore((state: IState, action: Action) => state, {message: 'Hello 123!'});
