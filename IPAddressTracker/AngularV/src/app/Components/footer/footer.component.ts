import { Component, OnInit, AfterViewInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit, AfterViewInit {
  private map: any;

  constructor(public apiService: APIService) {}

  private initMap(): void {
    this.map = L.map('map').setView([51.505, -0.09], 13);

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
  }

  ngOnInit(): void {
    this.apiService.getInfo();
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
}
