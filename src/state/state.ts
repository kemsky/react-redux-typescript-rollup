import { createStore, Store } from 'redux';
import { CustomAction, SimpleAction1, SimpleAction2 } from './actions';

export interface IState
{
    message: string;
}

export const store: Store<IState> = createStore((state: IState, action: CustomAction) =>
    {
        switch(action.type)
        {
            case SimpleAction1.Type:
                console.info(action.type, action.payload);
                return state;
            case SimpleAction2.Type:
                console.info(action.type, action.payload);
                return state;
            default:
                return state;
        }
    },
    {message: 'Hello 123!'}
);
