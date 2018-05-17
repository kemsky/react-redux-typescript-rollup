import * as React from 'react';
import { ConnectedChild } from './child';
import { ApplicationActions } from '../state/application/actions';
import { store } from '../state/state';

export class Application extends React.Component<object, object>
{
    public onClick(event: React.MouseEvent<HTMLDivElement>): void
    {
        store.dispatch(ApplicationActions.createAction1(42));
        store.dispatch(ApplicationActions.createAction2({count:1, index: 1}));
        store.dispatch(ApplicationActions.createAction3());
    }

    public render()
    {
        return (<div onClick={e => this.onClick(e)}><ConnectedChild/></div>);
    }
}