import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface IHelloProps
{
    compiler: string;
    framework: string;
}

const Hello = (props: IHelloProps) => (<h1>Hello from {props.compiler} and {props.framework}! And me!</h1>);

ReactDOM.render(
    <Hello compiler='typescript' framework='react'/>,
    document.getElementById('app')
);
