import { createAction, props } from '@ngrx/store';

export const loadFruits = createAction('[Fruits] Load Fruits');

export const loadFruitsSuccess = createAction(
  '[Fruits] Load Fruits Success',
  props<{ fruits: any[] }>()
);

export const loadFruitsFailure = createAction(
  '[Fruits] Load Fruits Failure',
  props<{ error: string }>()
);
