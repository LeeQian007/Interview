let shopping = [];

const ShoppingBag = {
  getBag: () => console.log(shopping),
  addBag: (item) => shopping.push(item),
};

const singletonShopping = Object.freeze(ShoppingBag);

export default singletonShopping;
