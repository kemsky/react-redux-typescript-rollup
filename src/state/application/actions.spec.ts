import { ApplicationActions, ApplicationActionTypes } from './actions';


describe('(Jasmine) Example 1', () =>
{
    describe('test group 1', () =>
    {
        it('Jasmine action should be action!', () =>
        {
            expect(ApplicationActions.createAction1(0)).toEqual({type: ApplicationActionTypes.Action1, payload: 0});
        });
    });
});