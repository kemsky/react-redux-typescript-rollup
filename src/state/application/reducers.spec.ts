import { ApplicationActions, ApplicationActionTypes } from './actions';
import {expect} from 'chai';

describe('(Jasmine) Example', () =>
{
    describe('test group', () =>
    {
        it('action should be action!', () =>
        {
            expect(ApplicationActions.createAction1(0)).to.eql({type: ApplicationActionTypes.Action1, payload: 0});
        });
    });
});