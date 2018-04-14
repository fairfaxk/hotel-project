import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Reservation } from './reservation';
import { Headers, Http } from '@angular/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ReservationService {

    private baseUrl = 'http://localhost:8080';

    constructor(private http: Http) { }

      findByHotelNameCostLessThan(hotelName: string, num:number): Promise<Reservation[]> {
          return this.http.get(this.baseUrl + '/api/reservations/findByHotelNameCostLessThan/' + hotelName+num)
            .toPromise()
            .then(response => response.json() as Reservation[])

      }
      findByHotelNameCostGreaterThan(hotelName: string, num:number): Promise<Reservation[]> {
          return this.http.get(this.baseUrl + '/api/reservations/findByHotelNameCostGreaterThan/' + hotelName+num)
            .toPromise()
            .then(response => response.json() as Reservation[])

      }
      findByReservationNumber(resNum: string): Promise<Reservation> {
          return this.http.get(this.baseUrl + '/api/reservations/findByReservationNumber/' + resNum)
            .toPromise()
            .then(response => response.json() as Reservation)

      }
      
      findByHotelName(hotelName: string): Promise<Reservation[]> {
          return this.http.get(this.baseUrl + '/api/reservations/findByHotelName/' + hotelName)
            .toPromise()
            .then(response => response.json() as Reservation[])

      }
      deleteByReservationNumber(reservationNumber: string): Promise<void> {
        return this.http.delete(this.baseUrl + '/api/reservations/deleteReservation/' + reservationNumber)
          .toPromise()
          .then(response => response.json() as void)

      }
      addReservation(reservation: Reservation): Promise<Reservation> {
        return this.http.post(this.baseUrl + '/api/reservations/addReservation/',reservation)
          .toPromise()
          .then(response => response.json() as Reservation)

      }
      updateReservation(reservationNumber: string): Promise<Reservation> {
          return this.http.put(this.baseUrl + '/api/reservations/updateReservation/',reservationNumber)
            .toPromise()
            .then(response => response.json() as Reservation)

        }
}
