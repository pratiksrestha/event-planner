package com.Prograd.springjwt.repository;
import com.Prograd.springjwt.models.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event,Integer>  {
//    Optional<Event> findByEvent(String eventName);
}
