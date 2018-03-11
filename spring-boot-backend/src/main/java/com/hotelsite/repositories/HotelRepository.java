package com.hotelsite.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.hotelsite.models.Hotel;

@Repository
public interface HotelRepository extends MongoRepository<Hotel, String> {
	public Hotel findByName(String name);
}
