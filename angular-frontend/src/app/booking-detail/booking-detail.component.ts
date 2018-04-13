import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Reservation }         from '../reservation';
import { ReservationService }  from '../reservation.service';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css']
})

export class BookingDetailComponent implements OnInit {
  dateFrom: Date;
  dateTo: Date;
  hotelName: string;
  paid: boolean;
  roomNumber:string;
  cost:number
  reservationNumber: string;
  reservation: Reservation;
  private sub:any;
 
  constructor(
    private route: ActivatedRoute,
    private reservationService: ReservationService,
    private location: Location
  ) {}
  
  ngOnInit(): void {
      this.reservation = new Reservation();
      this.sub = this.route.params.subscribe(params => {
          this.reservationNumber = params['reservationNumber'];
          })
     this.findByReservationNumber(this.reservationNumber)
     this.hotelName=this.reservation.hotelName;
     this.dateFrom=this.reservation.dateFrom;
     this.dateTo=this.reservation.dateTo;
     this.paid=this.reservation.paid;
     this.roomNumber=this.reservation.roomNumber;
     this.cost=this.reservation.cost;
     this.reservationNumber = this.reservation.reservationNumber;
  }
 
  findByReservationNumber(resNum: string): void {
      this.reservationService.findByReservationNumber(resNum).then(reservation => this.reservation=reservation)
  }
  //delete reservation method
  deleteByReservationNumber(reservationNumber: string): void {
      this.reservationService.deleteByReservationNumber(reservationNumber)
  }
 

}
