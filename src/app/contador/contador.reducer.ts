import { createReducer, on } from '@ngrx/store';
import * as actions from './contador.action';

export const initialState = 20;

export const counterReducer = createReducer(
  initialState,
  on(actions.increment, (state) => state + 1),
  on(actions.decrement, (state) => state - 1),
  on(actions.multiply, (state, { numero }) => state * numero ),
  on(actions.divide, (state, { numero }) => state / numero ),
  on(actions.reset, (state) => initialState)
);
