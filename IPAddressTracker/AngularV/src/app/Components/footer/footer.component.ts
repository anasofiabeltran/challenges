import { Component, OnInit,OnChanges, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { Location } from 'src/app/interfaces/location';
import * as L from 'leaflet';
import { Store, select } from '@ngrx/store';
import { tilelayer,addMarker, reset } from 'src/app/services/map.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent  {

  private map: any;
  private locationIP!: Location;


  constructor(public apiService: APIService, private state: Store<{state: {IP: string}}>) {

  }

  ngOnInit(): void {
    this.state.select('state').subscribe((data)=>{
      console.log('IP',data)
        this.map= L.map('map').setView([51.505, -0.09], 13);
        this.apiService.changeCoordinates(data).subscribe((data) => {
          this.locationIP = data;
          tilelayer(this.map);
          addMarker(this.map,this.locationIP.location.lat, this.locationIP.location.lng);
        })
    })
  }

}
