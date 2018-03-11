package com.hotelsite.controllers;

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

import com.hotelsite.models.Reservation;
import com.hotelsite.repositories.ReservationRepository;

@RestController
@RequestMapping("/api/reservations")
@CrossOrigin("*")
public class ReservationController {
	@Autowired
	ReservationRepository resRepo;
	
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
	@GetMapping("/findByCostLessThan/{less}")
	public List<Reservation> findCostLessThan(@PathVariable("less") double num){
		return resRepo.findByCostLessThan(num);
	}
	
	/**
	 * Finds all documents whose cost > num
	 * 
	 * @param num
	 * @return json of all rooms whose cost is > num
	 */
	@GetMapping("/findByCostGreaterThan/{greater}")
	public List<Reservation> findCostGreaterThan(@PathVariable("greater") double num){
		return resRepo.findByCostGreaterThan(num);
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
	 * adds the reservation in request body to database
	 * 
	 * @param reservation
	 * @return
	 */
	@PostMapping("/addReservation")
	public Reservation addReservation(@Valid @RequestBody Reservation reservation){
		return resRepo.save(reservation);
	}
	
	/**
	 * Updates an existing reservation by passing its reservation number. Body of request must be a reservation, and if cost is unchanged, must send a negative number
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
		return resRepo.save(newReservation);
	}
	
	/**
	 * Deletes a reservation with the given reservation number
	 * 
	 * @param id
	 * @return
	 */
	@DeleteMapping("deleteReservation/{reservationNumber}")
	public Reservation deleteReservation(@PathVariable("reservationNumber") String reservationNumber)
	{
		return resRepo.deleteByReservationNumber(reservationNumber);
	}
}
