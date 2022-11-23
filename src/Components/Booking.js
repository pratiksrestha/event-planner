import React, { useState, useEffect } from "react";
import UserService from "../Services/user-service";
import Todo from "./ToDo/todo.js";
import Calender from "../page/Calender";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const Booking = () => {
  const Menu = [
    {
      eventName: "",
      email: "",
      bookingName: "",
      message: "",
      date: "",
    },
  ];
  const [items, setItems] = useState([{ Menu }]);
  const{id}=useParams();
  const navigate = useNavigate();
  useEffect(() => {
    AllItems();
  }, []);

  const AllItems = async () => {
    await axios
      .get("http://localhost:8080/api/eventplanner/event/booking")
      .then((response) => {
        setItems(response.data);

        console.log(response);
      });
  };

  const deleteBooking=(bookingid)=>{
    console.log(bookingid);
    axios.delete("http://localhost:8080/api/eventplanner/event/booking"+'/'+bookingid)
    .then((response)=>{
      AllItems();
    }).catch(error=>{console.log(error);
    })
}

const BookEvent=(id,event)=>{
  console.log(id);
  axios.post("http://localhost:8080/api/eventplanner/event/booking",event)
    .then((response) => {
      console.log(response.data);
      window.location.reload();
     setItems(response.data);
      navigate("/gallery");
    })
    .catch((error) => {
      console.log(error);
    });
  axios.delete("http://localhost:8080/api/eventplanner/event/booking"+'/'+id)
  .then((response)=>{
    AllItems();
    console.log(response.data);
  }).catch(error=>{console.log(error);
  })
};
  return (
    <div className="container" style={{ paddingTop: "100px" }}>
      {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"></link> */}
      <div>
        <h1>Bookings</h1>
      </div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Event</th>
            <th scope="col">Date</th>
            <th scope="col">Message</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((items, index) => {
            return (
              <tr>
                <th scope="row">{items.id}</th>
                <td>{items.bookingName}</td>
                <td>{items.email}</td>
                <td>{items.eventName}</td>
                <td>{items.date}</td>
                <td>{items.message}</td>
                <td>
                  {/* <button className=" btn-success btn-sm"// onClick={(e) => saveOrUpdateEvent(e)}
                >
                  Modify
                </button> */}
                <Link className="btn-success btn-lg" to={`/temp/${items.id}`}
                  style={{margin:"10px"}}>Modify</Link>
                                    <Link className="btn-danger btn-lg" onClick={()=>deleteBooking(items.id) }>Completed</Link>

                
                {/* <button style={{"margin-left":"20px"}} className=" btn-danger btn-sm" onClick={() => deleteBooking(items.id)}
                >
                  Completed
                </button> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div class="row" style={{ paddingTop: "100px" }}>
        <div class="col">
          <Calender></Calender>
        </div>
        <div class="col">
          <Todo></Todo>
        </div>
      </div>
    </div>
  );
};

export default Booking;








