# API DOCUMENTATION 
All calls will be to http://localhost:8080/api/<collection name>/…
  
All requests will be GET unless otherwise specified

## Hotels:
**Get all hotels**
```
http://localhost:8080/api/hotels/findAll
```
**Get hotel by name match**
```
http://localhost:8080/api/hotels/findByName/{name}
ex(http://localhost:8080/api/hotels/findByName/Hilton)
Note: Replace spaces with “%20”
```

## Reservations
**Get all reservations**
```
http://localhost:8080/api/reservations/findAll
```
**Get reservations with cost less than x**
```
http://localhost:8080/api/reservations/findByCostLessThan/{hotel}/{less}
ex(http://localhost:8080/api/reservations/findByCostLessThan/Hilton/1000)
```
**Get reservations with cost greater than x**
```
http://localhost:8080/api/reservations/findByCostGreaterThan/{hotel}/{greater}
ex(http://localhost:8080/api/reservations/findByCostGreaterThan/Hilton/1000)
```
**Get reservation by reservation number**
```
http://localhost:8080/api/reservations/findByReservationNumber/{resNumber}
ex(http://localhost:8080/api/reservations/findByReservationNumber/12345678)
```
**Get all reservations for a given hotel**
```
http://localhost:8080/api/reservations/findByHotelName/{hotelName}
ex(http://localhost:8080/api/reservations/findByHotelName/Hilton
```
**Add a new reservation to database. Also adds a new reservation to the booking in the rooms collection**  **Note: This must be a POST request**
```
http://localhost:8080/api/reservations/addReservation
```
**Note**: Body of the request must be an object of type Reservation, consistent with the object model in mongo

**Update an existing reservation. Also updates the booking in the room collection Note: This must be a PUT request**
```
http://localhost:8080/api/reservations/updateReservation/{reservationNumber}
ex(http://localhost:8080/api/reservations/updateReservation/12345678)
```
**Note:** Body of the request must be an object of type Reservation, consistent with the object model in mongo

**Note:** If user is not changing cost, must set the cost of the reservation in the body to be a negative number (ex {“cost”:-1})

**Delete a reservation NoteL This must be a DELETE request**
```
http://localhost:8080/api/reservations/deleteReservation/{reservationNumber}
ex(http://localhost:8080/api/reservations/deleteReservation/12345678)
```
## Rooms

**Get All Rooms**
```
http://localhost:8080/api/rooms/findAll
```

**Get all open rooms of a given type in a given hotel between the given dates**
```
http://localhost:8080/api/rooms/findOpenRoomByType/{hotelName}{roomType}/{dateFrom}/{dateTo}
```

**Get a specific room by room number and hotel name**
```
http://localhost:8080/api/rooms/findRoomByHotelNameAndRoomNumber/{hotelName}/{roomNumber}
```

**Get all rooms in the input hotel**
```
http://localhost:8080/api/rooms/findByHotelName/{hotelName}
```

**Find rooms in a given hotel whose nightly cost is less than or equal to the input cost**
```
http://localhost:8080/api/rooms/findByRateLessThan/{hotelName}/{rate}
```

**Find rooms in a given hotel whose nightly cost is greater than or equal to the input cost**
```
http://localhost:8080/api/rooms/findByRateGreaterThan/{hotelName}/{rate}
```
