// import { useState, useEffect } from 'react';

type Handler = (...args: any[]) => any;

function useDebouncedState<T>(
  initialState: T,
  delay: number
): [TemplateStringsArray, Handler] {
  const [state, setState] = useState(initialState);
  const [debouncedState, setDebouncedState] = useState(initialState);

  const debounce = (fn: Handler) => {
    let timerId: number | null;

    return (...args: Parameters<Handler>) => {
      if (timerId) {
        clearTimeout(timerId);
      }

      timerId = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
  };

  const setDebouncedValue = debounce((value) => {
    setDebouncedState(value);
  });

  useEffect(() => {
    setDebouncedValue(state);
  }, [state, setDebouncedValue]);

  return [debouncedState, setState];
}

// Example usage:
// function MyComponent() {
//     const [inputValue, setInputValue] = useDebouncedState('', 500);

//     const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//       setInputValue(event.target.value);
//     };

//     return (
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleChange}
//         placeholder="Type something..."
//       />
//     );
//   }
