import * as React from 'react';
import { ConnectedChild } from './child';
import { store } from '../state';
import { SimpleAction1 } from '../state/application/actions';

export class Application extends React.Component<object, object>
{
    public onClick(event: React.MouseEvent<HTMLDivElement>): void
    {
        store.dispatch(SimpleAction1.create(42));
    }

    public render()
    {
        return (<div onClick={e => this.onClick(e)}><ConnectedChild/></div>);
    }
}