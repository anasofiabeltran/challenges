import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  profileForm  = new FormGroup({
    IpObtain: new FormControl(''),
  })

  constructor(){

  }

  public getIP(): void{
    console.log('Ip: formulario:',this.profileForm.value);

  }

}
