const Initial_State = {
  carts: [],
  products: [],
  selected: [],
};

export const cartReducer = (state = Initial_State, action) => {
  switch (action.type) {
    case "Add_Cart":
      return {
        ...state,
        carts: [...state.carts, action.payload],
      };
    case "Detail_Cart":
      return {
        ...state,
        selected: [action.payload],
      };
    case "Remove_Cart":
      const filtered = state.carts.filter((item) => item.id !== action.payload);
      return {
        ...state,
        carts: filtered,
      };
    case "Add_Product":
      return {
        ...state,
        products: [...action.payload, ...state.products],
      };
    default:
      return state;
  }
};
