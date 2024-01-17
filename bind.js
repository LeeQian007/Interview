Function.prototype.MyBind = function (context) {
  // 收集 args except the first one
  let bindArgs = Array.prototype.slice.call(arguments, 1);

  // 收集 fn
  let that = this;

  function gn() {
    let args = Array.prototype.slice.call(arguments);
    return that.apply(context, bindArgs.concat(args));
  }

  return gn;
};

// fn.bind(this, a1, a2...)
