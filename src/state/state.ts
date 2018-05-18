import { applyMiddleware, createStore, Store } from 'redux';
import { ApplicationReducer } from './application/reducers';
import { composeMiddleware } from './common/middleware';

export const store: Store<IState> = createStore(
    ApplicationReducer,
    {message: 'Hello 123!'},
    composeMiddleware(applyMiddleware())
);