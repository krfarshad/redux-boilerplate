import { createStore } from "redux"
import initialState from "./initialState";
import rootReducer from "./rootReducers";

const configureStore = () =>{
    const store = createStore(rootReducer , initialState);
    return store;
}
export default configureStore;