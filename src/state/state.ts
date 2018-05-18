import { applyMiddleware, createStore, Store } from 'redux';
import { ApplicationReducer } from './application/reducers';
import { composeMiddleware } from './middleware.common';

export const store: Store<IState> = createStore(
    ApplicationReducer,
    {message: 'Hello 123!'},
    composeMiddleware(applyMiddleware())
);