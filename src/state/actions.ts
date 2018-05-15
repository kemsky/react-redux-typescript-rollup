import { ApplicationActions } from './application/actions';
import { ChildActions } from './child/actions';
import { ActionUnionType } from './actions.common';

export type RootAction = ActionUnionType<typeof ApplicationActions> | ActionUnionType<typeof ChildActions>;