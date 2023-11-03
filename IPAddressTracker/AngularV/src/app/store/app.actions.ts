import { createAction, props } from '@ngrx/store';

export const changeIp = createAction('changeIp', props<{ value: string }>());
export const changeIpData = createAction('changeIpData', props<{ value: object }>());
