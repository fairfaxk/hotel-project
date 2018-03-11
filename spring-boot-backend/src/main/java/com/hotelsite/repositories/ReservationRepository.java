package com.hotelsite.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.hotelsite.models.Reservation;

@Repository
public interface ReservationRepository extends MongoRepository<Reservation, String> {
	public List<Reservation> findByCostLessThan(double num);
	public List<Reservation> findByCostGreaterThan(double num);
	public Reservation findByReservationNumber(String resNum);
	public List<Reservation> findByHotelName(String hotelName);
	public void deleteByReservationNumber(String reservationNumber);
}
