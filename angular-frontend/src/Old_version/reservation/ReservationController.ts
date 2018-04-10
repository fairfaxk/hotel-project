import { Component } from '@angular/core';
import { Reservation } from './Reservation';

@Component({
  selector: 'ReservationController',
})

export class ReservationController {
    
    findByHotelNameCostLessThan(hotelName: string, num:number): void {
    }
    
    findByHotelNameCostGreaterThan(hotelName: string, num:number): void {
    }
     
    findByReservationNumber(resNum: string): void {
    }
 
    findByHotelName(hotelName: string): void {
    }
    
    deleteByReservationNumber(reservationNumber: string): void {
    }
  
    addReservation(reservation: Reservation): void {
    }

    updateReservation(reservationNumber: string):void {
    }
}