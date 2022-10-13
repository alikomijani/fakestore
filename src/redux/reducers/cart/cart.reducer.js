import { cartActions } from "./cart.actions";
import { ADD_ITEM, DECREASE_CART_ITEM } from "./cart.reducer.utils";

function cartReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case cartActions.ADD:
      return ADD_ITEM(state, payload);
    case cartActions: {
      return state.filter((item) => item.id !== payload.id);
    }
    case cartActions.CLEAR:
      return [];
    case cartActions.DECREASE: {
      return DECREASE_CART_ITEM(state, payload);
    }
    default: {
      return state;
    }
  }
}

export default cartReducer;
