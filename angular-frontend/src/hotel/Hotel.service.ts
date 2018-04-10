import { Injectable } from '@angular/core';
import { Hotel } from './Hotel';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HotelService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: Http) { }
  
  findAll(): Promise<Hotel[]> {
      return this.http.get(this.baseUrl + '/api/reservations/findAll/')
        .toPromise()
        .then(response => response.json() as Hotel[])
        .catch(this.handleError);
  }
  
  findByHotelName(hotelName: string): Promise<Hotel> {
      return this.http.get(this.baseUrl + '/api/reservations/findByHotelName/',hotelName)
        .toPromise()
        .then(response => response.json() as Hotel)
        .catch(this.handleError);
  }
  
  
  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}