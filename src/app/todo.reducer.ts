import { Action, createReducer, on } from '@ngrx/store';
import { Tarea } from './task';
import { crear } from './todo.actions';

export const initialState: Tarea[] = [];

export const _todoReducer = createReducer(
  initialState,
  on(crear, (state, { name }) => [...state, { name: name, checked: false }]),
);

export function todoReducer(state: any, action: Action) {
  return _todoReducer(state, action)
}
