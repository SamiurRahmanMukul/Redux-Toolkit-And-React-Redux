/*
 * Redux -> Global State Management
 * 1. Action
 * 2. Dispatch
 * 3. Reducer
 * 4. Store -> getState(), dispatch(), subscribe()
 * 5. Multiple Reducers
 * 6. Middleware
 *
 */

/*
 * Redux -> Making planning
 * state - count: 0
 * action - increment, decrement, reset
 * reducer - switch case
 * store - getState(), dispatch(), subscribe()
 *
 */

// ! require redux and create store
// store --> holds the state and the reducer
const { createStore, combineReducers, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

// ! defining constants
const INCREMENT = "INCREMENT";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const ADD_USER = "ADD_USER";

const ADD_PRODUCT = "ADD_PRODUCT";
const NUMBER_OF_PRODUCTS = "NUMBER_OF_PRODUCTS";

// ! state
const initialCountState = {
  user: [{ name: "John" }],
  count: 1,
};

const initialProductsState = {
  addProducts: [{ name: "Milk", price: "2.99" }],
  numberOfProducts: 1,
};

// ! action --> object with type and payload
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};
const incrementCounterByValue = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value,
  };
};
const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};
const resetCounter = () => {
  return {
    type: RESET,
  };
};
const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

const addProductsAction = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};
const numberOfProductsAction = () => {
  return {
    type: NUMBER_OF_PRODUCTS,
  };
};

// ! reducer --> takes in the state and action and returns the new state
// create reducer for counter
const counterReducer = (state = initialCountState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case INCREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };
    case ADD_USER:
      return {
        user: [...state.user, action.payload],
        count: state.count + 1,
      };
    default:
      return state;
  }
};

const productsReducer = (state = initialProductsState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        addProducts: [...state.addProducts, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };
    case NUMBER_OF_PRODUCTS:
      return {
        ...state,
        numberOfProducts: state.numberOfProducts + 1,
      };
    default:
      return state;
  }
};

// ! Multiple Reducers --> combineReducers
const rootReducer = combineReducers({
  counter: counterReducer,
  products: productsReducer,
});

// ! create store
const store = createStore(rootReducer, applyMiddleware(logger));

store.subscribe(() => {
  console.log(store.getState());
  console.log(store.getState().counter);
  console.log(store.getState().products);
});

// dispatch action
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());

// store.dispatch(resetCounter());

// store.dispatch(decrementCounter());
// store.dispatch(decrementCounter());
// store.dispatch(decrementCounter());
// store.dispatch(decrementCounter());

// store.dispatch(incrementCounterByValue(5));
// store.dispatch(incrementCounterByValue(15));

store.dispatch(addUser({ name: "Mukul" }));
store.dispatch(addUser({ name: "Alam" }));
store.dispatch(addUser({ name: "Arif" }));
store.dispatch(addUser({ name: "Mizan" }));

store.dispatch(addProductsAction({ name: "Egg", price: "3.99" }));
store.dispatch(addProductsAction({ name: "Mutton", price: "6.99" }));
store.dispatch(addProductsAction({ name: "Brief", price: "8.99" }));
store.dispatch(addProductsAction({ name: "Chicken", price: "4.99" }));
