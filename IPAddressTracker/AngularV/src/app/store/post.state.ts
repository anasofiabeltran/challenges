import * as L from 'leaflet';

export const initialState={
  IP:0,
  MyMap: L.map('map').setView([51.505, -0.09], 13),
}
