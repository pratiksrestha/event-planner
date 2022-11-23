import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const AddEvent = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    eventName: "",
    plannerName: "",
    category: "",
    image: "",
  });
  const { eventName, plannerName, category, image } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log(user.eventName);
    console.log(user.plannerName);
    console.log(user.category);
    console.log(user.image);
    if (id) {
      axios
        .put("http://localhost:8080/api/eventplanner/event" + "/" + id, user)
        .then((response) => {
          alert("Event Updated Succesfully");
          //   navigate("/DisplayBook");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      await axios.post("http://localhost:8080/api/eventplanner/event", user);

      alert("Event Added Succesfully");

      //  navigate("/DisplayBook")
    }
  };

  //   useEffect(()=>{
  //     loadUser();
  //   },[])

  //   const loadUser=async()=>{
  //     const result=await axios.get(`http://localhost:8080/api/eventplanner/event/${id}`)
  //     setUser(result.data)
  //   }
  function PreviewImage(e) {
    e.preventDefault();
    let oFReader = new FileReader();
    oFReader.readAsDataURL(e.target.files[0]);
    oFReader.onload = function (oFREvent) {
      user.image = oFREvent.target.result;
    };
  }
  // useEffect(() => {

  //     LibraryServices.getlibraryById(id).then((response) =>{
  //         setbookName(response.data.bookName)
  //         setauthorName(response.data.authorName)
  //         setrating(response.data.rating)
  //     }).catch(error => {
  //         console.log(error)
  //     })
  // }, [])

  const title = () => {
    if (id) {
      return <h2 className="text-center">Update Event</h2>;
    } else {
      return <h2 className="text-center">Add Event</h2>;
    }
  };
  return (
    <div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div
            className="card col-md-6 offset-md-3 offset-md-3"
            style={{ marginTop: "10px" }}
          >
            {title()}
            <div className="card-body">
              <form onSubmit={(e) => onSubmit(e)}>
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
                  <label className="form-label"> Planner Name :</label>
                  <input
                    type="text"
                    placeholder="Enter Planner name"
                    name="plannerName"
                    className="form-control"
                    value={plannerName}
                    onChange={(e) => onInputChange(e)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Category:</label>
                  <input
                    type="text"
                    placeholder="Enter category"
                    name="category"
                    className="form-control"
                    value={category}
                    onChange={(e) => onInputChange(e)}
                  ></input>
                </div>

                <div className="mb-3">
                  <label htmlFor="Address" className="form-label">
                    Upload Image
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    placeholder="Choose Image"
                    name="image"
                    // value={image}
                    accept="image/*"
                    onChange={(e) => PreviewImage(e)}
                  />
                </div>

                <button
                  className=" btn-success btn-lg"
                  // onClick={(e) => saveOrUpdateEvent(e)}
                >
                  Submit
                </button>
                {/* <Link to="/DisplayBook" className="btn btn-danger btn-sm">
                  Cancel
                </Link> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
