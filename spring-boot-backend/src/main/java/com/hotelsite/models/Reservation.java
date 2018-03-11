package com.hotelsite.models;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "reservations")
public class Reservation extends Booking {

	private boolean paid;
	private String hotelName;
	private String roomNumber;
	private double cost;

	public boolean isPaid() {
		return paid;
	}

	public void setPaid(boolean paid) {
		this.paid = paid;
	}

	public String getHotelName() {
		return hotelName;
	}

	public void setHotelName(String hotelName) {
		this.hotelName = hotelName;
	}

	public String getRoomNumber() {
		return roomNumber;
	}

	public void setRoomNumber(String roomNumber) {
		this.roomNumber = roomNumber;
	}

	public double getCost() {
		return cost;
	}

	public void setCost(double cost) {
		this.cost = cost;
	}

}
