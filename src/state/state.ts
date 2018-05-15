import { createStore, Store } from 'redux';
import { ApplicationReducer } from './application/reducers';

export const store: Store<IState> = createStore(ApplicationReducer, {message: 'Hello 123!'});
