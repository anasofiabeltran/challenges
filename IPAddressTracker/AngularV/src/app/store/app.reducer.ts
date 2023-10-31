import { createReducer, on } from '@ngrx/store';
import { initialState } from './app.state';
import { changeIp } from './app.actions';

const _appReducer = createReducer(
  initialState,
  on(changeIp, (state, action) => {
    return {
      ...state,
      IP: action.value
    }
  })
);

export function appReducer(state: any, action: any) {
  return _appReducer(state, action);
}
