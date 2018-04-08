import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';// <-- NgModel lives here

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import {TestService } from './navbar/test.service';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
