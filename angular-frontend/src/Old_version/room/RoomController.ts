import { Component } from '@angular/core';
import { Room } from './Room';

@Component({
  selector: 'RoomController',
  templateUrl: './guest_rooms.html'
})

export class RoomController{
   
  findOpenRoomsByType(roomType: string, dateFrom: Date, dateTo: Date, hotelName: string): void {      
  }
 
  findByHotelNameAndRoomNumber(hotelName: string, roomNumber: string): void {      
  }
  
  findByHotelName(hotelName: string): void {   
  }
  
  findByHotelNameAndPriceLessThan(hotelName:string, num:number):void {
  }
  
  findByHotelNameAndPriceGreaterThan(hotelName:string, num:number): void {
  }
  
  findByHotelNameAndType(hotelName:string, type:string):void {  
  }
  
}