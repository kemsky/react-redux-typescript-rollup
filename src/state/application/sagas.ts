import { takeLatest } from 'redux-saga/effects';
import { ApplicationActionTypes } from './actions';

export function* Saga1()
{
    console.log('saga works');
    yield 0;
}


export function* Saga1Watcher() {
    yield takeLatest(ApplicationActionTypes.Action3, Saga1);
}