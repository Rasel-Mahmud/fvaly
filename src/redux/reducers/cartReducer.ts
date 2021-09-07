import { actionType } from '../actionsTypes';
import { cartAction } from '../actions/cartAction';
import { IProduct } from '../../types';

const cartReducer = (state: IProduct[] = [], action: cartAction) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      return [...state, action.payload];
    case actionType.REMOVE_FROM_CART: {
      const newState = state.filter((item) => item._id !== action.payload);
      return newState;
    }
    case actionType.CLEAR_CART:
      return [];
    default:
      return state;
  }
};

export default cartReducer;
