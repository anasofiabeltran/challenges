import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from '../interfaces/location';


@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }
/*
  getInfo(){
    this.http.get('https://geo.ipify.org/api/v2/country,city?apiKey=at_SPZjvAljqcEknV5yrG7R2d1uVm1E6&ipAddress='+initialState.IP).subscribe(data=>{
      console.log(data);
    })
  }
*/
  changeCoordinates(IP: any):Observable<Location>{
    console.log('ip',IP)
    return this.http.get<Location>('https://geo.ipify.org/api/v2/country,city?apiKey=at_SPZjvAljqcEknV5yrG7R2d1uVm1E6&ipAddress='+IP)
  }

}
