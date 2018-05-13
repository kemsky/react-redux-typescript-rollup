import * as React from 'react';
import { ConnectedChild } from './child';

export class Application extends React.Component<object, object>
{
    public render()
    {
        return (<ConnectedChild/>);
    }
}