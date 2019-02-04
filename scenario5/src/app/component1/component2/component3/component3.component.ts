
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit  {

  @Output() Message : string
  constructor() {

   }

  ngOnInit() {
  }
  onSubmit(value){
    //console.log(value);
    this.Message = value;
    }
}
