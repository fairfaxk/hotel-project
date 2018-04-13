import { Component, OnInit } from '@angular/core';
import { Reservation } from '../reservation';
import { ReservationService } from '../reservation.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-adminreservations',
  templateUrl: './adminreservations.component.html',
  styleUrls: ['./adminreservations.component.css']
})
export class AdminreservationsComponent implements OnInit {
    reservations: Reservation[];
    private sub:any;
    hotelName: string;
    reservationNumber: string;
    dateFrom: Date;
    dateTo: Date;
    paid: boolean;
    roomNumber: string;
    cost: number;
    
    constructor(private reservationService: ReservationService, private route:ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
        this.hotelName = params['hotelName'];})
        
        this.findByHotelName(this.hotelName);
    }
    
    findByHotelNameCostLessThan(hotelName: string, num: number): void {
        this.reservationService.findByHotelNameCostLessThan(hotelName, num).then(reservations => this.reservations=reservations)
     }    
    
    findByHotelNameCostGreaterThan(hotelName: string, num: number): void {
        this.reservationService.findByHotelNameCostGreaterThan(hotelName, num).then(reservations => this.reservations=reservations)
     }
    
    findByHotelName(hotelName: string): void {
        this.reservationService.findByHotelName(hotelName).then(reservations => this.reservations=reservations)
     }
   
}
