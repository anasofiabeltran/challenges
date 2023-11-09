import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from '../interfaces/location';


@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }


  changeCoordinates(IP: any):Observable<Location>{
    /*
    this.http.get('https://api.ipgeolocation.io/ipgeo?apiKey=1d96ed06e394464a9e16f3cfe37b19b0&ip='+IP).subscribe(data=>{
      console.log(data);
    })
    */
    return this.http.get<Location>('https://api.ipgeolocation.io/ipgeo?apiKey=1d96ed06e394464a9e16f3cfe37b19b0&ip='+IP)
  }

}
