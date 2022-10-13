export const ADD_ITEM = (state, payload) => {
  const item = state.find((p) => p.id === payload.id);
  if (item) {
    return state.map((p) =>
      p.id === payload.id ? { ...p, count: p.count + 1 } : p
    );
  } else {
    return [...state, { ...payload, count: 1 }];
  }
};

export const DECREASE_CART_ITEM = (state, payload) => {
  const item = state.find((p) => p.id === payload.id);
  if (item.count > 1) {
    return state.map((p) =>
      p.id === payload.id ? { ...p, count: p.count - 1 } : p
    );
  } else {
    return state.filter((item) => item.id !== payload.id);
  }
};
