import { createAction, props } from '@ngrx/store';

export const loadVegetables = createAction('[Vegetables] Load Vegetables');

export const loadVegetablesSuccess = createAction(
  '[Vegetables] Load Vegetables Success',
  props<{ vegetables: any[] }>()
);

export const loadVegetablesFailure = createAction(
  '[Vegetables] Load Vegetables Failure',
  props<{ error: string }>()
);
