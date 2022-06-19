import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter, resetCounter } from "../redux/actions/counterAction";

export const Counter = () => {
  const dispatch = useDispatch();
  const reduxCount = useSelector((state) => state.counter.count);

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };

  const handleDecrement = () => {
    dispatch(decrementCounter());
  };

  const handleReset = () => {
    dispatch(resetCounter());
  };

  return (
    <div>
      <h2>Counter App: {reduxCount}</h2>

      {/* Counter Increment / Decrement / Reset Button */}
      <button className="App-btn" onClick={handleIncrement}>
        Increment (+)
      </button>
      <button className="App-btn" onClick={handleDecrement}>
        Decrement (-)
      </button>
      <button className="App-btn" onClick={handleReset}>
        Reset (0)
      </button>
    </div>
  );
};

// ! STATE MANAGEMENT USING REDUX
// state --> count: 0
// ? actions --> increment, decrement, reset
// ? reducer --> increment -> count => count + 1
// (+) increment -> count => count + 1
// (-) decrement -> count => count - 1
// (0) reset -> count => 0
// ? store
// ? providing store in react app
// ? use store
