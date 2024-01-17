// const fn = (a,b)=> a+b
// args is the args of fn. args is an Array
// fn.apply(this, args)
Function.prototype.MyApply = function (context, args) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  //
  context = context ? Object(context) : window;

  // this === fn
  // context.fn()  --> change this to "context"
  let fn = Symbol();
  context[fn] = this;
  if (!args) {
    context.fn();
  }
  let result = context.fn(...args);
  delete context.fn;
  return result;
};
