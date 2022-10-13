export const cartActions = {
  ADD: "ADD_CART_ITEM",
  REMOVE: "REMOVE_CART_ITEM",
  DECREASE: "DECREASE_CART_ITEM",
  CLEAR: "CLEAR_CART",
};

export const addItemToCart = (item) => {
  return {
    type: cartActions.ADD,
    payload: item,
  };
};

export const removeItemFromCart = (item) => {
  return {
    type: cartActions.CLEAR,
    payload: item,
  };
};

export const decreaseItemFromCart = (item) => {
  return {
    type: cartActions.DECREASE,
    payload: item,
  };
};

export const clearCart = () => {
  return {
    type: cartActions.CLEAR,
  };
};
