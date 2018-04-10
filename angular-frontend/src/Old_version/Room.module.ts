import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Room } from './room/Room';
import { RoomService } from './room/Room.service';
import {RoomController} from'./room/RoomController';

@NgModule({
  declarations: [
    RoomController
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class RoomModule { }