import { Component, OnInit, AfterViewInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { Location } from 'src/app/interfaces/location';
import * as L from 'leaflet';
import { Store } from '@ngrx/store';
import { tilelayer,addMarker, reset } from 'src/app/services/map.service';
import { initialState } from 'src/app/store/post.state';

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
    tilelayer(initialState.MyMap);
    addMarker(initialState.MyMap,51.5, -0.09);
  }

  ngOnInit(): void {
    //reset(initialState.MyMap)
    this.apiService.getCoordinates().subscribe((data) => {
      this.locationIP = data;
      tilelayer(initialState.MyMap);
      addMarker(initialState.MyMap,this.locationIP.location.lat, this.locationIP.location.lng);
    })
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
}
