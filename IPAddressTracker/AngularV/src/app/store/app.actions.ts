import { createAction, props } from '@ngrx/store';

export const changeIp = createAction('changeIp', props<{ value: string }>());
