import { Component1Service } from './component1/component1.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit  {

  Message : string
  constructor(private component1Service:Component1Service) {
   }

  ngOnInit() {
  }
  onSubmit(value){
    this.component1Service.setData(value);
    console.log(this.component1Service.getData());
    this.Message = value;
    }

}