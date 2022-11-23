
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const Temp = () => {

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
            .put("http://localhost:8080/api/eventplanner/event/booking"+'/'+id,user)
            .then((response) => {
              alert("Book Updated Succesfully");
              navigate("/Booking");
            })
            .catch((error) => {
              console.log(error);
            });
        }
        else{
     await axios.post("http://localhost:8080/api/eventplanner/event/booking",user);

     alert("Book Added Succesfully");

     navigate("/DisplayBook")
        }
   };

  useEffect(()=>{
    loadUser();
  },[])

  const loadUser=async()=>{
    const result=await axios.get(`http://localhost:8080/api/eventplanner/event/booking/${id}`)
    setUser(result.data)
  }
  


  const title = () => {
    if (id) {
      return <h2 className="text-center">Update Book</h2>;
    } else {
      return <h2 className="text-center">Add Book</h2>;
    }
  };
  return (
    <div>
      <br />
      <br />
      <div className="container" >
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3" style={{marginTop:'10px'}}>
            {title()}
            <div className="card-body">
              <form onSubmit={(e) => onSubmit(e)}>
              <div className="form-group mb-2">
                  <label className="form-label"> Your Name :</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="bookingName"
                    className="form-control"
                    value={bookingName}
                    onChange={(e) => onInputChange(e)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> Event Name :</label>
                  <input
                    type="text"
                    placeholder="Enter Event name"
                    name="eventName"
                    className="form-control"
                    value={eventName}
                    onChange={(e) => onInputChange(e)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Email :</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => onInputChange(e)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> Date :</label>
                  <input
                    type="datetime-local"
                    placeholder="Enter date"
                    name="date"
                    className="form-control"
                    value={date}
                    onChange={(e) => onInputChange(e)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Message:</label>
                  <input
                    type="text"
                    placeholder="Enter message"
                    name="message"
                    className="form-control"
                    value={message}
                    onChange={(e) => onInputChange(e)}
                  ></input>
                </div>

                <button
                  className=" btn-success btn-lg"
                  // onClick={(e) => saveOrUpdateEvent(e)}
                >
                  Submit
                </button>

                <Link to="/booking" className="btn-danger btn-lg">
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temp;