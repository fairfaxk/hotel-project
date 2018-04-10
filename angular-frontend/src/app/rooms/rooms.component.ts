import { Component, OnInit } from '@angular/core';
 
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Room } from '../room';
import { RoomService } from '../room.service';
 
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  rooms: Room[];
 
  constructor(private roomService: RoomService) { }
 
  ngOnInit() {
      //need to get inputs in here
    this.findOpenRoomsByType();
  }
 
  findOpenRoomsByType(roomType: string, dateFrom: Date, dateTo: Date, hotelName: string): void {
      this.roomService.findOpenRoomsByType(roomType, dateFrom, dateTo, hotelName)

  }
  findByHotelNameAndRoomNumber(hotelName: string, roomNumber: string): void {
      this.roomService.findByHotelNameAndRoomNumber(hotelName, roomNumber)

  }
  findByHotelName(hotelName: string): void {
      this.roomService.findByHotelName(hotelName)
      
  }
  findByHotelNameAndPriceLessThan(hotelName: string, num:number): void {
      this.roomService.findByHotelNameAndPriceLessThan(hotelName, num)

  }
  findByHotelNameAndPriceGreaterThan(hotelName: string, num:number): void {
      this.roomService.findByHotelNameAndPriceGreaterThan(hotelName, num)

     
  }
  findByHotelNameAndType(hotelName: string, type: string): void {
      this.roomService.findByHotelNameAndType(hotelName, type)
  }

}