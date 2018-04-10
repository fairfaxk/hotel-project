import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
 

 
import { AppRoutingModule }     from './app-routing.module';
 
import { AppComponent }         from './app.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroService }          from './hero.service';

import { RoomsComponent }      from './rooms/rooms.component';
import { RoomService }          from './room.service';

import { ReservationDetailComponent }  from './reservation-detail/reservation-detail.component';

import { ReservationService }          from './reservation.service';

import { HotelsComponent }      from './hotels/hotels.component';
import { HotelService }          from './hotel.service';
 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
 
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    RoomsComponent,
    HotelsComponent,
    ReservationDetailComponent,

  ],
  providers: [ HeroService, RoomService,HotelService,ReservationService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }