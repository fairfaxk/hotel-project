import { Component, OnInit } from '@angular/core';
 
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';
import { Room } from '../room';
import { RoomService } from '../room.service';
 
@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  hotels: Hotel[];
  roomService: RoomService
 
  constructor(private hotelService: HotelService) { }
 
  ngOnInit() {
    this.findAll();
  }
 
  findAll(): void {
    this.hotelService.findAll();
  }
  
  findByHotelName(hotelName: string): void {
      
      this.hotelService.findByHotelName(hotelName)
  }
  
  //need to get info from user input to load rooms page  ---> then send info to ngonintion rooms.component
  
  findOpenRoomByType(roomType: string, dateFrom: Date, dateTo: Date, hotelName: string)): void {
      this.roomService.findOpenRoomByType(roomType, dateFrom, dateTo, hotelName)
    }
 
}