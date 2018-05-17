import {ApplicationActionTypes} from '../src/state/application/actions';


describe('(Jasmine) Example', () =>
{
    describe('test group', () =>
    {
        it('action should be action!', () =>
        {
            expect(ApplicationActionTypes.Action1).toBe('Action1');
        });
    });
});