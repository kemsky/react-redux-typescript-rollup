import * as React from 'react';
import { ConnectedChild } from './child';
import { simpleAction1 } from '../state/application/actions';
import { store } from '../state/state';

export class Application extends React.Component<object, object>
{
    public onClick(event: React.MouseEvent<HTMLDivElement>): void
    {
        store.dispatch(simpleAction1(42));
    }

    public render()
    {
        return (<div onClick={e => this.onClick(e)}><ConnectedChild/></div>);
    }
}