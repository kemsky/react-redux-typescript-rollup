import * as React from 'react';
import { ConnectedChild } from './child';
import { store } from '../state';
import { SimpleAction1 } from '../state/actions';

export class Application extends React.Component<object, object>
{
    public onClick(event: React.MouseEvent<HTMLDivElement>): void
    {
        //store.dispatch(new SimpleAction1(42));
        store.dispatch({type: SimpleAction1.Type, payload: 42});
    }

    public render()
    {
        return (<div onClick={e => this.onClick(e)}><ConnectedChild/></div>);
    }
}