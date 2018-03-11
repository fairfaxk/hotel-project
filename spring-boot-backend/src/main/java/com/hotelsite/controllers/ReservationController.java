package com.hotelsite.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
}
