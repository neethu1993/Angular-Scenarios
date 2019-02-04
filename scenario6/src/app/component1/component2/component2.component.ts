import { Component3Component } from './../component3/component3.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  @Input() message : string 
  constructor() { this.message=this.message;
  }
  ngOnInit() {
    console.log(this.message);
  }
}
