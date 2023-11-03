import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {FormGroup, FormControl} from '@angular/forms'
import { changeIp } from 'src/app/store/app.actions';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class BannerComponent {


  profileForm = new FormGroup({
    IpObtain: new FormControl(),
  })

  constructor(private state: Store<{state: object}>){}

  public getIP(): void{
    this.state.dispatch(changeIp({ value:this.profileForm.value.IpObtain }))

  }

}
