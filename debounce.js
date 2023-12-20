debounce = (func, delay) => {
  let timerId;

  return function (...args) {
    // console.log(this) should be sync with func

    clearTimeout(timerId);

    timerId = setTimeout(() => {
      // so make the this point to the button and give args to make "e" of handleInput works!
      func.apply(this, args);
    }, delay);
  };
};

handleInput = (e, p1) => {
  console.log("handle your logic");
};

document
  .querySelector("xx")
  .addEventListener("input", debounce(handleInput, 500));
