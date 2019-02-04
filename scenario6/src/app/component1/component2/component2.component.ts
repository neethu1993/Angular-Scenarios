import { Component1Service } from './../component1/component1.service';
import { Component3Component } from './../component3/component3.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  @Input() message : any 
  constructor(private component1Service:Component1Service) { 
    this.message = this.component1Service.getData();
    console.log(this.message);
  }
  ngOnInit() {
    // this.message = this.component1Service.getData();
    // console.log(this.message);
  }
}
