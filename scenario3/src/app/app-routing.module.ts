import { Component2Component } from './component1/component2/component2.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component1Component } from './component1/component1.component';

const routes: Routes = [
  {path:'component1',component: Component1Component},
  {path : 'component2',component: Component2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
