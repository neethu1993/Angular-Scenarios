
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit  {

  Message : string
  constructor() {
   }

  ngOnInit() {
  }
  onSubmit(value){
    console.log(value);
    this.Message = value;
    }

}