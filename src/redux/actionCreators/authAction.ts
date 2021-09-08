import { Dispatch } from 'react';
import AuthService from '../../services/AuthService';
import { authAction } from '../actions/authAction';
import { actionType } from '../actionsTypes';

export const login =
  (payload: { email: string; password: string }) =>
  (dispatch: Dispatch<authAction>) => {
    dispatch({
      type: actionType.LOGIN_PENDING,
    });
    AuthService.login(payload)
      .then((data) => {
        dispatch({
          type: actionType.LOGIN_SUCCESS,
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: actionType.LOGIN_ERROR,
          payload: err?.response?.data?.message,
        });
      });
  };

export const logout = () => ({
  type: actionType.LOGOUT,
});
