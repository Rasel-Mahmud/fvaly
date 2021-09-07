import { IProduct } from '../../types';
import { actionType } from '../actionsTypes';

interface addToCartAction {
  type: actionType.ADD_TO_CART;
  payload: IProduct;
}

interface removeFromCartAction {
  type: actionType.REMOVE_FROM_CART;
  payload: string;
}

interface clearCartAction {
  type: actionType.CLEAR_CART;
}

export type cartAction =
  | addToCartAction
  | removeFromCartAction
  | clearCartAction;
