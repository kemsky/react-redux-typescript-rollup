import * as React from 'react';

export interface IChildProps
{
    message: string;
}

export const Child = (p: IChildProps) => (<h1>{p.message}</h1>);
