/*
 * async actions - api calling
 * api url - https://jsonplaceholder.typicode.com/todos
 * middleware - redux-thunk
 * axios for api calling
 *
 */

// ! require dependencies
const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk").default;
const axios = require("axios");

// api url
const apiUrl = "https://jsonplaceholder.typicode.com/todos";

// ! constants
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAILED = "GET_TODOS_FAILED";

// ! states
const initialTodosState = {
  todos: [],
  isLoading: false,
  error: null,
};

// ! actions
const getTodosRequest = () => {
  return {
    type: GET_TODOS_REQUEST,
  };
};
const getTodosSuccess = (todos) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload: todos,
  };
};
const getTodosFailed = (error) => {
  return {
    type: GET_TODOS_FAILED,
    payload: error,
  };
};

// ! reducers
const todosReducer = (state = initialTodosState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };
    case GET_TODOS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// ! async action creator
const fetchData = () => {
  return (dispatch) => {
    dispatch(getTodosRequest()); // dispatch action when request is sent

    axios
      .get(apiUrl)
      .then((response) => {
        // const todos = response.data;
        // const titles = todos.map((todo) => todo.title);
        dispatch(getTodosSuccess(response.data)); // dispatch action when request is success
      })
      .catch((error) => {
        dispatch(getTodosFailed(error)); // dispatch action when request is failed
      });
  };
};

// ! store
const store = createStore(todosReducer, applyMiddleware(thunk));

// ! subscribe store
store.subscribe(() => {
  console.log(store.getState());
});

// ! dispatch actions
store.dispatch(fetchData());
