import { SharedServiceService } from 'src/app/sharedService/shared-service.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

   message : string
  constructor(private sharedService:SharedServiceService) { }

  ngOnInit() {
    this.sharedService.currentMessage.subscribe(message => this.message = message);
  }

}
