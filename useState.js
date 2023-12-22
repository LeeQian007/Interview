// import...

const MyReact = (() => {
  //
  let _state;
  function useState(initialState) {
    // 每次重新赋值state 判断是否是初始化
    _state = _state === undefined ? initialState : _state;

    // newState can be a function or a value
    const _setState = (newState) => {
      if (typeof newState === "function") {
        _state = newState(_state);
      } else {
        _state = newState;
      }
      // after change the value needing re-render
      render();
    };

    // return a array so that can customize the name
    return [_state, _setState];
  }
  //

  //   function render() {
  //     ReactDOM.render(JSX, document.querySelector(...))
  //   }

  return {
    useState,
  };
})();

const { useState } = MyReact;

function App() {
  const [count, setCount] = useState("");

  return (
    <div onClick={setCount(count + 1)}>
      <div onClick={setCount((count) => count + 1)}>hey</div>
    </div>
  );
}

export default App;
