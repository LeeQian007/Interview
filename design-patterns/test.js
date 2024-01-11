// import single from "./singleton.js";

// console.log(single.bag);
let instance;
class ShoppingBag {
  constructor() {
    if (instance) {
      throw new Error("already existed");
    }
    instance = this;
    this.bag = [];
  }

  getBag() {
    console.log(this.bag);
  }
}
const singleton = Object.freeze(new ShoppingBag());
