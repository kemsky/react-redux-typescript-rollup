import { put, takeLatest } from 'redux-saga/effects';
import { ApplicationActions, ApplicationActionTypes } from './actions';
import axios from 'axios';
import { promise } from '../common/sagas';
import { Dispatch } from 'react-redux';

export function* Saga1(this:{dispatch: Dispatch})
{
    //todo: no typing here, see https://github.com/Microsoft/TypeScript/issues/2983
    const result = yield promise(() => axios.get<{data:{userId:number, id:number, title:string, body:string}}>('https://jsonplaceholder.typicode.com/posts/1'));

    yield put(ApplicationActions.createAction4(JSON.stringify(result.data)));
}


export function* Saga1Watcher() {
    yield takeLatest(ApplicationActionTypes.Action3, Saga1);
}