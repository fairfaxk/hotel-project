import { Injectable } from '@angular/core';
import { Room } from './Room';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RoomService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: Http) { }
  
  findOpenRoomsByType(roomType: string, dateFrom: Date, dateTo: Date, hotelName: string): Promise<Room[]> {
      return this.http.get(this.baseUrl + '/api/rooms/findOpenRoomsByType/',roomType+dateFrom+dateTo+hotelName)
        .toPromise()
        .then(response => response.json() as Room[])
        .catch(this.handleError);
  }
  findByHotelNameAndRoomNumber(hotelName: string, roomNumber: string): Promise<Room[]> {
      return this.http.get(this.baseUrl + '/api/rooms/findByHotelNameAndRoomNumber/',hotelName+roomNumber)
        .toPromise()
        .then(response => response.json() as Room[])
        .catch(this.handleError);
  }
  findByHotelName(hotelName: string): Promise<Room[]> {
      return this.http.get(this.baseUrl + '/api/rooms/findByHotelName/',hotelName)
        .toPromise()
        .then(response => response.json() as Room[])
        .catch(this.handleError);
  }
  findByHotelNameAndPriceLessThan(hotelName: string, num:number): Promise<Room[]> {
      return this.http.get(this.baseUrl + '/api/rooms/findByHotelNameAndPriceLessThan/',hotelName+num)
        .toPromise()
        .then(response => response.json() as Room[])
        .catch(this.handleError);
  }
  findByHotelNameAndPriceGreaterThan(hotelName: string, num:number): Promise<Room[]> {
      return this.http.get(this.baseUrl + '/api/rooms/findByHotelNameAndPriceGreaterThan/',hotelName+num)
        .toPromise()
        .then(response => response.json() as Room[])
        .catch(this.handleError);
  }
  findByHotelNameAndType(hotelName: string, type: string): Promise<Room[]> {
      return this.http.get(this.baseUrl + '/api/rooms/findByHotelNameAndType/',hotelName+type)
        .toPromise()
        .then(response => response.json() as Room[])
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}