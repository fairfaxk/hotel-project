import { Booking } from "./Booking";

export class Room {
  id: string;
  roomNumber:string;
  hotelName: string;
  bookedDates: Array<Booking>;
  roomType: string;
  price: number;
}


