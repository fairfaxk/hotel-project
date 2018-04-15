import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Reservation }         from '../reservation';
import { ReservationService }  from '../reservation.service';

@Component({
  selector: 'app-reservation-detail',
  templateUrl: './reservation-detail.component.html',
  styleUrls: [ './reservation-detail.component.css' ]
})

export class ReservationDetailComponent implements OnInit {
  dateFrom: Date;
  dateTo: Date;
  hotelName: string;
  paid: boolean;
  roomNumber:string;
  cost:number
  reservationNumber: string;
  reservation: Reservation;
  private sub:any;
  disabled:boolean;

 // days:number;

  constructor(
    private route: ActivatedRoute,
    private reservationService: ReservationService,
    private location: Location
  ) {}

  ngOnInit(): void {
      this.reservation = new Reservation()
      this.sub = this.route.params.subscribe(params => {
          this.dateFrom = params['dateFrom'];
          this.dateTo = params['dateTo'];
          this.hotelName = params['hotelName'];
          this.roomNumber = params['roomNumber'];
          this.cost = +params['price'];})
      this.paid=false;
      this.reservationNumber = String(Math.floor(Math.random() * (99999999 - 0 + 1)) + 0);
      this.reservation.reservationNumber = String(this.reservationNumber);
      this.reservation.dateFrom = this.dateFrom;
      this.reservation.dateTo = this.dateTo;
      this.reservation.paid = this.paid;
      this.reservation.hotelName = this.hotelName;
      this.reservation.roomNumber = this.roomNumber;
      this.reservation.cost = this.cost;
      this.disabled = false;

      //.getTime should be able to convert to milliseconds from 1970, which then can be converted to days, but
      //angular doesn't think getTime() is a function
      //this.days = (this.dateTo.getTime() - this.dateFrom.getTime())/(24*60*60*1000)
  }

  addReservation(reservation: Reservation): void {
      this.reservationService.addReservation(reservation).then(reservation=> this.reservation=reservation);
      this.disabled = true;
      alert("Your Reservation number is: " + this.reservationNumber + ".\n" + "Please save this number for your records." + "\n" + "Click exit to continue.")
  }


}
