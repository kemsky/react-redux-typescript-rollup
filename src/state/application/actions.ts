export enum ApplicationActions
{
    SimpleAction1 = 'SimpleAction1',
    SimpleAction2 = 'SimpleAction2',
}

export const SimpleAction2 = 'SimpleAction2';

export const simpleAction1 = (payload: number) => ({
    type   : ApplicationActions.SimpleAction1 as typeof ApplicationActions.SimpleAction1,
    payload: payload
});

export const simpleAction2 = (payload: string) => ({
    type   : ApplicationActions.SimpleAction2 as typeof ApplicationActions.SimpleAction2,
    payload: payload
});


export type ApplicationActionType = ReturnType<typeof simpleAction1> | ReturnType<typeof simpleAction2>;