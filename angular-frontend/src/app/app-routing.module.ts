import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoomsComponent }      from './rooms/rooms.component';
import { ReservationDetailComponent }  from './reservation-detail/reservation-detail.component';
import { HotelsComponent }      from './hotels/hotels.component';
import { BookingDetailComponent }   from './booking-detail/booking-detail.component'
import { AdminreservationsComponent }      from './adminreservations/adminreservations.component';

const routes: Routes = [
  { path: 'hotels', component: HotelsComponent },
  { path: 'rooms/:roomType/:dateFrom/:dateTo/:hotelName', component: RoomsComponent },
  { path: 'reservation-detail/:dateFrom/:dateTo/:hotelName/:roomNumber/:price', component: ReservationDetailComponent },
  { path: 'adminreservations/:hotelName', component: AdminreservationsComponent },
  { path: 'booking-detail/:reservationNumber', component: BookingDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
