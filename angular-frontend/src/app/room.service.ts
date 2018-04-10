import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
 
import { Room } from './room';
import { Headers, Http } from '@angular/http';
 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class RoomService {
 
    private baseUrl = 'http://localhost:8080';

    constructor(private http: Http) { }
    
    findOpenRoomsByType(roomType: string, dateFrom: Date, dateTo: Date, hotelName: string): Promise<Room[]> {
        return this.http.get(this.baseUrl + '/api/rooms/findOpenRoomsByType/',roomType+dateFrom+dateTo+hotelName)
          .toPromise()
          .then(response => response.json() as Room[])

    }
    findByHotelNameAndRoomNumber(hotelName: string, roomNumber: string): Promise<Room[]> {
        return this.http.get(this.baseUrl + '/api/rooms/findByHotelNameAndRoomNumber/',hotelName+roomNumber)
          .toPromise()
          .then(response => response.json() as Room[])
 
    }
    findByHotelName(hotelName: string): Promise<Room[]> {
        return this.http.get(this.baseUrl + '/api/rooms/findByHotelName/',hotelName)
          .toPromise()
          .then(response => response.json() as Room[])

    }
    findByHotelNameAndPriceLessThan(hotelName: string, num:number): Promise<Room[]> {
        return this.http.get(this.baseUrl + '/api/rooms/findByHotelNameAndPriceLessThan/',hotelName+num)
          .toPromise()
          .then(response => response.json() as Room[])

    }
    findByHotelNameAndPriceGreaterThan(hotelName: string, num:number): Promise<Room[]> {
        return this.http.get(this.baseUrl + '/api/rooms/findByHotelNameAndPriceGreaterThan/',hotelName+num)
          .toPromise()
          .then(response => response.json() as Room[])
       
    }
    findByHotelNameAndType(hotelName: string, type: string): Promise<Room[]> {
        return this.http.get(this.baseUrl + '/api/rooms/findByHotelNameAndType/',hotelName+type)
          .toPromise()
          .then(response => response.json() as Room[])

    }

}