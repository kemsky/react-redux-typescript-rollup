import * as React from 'react';
import { ConnectedChild } from './child';
import { createAction1, createAction2 } from '../state/application/actions';
import { store } from '../state/state';

export class Application extends React.Component<object, object>
{
    public onClick(event: React.MouseEvent<HTMLDivElement>): void
    {
        store.dispatch(createAction1(42));
        store.dispatch(createAction2({count:1, index: 1}));
    }

    public render()
    {
        return (<div onClick={e => this.onClick(e)}><ConnectedChild/></div>);
    }
}