import rootReducer from "./Redux/reducers/main";
import { legacy_createStore as createStore } from "redux";

export const store = createStore(rootReducer);

export default store;
