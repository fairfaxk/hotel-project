import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Headers, Http } from '@angular/http';
 
import { Hotel } from './hotel';

 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class HotelService {

    private baseUrl = 'http://localhost:8080';

    constructor(private http: Http) { }
    
    findAll(): Promise<Hotel[]> {
        return this.http.get(this.baseUrl + '/api/reservations/findAll/')
          .toPromise()
          .then(response => response.json() as Hotel[])
    }
    
    findByHotelName(hotelName: string): Promise<Hotel> {
        return this.http.get(this.baseUrl + '/api/reservations/findByHotelName/',hotelName)
          .toPromise()
          .then(response => response.json() as Hotel)
    }
    

}