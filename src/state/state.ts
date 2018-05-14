import { combineReducers, createStore, Store } from 'redux';
import { ApplicationReducer } from './application/reducers';

export const store: Store<IState> = createStore(combineReducers(ApplicationReducer), {message: 'Hello 123!'});
