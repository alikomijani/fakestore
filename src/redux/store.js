import rootReducer from "./reducers/rootReducers";
import { createStore } from "redux";

const store = createStore(rootReducer);

export default store;
