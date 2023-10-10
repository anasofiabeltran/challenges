import { Injectable,AfterViewInit  } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {

  }

  getInfo(){
    this.http.get('https://pokeapi.co/api/v2/pokemon/ditto').subscribe(data => {
    console.log(data);
  });
  }
}

