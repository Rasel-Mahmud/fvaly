import { IProduct } from '../../types';
import { cartAction } from '../actions/cartAction';
import { actionType } from '../actionsTypes';

export const addToCart = (payload: IProduct): cartAction => ({
  type: actionType.ADD_TO_CART,
  payload,
});

export const removeFromCart = (payload: string): cartAction => ({
  type: actionType.REMOVE_FROM_CART,
  payload,
});

export const clearCart = (): cartAction => ({
  type: actionType.CLEAR_CART,
});
