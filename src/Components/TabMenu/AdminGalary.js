import React, { useState, useEffect } from "react";
import "../TabMenu/tab.css";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const AdminGallery = () => {
  const Menu = [
    {
      eventName: "",
      plannerName: "",
      category: "",
      image: "",
    },
  ];
  const navigate = useNavigate();
  const { id } = useParams();
  const [items, setItems] = useState([{ Menu }]);

  const filterItem = (categItem) => {
    const updatedItems = items.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updatedItems);
  };
  useEffect(() => {
    AllItems();
  }, []);

  const AllItems = async () => {
    await axios
      .get("http://localhost:8080/api/eventplanner/event")
      .then((response) => {
        setItems(response.data);

        console.log(response);
      });
  };
  const deleteEvent = (eventid) => {
    console.log(eventid);
    axios
      .delete("http://localhost:8080/api/eventplanner/event" + "/" + eventid)
      .then((response) => {
        AllItems();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const planEvent = (id, event) => {
    console.log(id);
    axios
      .post("http://localhost:8080/api/eventplanner/event", event)
      .then((response) => {
        console.log(response.data);
        window.location.reload();
        setItems(response.data);
        navigate("/admingallery");
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .delete("http://localhost:8080/api/eventplanner/event" + "/" + id)
      .then((response) => {
        AllItems();
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"></link> */}

      <h1 className="mt-5 text-center main-heading">Events</h1>
      <hr />

      <div className="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around">
          <button
            className="btn btn-warning"
            onClick={() => filterItem("family")}
          >
            Friend & Family
          </button>
          <button
            className="btn btn-warning"
            onClick={() => filterItem("official")}
          >
            Offical/Formal
          </button>
          <button
            className="btn btn-warning"
            onClick={() => filterItem("other")}
          >
            Custom
          </button>
          <button className="btn btn-warning" onClick={() => setItems(Menu)}>
            All
          </button>
        </div>
      </div>

      <div className="menu-items container-fluid mt-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5">
              {items.map((items, index) => {
                return (
                  <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5">
                    <div className="row Item-inside">
                      {/* for images */}
                      <div className="col-12 col-md-12 col-lg-6 img-div">
                        <img
                          src={items.image}
                          alt={items.eventName}
                          className="img-fluid"
                        />
                      </div>

                      {/* menu items description */}
                      <div
                        className="col-12 col-md-12 col-lg-6"
                        style={{ paddingLeft: "20px" }}
                      >
                        <div className="main-title pt-4 pb-3">
                          <h1>{items.eventName}</h1>
                          <p style={{ paddingLeft: "20px" }}>
                            Planner: {items.plannerName}
                          </p>
                        </div>
                        <div className="menu-price-book">
                          <div className="price-book-divide d-flex justify-content-between ">
                            <h2>Category : {items.category}</h2>
                          </div>
                          <div className="row">
                            <div className="col">
                              <Link
                                className=" btn-info btn-lg"style={{ height: "auto", marginBottom: "20px", marginRight:"10px" }}
                                to={`/updateevent/${items.id}`}
                                
                              >
                                Modify
                              </Link>
                              <Link
                                className=" btn-danger btn-lg"style={{ height: "auto", marginBottom: "20px" }}
                                onClick={() => deleteEvent(items.id)}
                              >
                                Delete
                              </Link>

                              {/* <button
                              className="btn-info btn-lg"
                              // onClick={(e) => saveOrUpdateEvent(e)}
                              style={{ height: "auto", marginBottom: "20px" }}
                            >
                              Modify
                            </button>
                            </div>
                            <div className="col">
                            <button
                              className="btn-danger btn-lg"
                              // onClick={(e) => saveOrUpdateEvent(e)}
                              style={{ height: "auto", marginBottom: "20px" }}
                            >
                              Delete
                            </button> */}
                            </div>
                          </div>
                          <p style={{ paddingTop: "20px" }}>*Quotations Available per Request.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminGallery;
