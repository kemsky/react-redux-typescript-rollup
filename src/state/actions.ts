import { ApplicationActions } from './application/actions';
import { ActionUnionType } from './common/actions';

export type RootAction = ActionUnionType<typeof ApplicationActions>;