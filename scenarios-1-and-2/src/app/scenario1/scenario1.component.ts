// Prints the text in console

import { Component } from '@angular/core';

@Component({
    selector: 'scenario1',
    template: `
    <h2>Scenario 1</h2>
  <input #newScenario
  (keyup.enter)="addScenario(newScenario.value)"
  (blur)="addScenario(newScenario.value); newScenario.value='' ">
      <button (click)="addScenario(newScenario.value)">Submit</button>
  `
})
export class Scenario1Component {
    addScenario(newScenario: string) {
        console.log(newScenario);
    }
}