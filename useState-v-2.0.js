// import...

const MyReact = (() => {
  //
  let _states = [],
    _setStates = [];

  let index = 0;

  function createState(initialState, index) {
    return _states[index] !== undefined ? _states : initialState;
  }

  function createStateSetter(index) {
    const specificState = _states[index];
    return function (newState) {
      if (typeof newState === "function") {
        specificState = newState(specificState);
      } else {
        specificState = newState;
      }
    };
    // render()
  }

  function useState(initialState) {
    _states[index] = createState(initialState, index);
    if (!_setStates[index]) {
      _setStates.push(createStateSetter(index));
    }
    index++;

    return [_states, _setStates];
  }

  // render() {
  //   index = 0
  // }

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
