import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule }     from './app-routing.module';
import { AppComponent }         from './app.component';

import {HttpModule} from '@angular/http';
import { RoomsComponent }      from './rooms/rooms.component';
import { RoomService }          from './room.service';

import { ReservationDetailComponent }  from './reservation-detail/reservation-detail.component';

import { ReservationService }          from './reservation.service';

import { HotelsComponent }      from './hotels/hotels.component';
import { HotelService }          from './hotel.service';
import { AdminreservationsComponent } from './adminreservations/adminreservations.component';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';
 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    RoomsComponent,
    HotelsComponent,
    ReservationDetailComponent,
    AdminreservationsComponent,
    BookingDetailComponent,

  ],
  providers: [ RoomService,HotelService,ReservationService,HttpClientModule],
  bootstrap: [ AppComponent ]
})
export class AppModule { }