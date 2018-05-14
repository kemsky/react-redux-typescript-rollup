import * as React from 'react';
import { connect } from 'react-redux';
export interface IChildProps
{
    message: string;
}

const Child = (p: IChildProps) => (<h1>{p.message}</h1>);

export const ConnectedChild = connect((state: IState) =>
{
    return {message: state.message};
})(Child);