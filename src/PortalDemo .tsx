import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

const Increment = 'inc';
const Decrement = 'dec';


const increment = () => ({ type: Increment });
const decrement = () => ({ type: Decrement });

const initialState = { count: 0 };
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case Increment:
      return { ...state, count: state.count + 1 };
    case Decrement:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};


const store = createStore(counterReducer);

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h6>Counter: {count}</h6>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

function PortalDemo() {
  return (
    <Provider store={store}>
      <div>
        PortalDemo with Redux
        <Counter />
      </div>
    </Provider>
  );
}

export default PortalDemo;
