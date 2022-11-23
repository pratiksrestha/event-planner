package com.Prograd.springjwt.controllers;
import com.Prograd.springjwt.exception.ResourceNotFoundException;
import com.Prograd.springjwt.models.*;
import com.Prograd.springjwt.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;




@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/eventplanner")
public class EventController {
    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private BookingRepository bookingRepository;

//    @Autowired
//    private RequestRepository requestRepository;
//
//    @Autowired
//    private BuyRepository buyRepository;
//
//    @Autowired
//    private BuyRequestRepository buyRequestRepository;

    @PostMapping("/event")
    public Event createEvent(@RequestBody Event event) {
        return eventRepository.save(event);
    }

    @GetMapping("/event")
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    @PutMapping("/event/{id}")
    public ResponseEntity<Event> updateEvent(@PathVariable int id, @RequestBody Event eventDetails) {
        Event updateEvent = eventRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Not exist with id" + id));
        updateEvent.setEventName(eventDetails.getEventName());
        updateEvent.setPlannerName(eventDetails.getPlannerName());
        updateEvent.setCategory(eventDetails.getCategory());
        updateEvent.setImage(eventDetails.getImage());
        eventRepository.save(updateEvent);
        return ResponseEntity.ok(updateEvent);
    }

    @DeleteMapping("/event/{id}")
    public ResponseEntity<HttpStatus> deleteEvent(@PathVariable int id) {
        Event event = eventRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Not exist with id" + id));
        eventRepository.delete(event);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


    @PostMapping("/event/booking")
    public Booking bookEvent(@RequestBody Booking booking) {
        return bookingRepository.save(booking);
    }
    @GetMapping("/event/booking")
    public List<Booking> getAllBooking() {
        return bookingRepository.findAll();
    }
    @GetMapping("/event/booking/{id}")
    public ResponseEntity<Booking> getBorrowById(@PathVariable int id) {
        Booking booking = bookingRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Not exist with id" + id));
        return ResponseEntity.ok(booking);
    }
    @PutMapping("/event/booking/{id}")
    public ResponseEntity<Booking> updateBooking(@PathVariable int id, @RequestBody Booking bookingDetails) {
        Booking updateBooking = bookingRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Not exist with id" + id));
        updateBooking.setEventName(bookingDetails.getEventName());
        updateBooking.setBookingName(bookingDetails.getBookingName());
        updateBooking.setEmail(bookingDetails.getEmail());
        updateBooking.setDate(bookingDetails.getDate());
        updateBooking.setMessage(bookingDetails.getMessage());

        bookingRepository.save(updateBooking);
        return ResponseEntity.ok(updateBooking);
    }
    @DeleteMapping("/event/booking/{id}")
    public ResponseEntity<HttpStatus> deleteBooking(@PathVariable int id) {
        Booking booking = bookingRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Not exist with id" + id));
        bookingRepository.delete(booking);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


//    @GetMapping("/library/request")
//    public List<Request> getAllRequests() {
//        return requestRepository.findAll();
//    }
//
//    @GetMapping("/library/requestbuy")
//    public List<BuyRequest> getAllRequestsBuy() {
//        return buyRequestRepository.findAll();
//    }
//
//    @GetMapping("/library/request/{id}")
//    public ResponseEntity<Request> getRequestById(@PathVariable int id) {
//        Request request = requestRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Not exist with id" + id));
//        return ResponseEntity.ok(request);
//    }
//
//    @DeleteMapping("/library/request/{id}")
//    public ResponseEntity<HttpStatus> deleteRequest(@PathVariable int id) {
//        Request request = requestRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Not exist with id" + id));
//        requestRepository.delete(request);
//        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//    }
//
//    @PostMapping("/library/request")
//    public Request requestLibrary(@RequestBody Request request) {
//        return requestRepository.save(request);
//    }
//
//    @PostMapping("/library/requestbuy")
//    public BuyRequest requestLibrary(@RequestBody BuyRequest buyRequest) {
//        return buyRequestRepository.save(buyRequest);
//    }
//
//
//    @DeleteMapping("/library/buy/{id}")
//    public ResponseEntity<HttpStatus> deleteCart(@PathVariable int id) {
//        Buy buy = buyRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Not exist with id" + id));
//        buyRepository.delete(buy);
//        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//    }
//
//    @DeleteMapping("/library/requestbuy/{id}")
//    public ResponseEntity<HttpStatus> deleteBuyRequest(@PathVariable int id) {
//        BuyRequest buyRequest = buyRequestRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Not exist with id" + id));
//        buyRequestRepository.delete(buyRequest);
//        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//    }
//
//    @DeleteMapping("/library/buy")
//    public void  DeleteAll() {
//        buyRepository.deleteAll();
//    }
//
//
//    @PostMapping("/library/buy")
//    public Buy buyLibrary(@RequestBody Buy buy) {
//        return buyRepository.save(buy);
//    }
//
//
//    @GetMapping("/library/buy")
//    public List<Buy> getAllbuy() {
//        return buyRepository.findAll();
//    }
//
//
//
//
//
//    @GetMapping("/library/{id}")
//    public ResponseEntity<Library> getLibraryById(@PathVariable int id) {
//        Library library = libraryRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Not exist with id" + id));
//        return ResponseEntity.ok(library);
//    }
//
//
//
//    @PutMapping("/library/buy/{id}")
//    public ResponseEntity<BuyRequest> updateRequest(@PathVariable int id, @RequestBody BuyRequest buyDetails) {
//        BuyRequest updateRequest = buyRequestRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Not exist with id" + id));
//        updateRequest.setBookName(buyDetails.getBookName());
//        updateRequest.setAuthorName(buyDetails.getAuthorName());
//        updateRequest.setRating(buyDetails.getRating());
//        updateRequest.setImage(buyDetails.getImage());
//        updateRequest.setStatus(buyDetails.getStatus());
//        buyRequestRepository.save(updateRequest);
//        return ResponseEntity.ok(updateRequest);
//    }
}