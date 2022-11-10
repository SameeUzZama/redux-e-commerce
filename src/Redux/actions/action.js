export const Add = (item) => {
  return {
    type: "Add_Cart",
    payload: item,
  };
};

export const Selected = (item) => {
  return {
    type: "Detail_Cart",
    payload: item,
  };
};

export const Remove = (id) => {
  return {
    type: "Remove_Cart",
    payload: id,
  };
};
