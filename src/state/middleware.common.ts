// @ts-ignore:6133

import { applyMiddleware, StoreEnhancer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


/* tslint:disable */

//todo: this is required fix for 'redux-devtools-extension'

declare module 'redux'
{
    export type GenericStoreEnhancer<Ext= any, StateExt = any> = StoreEnhancer<Ext, StateExt>
}
/* tslint:enable */

export function composeMiddleware(input:ReturnType<typeof applyMiddleware>):ReturnType<typeof applyMiddleware>
{
    if(enableDevTools)
    {
        return composeWithDevTools(input);
    }
    return input;
}