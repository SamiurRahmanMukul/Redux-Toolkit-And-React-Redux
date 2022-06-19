import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
const thunk = require("redux-thunk").default;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
