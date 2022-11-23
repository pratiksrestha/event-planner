import React, { useState, useEffect } from "react";
import Todo from "./ToDo/todo"
import UserService from "../Services/user-service";
// import { Calendar } from "react-calendar";
import Calender from "../page/Calender"
import Gallery from "./TabMenu/Gallery";

// const myStyle={

//   backgroundImage:

// "url('https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&w=600')",

//   height:'99vh',

//   marginTop:'-70px',

//   fontSize:'50px',

//   backgroundSize: 'cover',

//   backgroundRepeat: 'no-repeat',

// };
const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div>
        {/* <h3>{content}</h3> */}
        {/* <div style={myStyle}></div> */}
<div class="row">
  <div class="col">
    <Gallery/>
  </div>
  
</div>    </div>
  );
};

export default Home;
