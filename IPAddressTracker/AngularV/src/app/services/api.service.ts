import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  getInfo(){
    this.http.get('https://geo.ipify.org/api/v2/country?apiKey=at_SPZjvAljqcEknV5yrG7R2d1uVm1E6&ipAddress=186.0.1.100').subscribe(data=>{
      console.log(data);
    })
  }
}
