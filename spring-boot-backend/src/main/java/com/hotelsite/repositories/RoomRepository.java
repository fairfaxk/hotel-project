package com.hotelsite.repositories;

import java.util.Date;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.hotelsite.models.Room;

@Repository
public interface RoomRepository extends MongoRepository<Room, String> {
	@Query(value="{'roomType':?0, 'hotelName':?3, 'bookedDates': {'$not': { '$elemMatch': {'dateFrom': {'$lt': ?2}, dateTo: {$gt: ?1}}}}}")
	public Room findOpenRoomByType(String roomType, Date dateFrom, Date dateTo, String hotelName);
	
	@Query(value="{'hotelName':?0, 'roomNumber':?1}")
	public Room findByHotelNameAndRoomNumber(String hotelName, String roomNumber);
	
	public List<Room> findByHotelName(String hotelName);
	
	@Query(value="{'hotelName':?0, 'price':{'$lte': ?1}}")
	public List<Room> findByHotelNameAndPriceLessThan(String hotelName, double num);
	
	@Query(value="{'hotelName':?0, 'price':{'$gte': ?1}}")
	public List<Room> findByHotelNameAndPriceGreaterThan(String hotelName, double num);
	
	@Query(value="{'hotelName':?0, 'type': ?1}}")
	public List<Room> findByHotelNameAndType(String hotelName, String type);
}
