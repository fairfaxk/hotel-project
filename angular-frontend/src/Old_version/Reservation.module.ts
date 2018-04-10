import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { Reservation } from './reservation/Reservation';
import { ReservationService } from './reservation/Reservation.service';
import {ReservationController} from'./reservation/ReservationController';

@NgModule({
  declarations: [
    ReservationController
  ],
  imports: [
    BrowserModule
  ],
  providers: [ReservationService],
  bootstrap: []
})
export class ReservationModule { }
