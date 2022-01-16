import { createStore } from "redux";
import CartReducers from "../Reducers/CartReducers";

export const Store = createStore(CartReducers);