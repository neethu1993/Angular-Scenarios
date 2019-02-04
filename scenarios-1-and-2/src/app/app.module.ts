import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Scenario2Component } from './scenario2/scenario2.component';
import { Scenario1Component } from './scenario1/scenario1.component';

@NgModule({
  declarations: [
    AppComponent,
    Scenario1Component,
    Scenario2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
