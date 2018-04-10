import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { Hotel } from './hotel/Hotel';
import { HotelService } from './hotel/Hotel.service';
import {HotelController} from'./hotel/HotelController';

@NgModule({
  declarations: [
    HotelController
  ],
  imports: [
    BrowserModule
  ],
  providers: [HotelService],
  bootstrap: []
})
export class HotelModule { }
