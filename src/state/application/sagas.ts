import { call, takeLatest } from 'redux-saga/effects';
import { ApplicationActions, ApplicationActionTypes } from './actions';
import axios from 'axios';
import { store } from '../state';

export function* Saga1()
{
    const result = yield call(() => axios.get('https://jsonplaceholder.typicode.com/posts/1'));

    store.dispatch(ApplicationActions.createAction4(JSON.stringify(result)));
}


export function* Saga1Watcher() {
    yield takeLatest(ApplicationActionTypes.Action3, Saga1);
}