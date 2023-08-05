import { createReducer, on } from "@ngrx/store";
import { AppState } from "./app.state";
import { loadVegetablesSuccess } from "./vegetables.actions";


export const initialState: AppState = {
  cart: [],
  fruits: [],
  vegetables: []
}

export const vegetablesReducer = createReducer(
  initialState,
  on(loadVegetablesSuccess, (state: AppState, { vegetables }) => {
    return { ...state, vegetables }
  })
)
