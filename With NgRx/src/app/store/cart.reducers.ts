import { createReducer, on } from "@ngrx/store";
import { addToCart } from "./cart.actions";
import { AppState } from "./app.state";

export const initialState: AppState = {
  cart: [],
  fruits: [],
  vegetables: []
}

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state: AppState, {item}) => {
    return {...state, cart: [...state.cart, item]}
  })
)
