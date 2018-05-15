import { applyMiddleware, createStore, Store } from 'redux';
import { ApplicationReducer } from './application/reducers';
import { thunk } from './redux-thunk';

export const store: Store<IState> = createStore(ApplicationReducer, {message: 'Hello 123!'}, applyMiddleware(thunk));
