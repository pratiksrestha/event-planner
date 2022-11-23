import React, { useState, useEffect } from "react";
import { Calendar } from "react-calendar";

import UserService from "../Services/user-service";
import Todo from "./ToDo/todo.js";
import Calender from "../page/Calender";
import AdminGallery from "./TabMenu/AdminGalary";
import AddEvent from "./TabMenu/AddEvent";
const AdminBoard = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getAdminBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div>
      <div class="row" style={{"paddingTop":"50px"}}>
  
  <div class="col">
    <AddEvent/>
  </div>
  {/* <div class="col"> 
  <AddEvent/>
  </div> */}
  </div>
     

      <div style={{ "padding-top": "20px" }}>
        <AdminGallery />
      </div>
    </div>
  );
};

export default AdminBoard;
