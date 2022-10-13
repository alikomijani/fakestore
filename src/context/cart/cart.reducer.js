function cartReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case cartActions.add: {
      const item = state.find((p) => p.id === payload.id);
      if (item) {
        return state.map((p) =>
          p.id === payload.id ? { ...p, count: p.count + 1 } : p
        );
      } else {
        return [...state, { ...payload, count: 1 }];
      }
    }
    case cartActions.remove: {
      return state.filter((item) => item.id !== payload.id);
    }
    case cartActions.clear:
      return [];
    case cartActions.decrease: {
      const item = state.find((p) => p.id === payload.id);
      if (item.count > 1) {
        return state.map((p) =>
          p.id === payload.id ? { ...p, count: p.count - 1 } : p
        );
      } else {
        return state.filter((item) => item.id !== payload.id);
      }
    }
    default: {
      return state;
    }
  }
}

const cartActions = {
  add: "ADD_CART_ITEM",
  remove: "REMOVE_CART_ITEM",
  decrease: "DECREASE_CART_ITEM",
  clear: "CLEAR_CART",
};

export { cartActions, cartReducer };
