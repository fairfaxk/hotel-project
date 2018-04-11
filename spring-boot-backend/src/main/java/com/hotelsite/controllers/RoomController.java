package com.hotelsite.controllers;

import java.text.ParseException;
import java.text.SimpleDateFormat;
/*import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;*/
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//import com.hotelsite.models.Booking;
import com.hotelsite.models.Room;
import com.hotelsite.repositories.RoomRepository;

@RestController
@RequestMapping("/api/rooms")
@CrossOrigin("*")
public class RoomController {
	@Autowired
	RoomRepository roomRepo;
	
	/**
	 * gets all rooms in db
	 * 
	 * @return
	 */
	@GetMapping("/findAll")
	public List<Room> findAll()
	{
		return roomRepo.findAll();
	}
	
	/**
	 * gets rooms of the input type in the input hotel that are availible during the input dates
	 * 
	 * @param hotelName
	 * @param roomType
	 * @param dateFrom
	 * @param dateTo
	 * @return
	 * @throws ParseException 
	 */
	@GetMapping("/findOpenRoomByType/{hotelName}/{roomType}/{dateFrom}/{dateTo}")
	public List<Room> findOpenRooms(@PathVariable("hotelName") String hotelName, @PathVariable("roomType") String roomType, @PathVariable("dateFrom") String dateFrom, @PathVariable("dateTo") String dateTo) throws ParseException
	{
	    SimpleDateFormat inputFormat= new SimpleDateFormat("yyyy-MM-dd");
		Date dateFrom2 = inputFormat.parse(dateFrom);
		Date dateTo2 = inputFormat.parse(dateTo);
		return roomRepo.findOpenRoomsByType(roomType, dateFrom2, dateTo2, hotelName);
	}
	
	/**
	 * finds the room in the input hotel with the input room number
	 * 
	 * @param hotelName
	 * @param roomNumber
	 * @return
	 */
	@GetMapping("/findRoomByHotelNameAndRoomNumber/{hotelName}/{roomNumber}")
	public Room findRoomByHotelNameAndRoomNumber(@PathVariable("hotelName") String hotelName, @PathVariable("roomNumber") String roomNumber)
	{
		return roomRepo.findByHotelNameAndRoomNumber(hotelName, roomNumber);
	}
	
	/**
	 * finds all rooms in the input hotel
	 * 
	 * @param hotelName
	 * @return
	 */
	@GetMapping("/findByHotelName/{hotelName}")
	public List<Room> findByHotelName(@PathVariable("hotelName") String hotelName)
	{
		return roomRepo.findByHotelName(hotelName);
	}
	
	/**
	 * finds all rooms in input hotel whose nightly cost is less than or equal to the input rate
	 * 
	 * @param hotelName
	 * @param num
	 * @return
	 */
	@GetMapping("/findByRateLessThan/{hotelName}/{rate}")
	public List<Room> findByHotelNameAndPriceLessThan(@PathVariable("hotelName") String hotelName, @PathVariable("rate") double num)
	{
		return roomRepo.findByHotelNameAndPriceLessThan(hotelName, num);
	}
	
	/**
	 * finds all rooms in input hotel whose nightly cost is greater than or equal to the input rate
	 * 
	 * @param hotelName
	 * @param num
	 * @return
	 */
	@GetMapping("/findByRateGreaterThan/{hotelName}/{rate}")
	public List<Room> findByHotelNameAndPriceGreaterThan(@PathVariable("hotelName") String hotelName, @PathVariable("rate") double num)
	{
		return roomRepo.findByHotelNameAndPriceGreaterThan(hotelName, num);
	}
		
	/*private void saveRoom(String roomNumber, String hotelName, String roomType, List<Booking> bookedDates, double price)
	{
		Room room = new Room();
		room.setBookedDates(bookedDates);
		room.setHotelName(hotelName);
		room.setPrice(price);
		room.setRoomNumber(roomNumber);
		room.setRoomType(roomType);
		roomRepo.save(room);
	}
	
	@GetMapping("/saveroom")
	public void saveTheRoom() throws ParseException
	{
		List<Booking> bookings = new ArrayList<>();
		Booking book = new Booking();
		book.setReservationNumber("12345678");
		book.setDateFrom(new SimpleDateFormat("yyyy-MM-dd").parse("2018-01-01"));
		book.setDateTo(new SimpleDateFormat("yyyy-MM-dd").parse("2018-01-05"));
		bookings.add(book);
		book = new Booking();
		book.setReservationNumber("87654321");
		book.setDateFrom(new SimpleDateFormat("yyyy-MM-dd").parse("2018-01-10"));
		book.setDateTo(new SimpleDateFormat("yyyy-MM-dd").parse("2018-01-12"));
		bookings.add(book);
		saveRoom("123", "Ritz Carlton", "single", bookings, 200);
	}*/
}
