import { Component, OnInit  } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  constructor(public apiService: ApiService){

  }
  ngOnInit(): void {
    this.apiService.getInfo();
  }
}
