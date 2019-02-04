import { SharedServiceService } from './../sharedService/shared-service.service';

import { Component, OnInit, Injectable } from '@angular/core';
@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
@Injectable()
export class Component1Component implements OnInit  {

  Message : string
  constructor(private sharedService:SharedServiceService) {
   }

  ngOnInit() {
    this.sharedService.currentMessage.subscribe(message => this.Message = message);
  }
  onSubmit(value){
    this.sharedService.setMessage(value);
    console.log(value);
    }

}