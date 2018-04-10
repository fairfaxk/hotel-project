import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { RoomsComponent }      from './rooms/rooms.component';
import { ReservationDetailComponent }  from './reservation-detail/reservation-detail.component';
import { HotelsComponent }      from './hotels/hotels.component';
 
const routes: Routes = [
  { path: 'hotels', component: HotelsComponent },
  { path: 'rooms/: roomType,dateFrom,dateTo,hotelName', component: RoomsComponent },
  { path: 'reservations/:reservationNumber', component: ReservationDetailComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}