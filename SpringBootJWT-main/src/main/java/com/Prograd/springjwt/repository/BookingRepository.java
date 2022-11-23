package com.Prograd.springjwt.repository;
import com.Prograd.springjwt.models.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BookingRepository extends JpaRepository<Booking,Integer>  {
//    Optional<Booking> findByBooking(String bookingName);
}
