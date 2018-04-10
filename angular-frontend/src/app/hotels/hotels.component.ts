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
  roomService: RoomService;
  roomType: string;
  dateFrom: Date;
  dateTo: Date;
  hotelName: string;
 
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


 
}