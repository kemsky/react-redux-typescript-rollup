import * as React from 'react';
import { Hello } from './Hello';

export class App extends React.Component<object, object>
{
    public render()
    {
        return (<Hello compiler={'TypeScript 2.8.3'} framework={'React'}/>);
    }
}