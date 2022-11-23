import React, { useState, useEffect } from "react";
import Calender from "../page/Calender";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import UserService from "../Services/user-service";
import Testimonials from "./Testimonials";

const ModifyBooking = () => {
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    bookingName:"",
    eventName: "",
    email: "",
    date: "",
    message: "",
  });
  const { bookingName, eventName, email, date, message } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(user.bookingName);
    console.log(user.eventName);
    console.log(user.email);
    console.log(user.date);
    console.log(user.message);
    if (id) {
      axios
        .put("http://localhost:8080/api/eventplanner/event/booking" + "/" + id, user)
        .then((response) => {
          alert("Event Updated Succesfully");
          //   navigate("/DisplayBook");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      await axios.post("http://localhost:8080/api/eventplanner/event/booking", user);

      alert("Event Added Succesfully");

      //  navigate("/DisplayBook")
    }
  };
  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);


  return (
    <div className="container" style={{ paddingTop: "50px" }}>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
        crossorigin="anonymous"
      ></link>

      <div style={{ paddingTop: "0px" }}>
        <h1 style={{ "text-align": "center" }}>Modify your Event</h1>
      </div>
      <form style={{ paddingTop: "20px" }}onSubmit={(e) => onSubmit(e)}>
        <div class="row">
          <div class="col-md-6 form-group">
            <input
              type="text"
              name="bookingName"
              class="form-control"
              id="name"
              placeholder="Your Name"
              value={bookingName}
                    onChange={(e) => onInputChange(e)}
            />
          </div>
          <div class="col-md-6 form-group mt-3 mt-md-0">
            <input
              type="email"
              class="form-control"
              name="email"
              id="email"
              placeholder="Your Email"
              value={email}
                    onChange={(e) => onInputChange(e)}
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 form-group">
          <input
            type="text"
            class="form-control"
            name="eventName"
            id="eventName"
            placeholder="Event"
            value={eventName}
                    onChange={(e) => onInputChange(e)}
          />
          </div>
          <div class="col-md-6 form-group mt-3 mt-md-0">
          <input
            type="datetime-local"
            class="form-control"
            name="date"
            id="date"
            placeholder="Date of Event"
            value={date}
                    onChange={(e) => onInputChange(e)}
          />
          </div>
        </div>
        
        <div class="form-group mt-3">
          <textarea
            class="form-control"
            name="message"
            rows="5"
            placeholder="Message"
            value={message}
                    onChange={(e) => onInputChange(e)}
          ></textarea>
        </div>

        <div class="text-center">
          <button class="btn btn-dark" style={{ height: "40px" }} type="submit">
            Continue
          </button>
        </div>
      </form>
      <div style={{ paddingTop: "20px" }}>
        <hr></hr>
      </div>
    </div>
  );
};

export default ModifyBooking;
