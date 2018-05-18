import { ApplicationActions, ApplicationActionTypes } from './actions';


describe('(Jasmine) Example', () =>
{
    describe('test group', () =>
    {
        it('action should be action!', () =>
        {
            expect(ApplicationActions.createAction1(0)).toEqual({type: ApplicationActionTypes.Action1, payload: 0});
        });
    });
});