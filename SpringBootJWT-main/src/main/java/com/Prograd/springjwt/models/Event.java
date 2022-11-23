package com.Prograd.springjwt.models;
import javax.persistence.*;

@Entity
@Table(name="event")
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "eventName")
    private String eventName;

    @Column(name = "plannerName")
    private String plannerName;

    @Column(name = "category")
    private String category;

    @Lob
    @Column(name = "image", length = Integer.MAX_VALUE, nullable = true)
    private String image;




    public Event(){

    }
    public Event(String eventName, String plannerName, String category) {
        this.eventName = eventName;
        this.plannerName = plannerName;
        this.category=category;
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

    public String getPlannerName() {
        return plannerName;
    }

    public void setPlannerName(String plannerName) {
        this.plannerName = plannerName;
    }




    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String  category) {
        this.category = category;
    }

}