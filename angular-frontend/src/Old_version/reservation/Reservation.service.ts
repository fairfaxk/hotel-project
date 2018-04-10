import { Injectable } from '@angular/core';
import { Reservation } from './Reservation';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ReservationService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: Http) { }

    findByHotelNameCostLessThan(hotelName: string, num:number): Promise<Reservation[]> {
        return this.http.get(this.baseUrl + '/api/reservations/findByHotelNameCostLessThan/',hotelName+num)
          .toPromise()
          .then(response => response.json() as Reservation[])
          .catch(this.handleError);
    }
    findByHotelNameCostGreaterThan(hotelName: string, num:number): Promise<Reservation[]> {
        return this.http.get(this.baseUrl + '/api/reservations/findByHotelNameCostGreaterThan/',hotelName+num)
          .toPromise()
          .then(response => response.json() as Reservation[])
          .catch(this.handleError);
    }
    findByReservationNumber(resNum: string): Promise<Reservation> {
        return this.http.get(this.baseUrl + '/api/reservations/findByReservationNumber/',resNum)
          .toPromise()
          .then(response => response.json() as Reservation)
          .catch(this.handleError);
    }
    findByHotelName(hotelName: string): Promise<Reservation[]> {
        return this.http.get(this.baseUrl + '/api/reservations/findByHotelName/',hotelName)
          .toPromise()
          .then(response => response.json() as Reservation[])
          .catch(this.handleError);
    }
    deleteByReservationNumber(reservationNumber: string): Promise<void> {
      return this.http.delete(this.baseUrl + '/api/reservations/deleteReservation/',reservationNumber)
        .toPromise()
        .then(response => response.json() as void)
        .catch(this.handleError);
    }
    addReservation(reservation: Reservation): Promise<Reservation> {
      return this.http.put(this.baseUrl + '/api/reservations/addReservation/',reservation)
        .toPromise()
        .then(response => response.json() as Reservation)
        .catch(this.handleError);
    }
    updateReservation(reservationNumber: string): Promise<Reservation> {
        return this.http.put(this.baseUrl + '/api/reservations/updateReservation/',reservationNumber)
          .toPromise()
          .then(response => response.json() as Reservation)
          .catch(this.handleError);
      }
    
  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}