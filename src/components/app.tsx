import * as React from 'react';
import { Child } from './child';

export class App extends React.Component<object, object>
{
    public render()
    {
        return (<Child message={'Hello!'}/>);
    }
}