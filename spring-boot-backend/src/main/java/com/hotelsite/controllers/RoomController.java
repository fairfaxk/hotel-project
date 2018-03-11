package com.hotelsite.controllers;

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
	
	@GetMapping("/findAll")
	public List<Room> findAll()
	{
		return roomRepo.findAll();
	}
	
	@GetMapping("/findOpenRoomByType/{hotelName}{roomType}/{dateFrom}/{dateTo}")
	public Room findOpenRoom(@PathVariable("hotelName") String hotelName, @PathVariable("roomType") String roomType, @PathVariable("dateFrom") Date dateFrom, @PathVariable("dateTo") Date dateTo)
	{
		return roomRepo.findOpenRoomByType(roomType, dateFrom, dateTo, hotelName);
	}
	
	@GetMapping("/findRoomByHotelNameAndRoomNumber/{hotelName}/{roomNumber}")
	public Room findRoomByHotelNameAndRoomNumber(@PathVariable("hotelName") String hotelName, @PathVariable("roomNumber") String roomNumber)
	{
		return roomRepo.findByHotelNameAndRoomNumber(hotelName, roomNumber);
	}
	
	@GetMapping("/findByHotelName/{hotelName}")
	public List<Room> findByHotelName(@PathVariable("hotelName") String hotelName)
	{
		return roomRepo.findByHotelName(hotelName);
	}
	
	@GetMapping("/findByRateLessThan/{hotelName}/{rate}")
	public List<Room> findByHotelNameAndPriceLessThan(@PathVariable("hotelName") String hotelName, @PathVariable("rate") double num)
	{
		return roomRepo.findByHotelNameAndPriceLessThan(hotelName, num);
	}
	
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
