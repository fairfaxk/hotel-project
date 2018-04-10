import { Component, OnInit } from '@angular/core';
 
import { Room } from '../room';
import { RoomService } from '../room.service';
import { ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  rooms: Room[];
  private sub:any;
    roomType: string;
    dateFrom: Date;
    dateTo: Date;
    hotelName: string;
 
  constructor(private roomService: RoomService, private route:ActivatedRoute) { }
 
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
          this.roomType = params['roomType'];
          this.dateFrom = params['dateFrom'];
          this.dateTo = params['dateTo'];
          this.hotelName = params['hotelName'];})
      this.findOpenRoomsByType(this.roomType, this.dateFrom, this.dateTo, this.hotelName);
  }
  
  findOpenRoomsByType(roomType: string, dateFrom: Date, dateTo: Date, hotelName: string): void {
     this.roomService.findOpenRoomsByType(roomType, dateFrom, dateTo, hotelName).then(rooms => this.rooms=rooms)

  }
  findByHotelNameAndRoomNumber(hotelName: string, roomNumber: string): void {
      this.roomService.findByHotelNameAndRoomNumber(hotelName, roomNumber).then(rooms => this.rooms=rooms)

  }
  findByHotelName(hotelName: string): void {
      this.roomService.findByHotelName(hotelName).then(rooms => this.rooms=rooms)
      
  }
  findByHotelNameAndPriceLessThan(hotelName: string, num:number): void {
      this.roomService.findByHotelNameAndPriceLessThan(hotelName, num).then(rooms => this.rooms=rooms)

  }
  findByHotelNameAndPriceGreaterThan(hotelName: string, num:number): void {
      this.roomService.findByHotelNameAndPriceGreaterThan(hotelName, num).then(rooms => this.rooms=rooms)

     
  }
  findByHotelNameAndType(hotelName: string, type: string): void {
      this.roomService.findByHotelNameAndType(hotelName, type).then(rooms => this.rooms=rooms)
  }

}