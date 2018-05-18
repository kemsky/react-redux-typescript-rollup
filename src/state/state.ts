import { applyMiddleware, createStore, Store } from 'redux';
import { ApplicationReducer } from './application/reducers';
import { composeMiddleware } from './common/middleware';
import createSagaMiddleware from 'redux-saga';
import { Saga1Watcher } from './application/sagas';

const sagaMiddleware = createSagaMiddleware();

export const store: Store<IState> = createStore(
    ApplicationReducer,
    {message: 'Hello 123!'},
    composeMiddleware(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(Saga1Watcher);