
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit  {

  @Output() Message : string
  constructor() {

   }

  ngOnInit() {
  }
  onSubmit(value){
    console.log(value);
    this.Message = value;
    }
}
