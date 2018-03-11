package com.hotelsite.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.hotelsite.models.Room;

@Repository
public interface RoomRepository extends MongoRepository<Room, String> {
	
}
