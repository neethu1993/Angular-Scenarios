import { Component, OnInit, Input } from '@angular/core';
import { Component1Service } from '../component1/component1.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  @Input() message : string
  constructor(private component1Service:Component1Service) { }

  ngOnInit() {
  }
  test(message){
    console.log(message);
  }

}
