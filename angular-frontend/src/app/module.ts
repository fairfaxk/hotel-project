import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { Room } from './app/Room/Room';
import { Reservation } from './app/Reservation/Reservation';
import { Hotel } from './app/Hotel/Hotel';


@NgModule({
  declarations: [
    Room,
    Reservation,
    Hotel,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  bootstrap: [Room, Reservation, Hotel]
})
export class AppModule { }