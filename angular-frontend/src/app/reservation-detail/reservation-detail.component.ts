import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
 
import { Hero }         from '../hero';
import { HeroService }  from '../hero.service';
import { Reservation }         from '../reservation';
import { ReservationService }  from '../reservation.service';
 
@Component({
  selector: 'app-reservation-detail',
  templateUrl: './reservation-detail.component.html',
  styleUrls: [ './reservation-detail.component.css' ]
})
export class ReservationDetailComponent implements OnInit {
  @Input() reservation: Reservation;
 
  constructor(
    private route: ActivatedRoute,
    private reservationService: ReservationService,
    private location: Location
  ) {}
 
  
  ngOnInit(): void {
    this.findByReservationNumber();
  }
 
  findByReservationNumber(): void {
      const id = +this.route.snapshot.paramMap.get('resNum');
      this.reservationService.findByReservationNumber(resNum)
        .subscribe(reservation => this.reservation = reservation);

  }

}