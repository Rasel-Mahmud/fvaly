import { actionType } from '../actionsTypes';
import { IAuth } from '../../types';
import { authAction } from '../actions/authAction';

interface IAuthState {
  data: IAuth | null;
  status: 'idle' | 'pending' | 'success' | 'error';
  error: string | null;
  test?: string;
}

const initialState: IAuthState = {
  data: null,
  status: 'idle',
  error: null,
};

const authReducer = (
  // eslint-disable-next-line no-unused-vars
  state: IAuthState = initialState,
  action: authAction
): IAuthState => {
  switch (action.type) {
    case actionType.LOGIN_PENDING:
      return {
        data: null,
        status: 'pending',
        error: null,
      };
    case actionType.LOGIN_SUCCESS:
      return {
        data: action.payload,
        status: 'success',
        error: null,
      };
    case actionType.LOGIN_ERROR:
      return {
        data: null,
        status: 'error',
        error: action.payload,
      };
    case actionType.LOGOUT:
      return initialState;
    default:
      return initialState;
  }
};

export default authReducer;
