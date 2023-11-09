import { Component, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnChanges {
constructor(public apiService: APIService, private state: Store<{state: {IP: string}}>){}

ngOnChanges(): void{
  this.state.select('state').subscribe((data)=>{
      this.apiService.changeCoordinates(data.IP).subscribe((data) => {
        console.log(data);
      })

  })
}
}
