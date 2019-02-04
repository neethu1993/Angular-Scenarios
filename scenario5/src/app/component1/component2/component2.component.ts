import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
    @Output() value:string
  @Input() message : string
  constructor() { }
  ngOnInit() {
    this.message = this.value;
    console.log(this.message);
  }

}