import { Component3Component } from './../component3/component3.component';
import { Component, OnInit, Input } from '@angular/core';
import { SharedServiceService } from 'src/app/sharedService/shared-service.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
   message : string 
  constructor(private sharedService:SharedServiceService) { 
  }
  ngOnInit() {
    this.sharedService.currentMessage.subscribe(message => this.message = message);
  }
}
