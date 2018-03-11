package com.hotelsite.models;

import java.util.Date;

public class Booking {
	
	private String reservationNumber;
	private Date dateFrom;
	private Date dateTo;

	public Date getDateFrom() {
		return dateFrom;
	}

	public void setDateFrom(Date dateFrom) {
		this.dateFrom = dateFrom;
	}

	public String getReservationNumber() {
		return reservationNumber;
	}

	public void setReservationNumber(String id) {
		this.reservationNumber = id;
	}

	public Date getDateTo() {
		return dateTo;
	}

	public void setDateTo(Date dateTo) {
		this.dateTo = dateTo;
	}
}
