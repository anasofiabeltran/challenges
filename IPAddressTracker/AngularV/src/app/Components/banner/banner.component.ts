import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {FormGroup, FormControl} from '@angular/forms'
import { getIp } from 'src/app/store/post.actions';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],

})


export class BannerComponent {

  profileForm = new FormGroup({
    IpObtain: new FormControl(),
  })

  constructor(private store: Store<{IP: {IP: number}}>){}

  public getIP(): void{
    console.log(this.profileForm.value);
    this.store.dispatch(getIp({ value:this.profileForm.value.IpObtain }))
  }
}
