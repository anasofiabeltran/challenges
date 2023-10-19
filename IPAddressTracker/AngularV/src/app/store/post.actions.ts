import { createAction, props } from "@ngrx/store";

export const getIp= createAction("getIp",props<{value:number}>())
