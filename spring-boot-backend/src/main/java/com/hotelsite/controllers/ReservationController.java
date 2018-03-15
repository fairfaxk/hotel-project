package com.hotelsite.controllers;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hotelsite.models.Booking;
import com.hotelsite.models.Reservation;
import com.hotelsite.models.Room;
import com.hotelsite.repositories.ReservationRepository;
import com.hotelsite.repositories.RoomRepository;

@RestController
@RequestMapping("/api/reservations")
@CrossOrigin("*")
public class ReservationController {
	@Autowired
	ReservationRepository resRepo;
	
	@Autowired
	RoomRepository roomRepo;
	
	/**
	 * Finds all documents in the reservations collection
	 * 
	 * @return json of all reservations
	 */
	@GetMapping("/findAll")
	public List<Reservation> findAllHotels(){
		return resRepo.findAll();
	}
	
	/**
	 * Finds all documents whose cost < num
	 * 
	 * @param num
	 * @return json of all rooms whose cost is < num
	 */
	@GetMapping("/findByCostLessThan/{hotel}/{less}")
	public List<Reservation> findCostLessThan(@PathVariable("hotel") String hotel, @PathVariable("less") double num){
		return resRepo.findByHotelNameCostLessThan(hotel, num);
	}
	
	/**
	 * Finds all documents whose cost > num
	 * 
	 * @param num
	 * @return json of all rooms whose cost is > num
	 */
	@GetMapping("/findByCostGreaterThan/{hotel}/{greater}")
	public List<Reservation> findCostGreaterThan(@PathVariable("hotel") String hotel, @PathVariable("greater") double num){
		return resRepo.findByHotelNameCostGreaterThan(hotel, num);
	}
	
	/**
	 * Finds document with input reservation number
	 * 
	 * @param num
	 * @return json reservation with input number
	 */
	@GetMapping("/findByReservationNumber/{resNumber}")
	public Reservation findByReservationNumber(@PathVariable("resNumber") String resNum){
		return resRepo.findByReservationNumber(resNum);
	}
	
	/**
	 * Finds all documents with input hotel name
	 * 
	 * @param num
	 * @return json reservations with input hotel name
	 */
	@GetMapping("/findByHotelName/{HotelName}")
	public List<Reservation> findByHotelName(@PathVariable("hotelName") String hotelName){
		return resRepo.findByHotelName(hotelName);
	}
	
	/**
	 * adds the reservation in request body to database. Also adds it to the room's bookedFrom field
	 * 
	 * @param reservation
	 * @return
	 */
	@PostMapping("/addReservation")
	public Reservation addReservation(@Valid @RequestBody Reservation reservation){
		//Add room
		Room room = roomRepo.findByHotelNameAndRoomNumber(reservation.getHotelName(), reservation.getRoomNumber());
		Booking book = new Booking();
		book.setReservationNumber(reservation.getReservationNumber());
		book.setDateFrom(reservation.getDateFrom());
		book.setDateTo(reservation.getDateTo());
		List<Booking> bookings = room.getBookedDates();
		bookings.add(book);
		room.setBookedDates(bookings);
		roomRepo.save(room);
		
		return resRepo.save(reservation);
	}
	
	/**
	 * Updates an existing reservation by passing its reservation number. Body of request must be a reservation, and if cost is unchanged, must send a negative number
	 * Also adds it to the room's bookedFrom field
	 * 
	 * @param reservationNumber
	 * @param reservation
	 * @return
	 */
	@PutMapping("/updateReservation/{reservationNumber}")
	public Reservation addReservation(@PathVariable("reservationNumber") String reservationNumber, @RequestBody Reservation reservation){
		Reservation newReservation = resRepo.findByReservationNumber(reservationNumber);
		if(reservation.getCost()>=0)
			newReservation.setCost(reservation.getCost());
		if(reservation.getDateFrom()!=null)
			newReservation.setDateFrom(reservation.getDateFrom());
		if(reservation.getDateTo()!=null)
			newReservation.setDateTo(reservation.getDateTo());
		if(reservation.getHotelName()!=null)
			newReservation.setHotelName(reservation.getHotelName());
		if(reservation.getRoomNumber()!=null)
			newReservation.setRoomNumber(reservation.getRoomNumber());
		
		//update the booking in the room repository
		Room room = roomRepo.findByHotelNameAndRoomNumber(reservation.getHotelName(), reservation.getRoomNumber());
		List<Booking> bookings= new ArrayList<Booking>();
		for(Booking book: room.getBookedDates())
		{
			if(book.getReservationNumber().equals(reservation.getReservationNumber()))
			{
				if(reservation.getDateFrom()!=null)
					book.setDateFrom(reservation.getDateFrom());
				if(reservation.getDateFrom()!=null)
					book.setDateTo(reservation.getDateTo());
			}
			bookings.add(book);
		}
		room.setBookedDates(bookings);
		roomRepo.save(room);
		return resRepo.save(newReservation);
	}
	
	/**
	 * Deletes a reservation with the given reservation number
	 * 
	 * @param id
	 * @return
	 */
	@DeleteMapping("deleteReservation/{reservationNumber}")
	public void deleteReservation(@PathVariable("reservationNumber") String reservationNumber)
	{
		resRepo.deleteByReservationNumber(reservationNumber);
	}
}
