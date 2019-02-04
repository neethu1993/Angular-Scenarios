// Prints the text in the page

import { Component } from '@angular/core';

@Component({
    selector: 'scenario2',
    template: `
    <h2>Scenario 2</h2>
    <input #box (keyup)="0">
    <p>{{box.value}}</p>
  `
})
export class Scenario2Component {
}