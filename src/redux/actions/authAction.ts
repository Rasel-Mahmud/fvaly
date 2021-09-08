import { IAuth } from '../../types';
import { actionType } from '../actionsTypes';

interface loginSuccessAction {
  type: actionType.LOGIN_SUCCESS;
  payload: IAuth;
}

interface loginPendingAction {
  type: actionType.LOGIN_PENDING;
}

interface loginErrorAction {
  type: actionType.LOGIN_ERROR;
  payload: string;
}

interface logoutAction {
  type: actionType.LOGOUT;
}

export type authAction =
  | loginSuccessAction
  | loginPendingAction
  | loginErrorAction
  | logoutAction;
