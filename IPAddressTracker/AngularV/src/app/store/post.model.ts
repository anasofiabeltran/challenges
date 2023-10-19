import { createReducer, on } from "@ngrx/store";
import { initialState } from "./post.state";
import { getIp } from "./post.actions";
import * as L from 'leaflet';


const _ipReducer = createReducer(
  initialState,
  on(getIp,(state,action)=>{
    return{
      ...state,
      IP:action.value,
    }
  }),
)
