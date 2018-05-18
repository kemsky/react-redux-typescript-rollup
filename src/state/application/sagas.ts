import { put, takeLatest } from 'redux-saga/effects';
import { ApplicationActions, ApplicationActionTypes } from './actions';
import axios from 'axios';
import { promise } from '../common/sagas';

interface IPostResult
{
    data: { userId: number, id: number, title: string, body: string };
}

export function* Saga1()
{
    //todo: no typing here, see https://github.com/Microsoft/TypeScript/issues/2983
    const result:IPostResult = yield promise(() => axios.get<IPostResult>('https://jsonplaceholder.typicode.com/posts/1'));

    yield put(ApplicationActions.createAction4(JSON.stringify(result.data)));
}


export function* Saga1Watcher()
{
    yield takeLatest(ApplicationActionTypes.Action3, Saga1);
}