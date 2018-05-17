import { ApplicationActions } from './application/actions';
import { ActionUnionType } from './actions.common';

export type RootAction = ActionUnionType<typeof ApplicationActions>;