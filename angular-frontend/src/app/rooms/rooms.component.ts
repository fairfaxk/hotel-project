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
    this.getRooms();
  }
 
  getHeroes(): void {
    this.roomService.getHeroes()
    .subscribe(rooms => this.rooms = rooms);
  }
 
 
}