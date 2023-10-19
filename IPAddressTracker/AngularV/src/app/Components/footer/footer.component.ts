import { Component, OnInit, AfterViewInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { Location } from 'src/app/interfaces/location';
import * as L from 'leaflet';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit, AfterViewInit {
  private map: any;
  private locationIP!: Location;

  constructor(public apiService: APIService) {}

  private initMap(): void {
    this.map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    L.marker([51.5, -0.09])
      .addTo(this.map)
      .bindPopup('A pretty CSS popup.<br> Easily customizable.')
      .openPopup();
  }

  ngOnInit(): void {
    this.apiService.getCoordinates().subscribe((data) => {
      this.locationIP = data;
      this.map.off();
      this.map.remove();
      this.map = L.map('map').setView([this.locationIP.location.lat, this.locationIP.location.lng], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    L.marker([this.locationIP.location.lat, this.locationIP.location.lng])
      .addTo(this.map)
      .bindPopup('A pretty CSS popup.<br> Easily customizable.')
      .openPopup();
    });
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
}
