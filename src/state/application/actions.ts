import { actionFactory } from '../actions.common';
import { Dispatch } from 'react-redux';
import { AnyAction } from 'redux';

export enum ApplicationActionTypes
{
    Action1 = 'Action1',
    Action2 = 'Action2',
    Action3 = 'Action3',
    Action4 = 'Action4',
}

const createAction1 = actionFactory<ApplicationActionTypes.Action1, number>(ApplicationActionTypes.Action1);

const createAction2 = actionFactory<ApplicationActionTypes.Action2, { index: number, count: number }>(ApplicationActionTypes.Action2);

const createAction3 = actionFactory<ApplicationActionTypes.Action3>(ApplicationActionTypes.Action3);

const createAction4 = actionFactory<ApplicationActionTypes.Action4, string>(ApplicationActionTypes.Action4);

export const ApplicationActions = {createAction1, createAction2, createAction3, createAction4};

export const thunkAction = (location: string) =>
{
    return (dispatch: Dispatch<AnyAction>) =>
    {
        dispatch(ApplicationActions.createAction4(location));
    };
};