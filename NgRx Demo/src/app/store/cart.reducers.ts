import { createReducer, on } from "@ngrx/store";
import { addToCart, removeFromCart } from "./cart.actions";

export const initialState = 0;

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, props) => {
    console.log(props);
    return state + 1;
  }),
  on(removeFromCart, state => state - 1)
)
