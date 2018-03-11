package com.hotelsite.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hotelsite.models.Hotel;
import com.hotelsite.repositories.HotelRepository;

@RestController
@RequestMapping("/api/hotels")
@CrossOrigin("*")
public class HotelController {
	
	@Autowired 
	HotelRepository hotelRepo;
	
	private final Sort sortByHotelNameDesc = new Sort(Sort.Direction.DESC, "name");
	
	/**
	 * Finds all documents in the hotels collection
	 * 
	 * @return json of all documents in hotels collection
	 */
	@GetMapping("/findAll")
	public List<Hotel> findAllHotels(){
		return hotelRepo.findAll(sortByHotelNameDesc);
	}
	
	/**
	 * finds the hotel whose name matches the input parameter
	 * 
	 * @param name
	 * @return json of the hotel whose name matches name
	 */
	@GetMapping("/findByName/{name}")
	public Hotel findHotelByName(@PathVariable("name") String name){
		return hotelRepo.findByName(name);
	}
	
	
}
