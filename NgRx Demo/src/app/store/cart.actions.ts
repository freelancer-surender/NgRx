import { createAction, props } from "@ngrx/store";

export const addToCart = createAction('[Item] Add To Cart', props<{msg: string}>());
export const removeFromCart = createAction('[Item] Remove From Cart');
