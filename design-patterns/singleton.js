// good: save memory
let instance;

class ShoppingBag {
  constructor() {
    if (instance) {
      throw new Error("this instance already exists!");
    }
    this.bag = [];
    instance = this;
  }

  getBag() {
    console.log(this.bag);
  }
  addBag(item) {
    this.bag.push(item);
  }
}

// Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
const singletonShopping = Object.freeze(new ShoppingBag());

export default singletonShopping;
