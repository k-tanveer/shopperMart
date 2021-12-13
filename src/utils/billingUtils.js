export const totalQuantity = items =>
  items.reduce((totalItems, item) => totalItems + item.quantity, 0);

export const totalPrice = items =>
  items.reduce(
    (totalItems, item) => totalItems + item.quantity * item.price,
    0,
  );
