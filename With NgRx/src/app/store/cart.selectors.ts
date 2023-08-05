import { createSelector } from "@ngrx/store";
import { AppState } from "./app.state";

export const selectCart = (state: AppState) => state.cart;

export const selectCartQuantity = createSelector(selectCart, (state) => {
  return state.cart.length;
})
