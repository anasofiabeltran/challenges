import * as L from 'leaflet';

export function tilelayer(myMap: any) {
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(myMap);
}

export const addMarker = (myMap:any,location:any) => L.marker([location.latitude, location.longitude])
  .addTo(myMap)
  .bindPopup('A pretty CSS popup.<br> Easily customizable.')
  .openPopup();


export const reset  = (myMap:any) => {
  myMap.off();
  myMap.remove();
}

