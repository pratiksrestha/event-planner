package com.Prograd.springjwt.models;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="booking")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "bookingName")
    private String bookingName;

    @Column(name = "email")
    private String email;

    @Column(name = "eventName")
    private String eventName;

    @Column(name = "date")
    private Date date;

    @Column(name = "message")
    private String message;


    public Booking(){

    }
    public Booking(String bookingName, String email, String eventName, Date date, String message) {
        this.bookingName = bookingName;
        this.email = email;
        this.eventName = eventName;
        this.date = date;
        this.message=message;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public String getBookingName() {
        return bookingName;
    }

    public void setBookingName(String bookingName) {
        this.bookingName = bookingName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }




    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String  message) {
        this.message = message;
    }


}