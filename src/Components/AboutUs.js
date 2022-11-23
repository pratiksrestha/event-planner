import React, { useState, useEffect } from "react";

import UserService from "../Services/user-service";

const myStyle={

  backgroundImage:

"url('https://wallpapercave.com/wp/wp5016676.jpg')",

  height:'99vh',

  marginTop:'-70px',

  fontSize:'50px',

  backgroundSize: 'cover',

  backgroundRepeat: 'no-repeat',

};
const AboutUs = () => {
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
    <div >
        {/* <h3>{content}</h3> */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"/>
<div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light" style={myStyle}>
    <div class="col-md-5 p-lg-5 mx-auto my-5" style={{"backgroundColor":"black", "opacity":"0.7"}}>
      <h1 class="display-4 fw-normal"style={{"color":"white"}}>Event Planner</h1>
      <p class="lead fw-normal" style={{"color":"white"}}>One Stop Solution to all your events. </p>
      <p class="lead fw-normal" style={{"color":"white"}}>We are the best at what we do. What is an event planner?
An event planner, also known as an event coordinator or event specialist, is a professional responsible for organising and coordinating meetings and special events for individuals, businesses, non-profit organisations or other groups. Those in this role might work for a company or freelance. They could work in various industries, like hospitality and tourism, recreation, arts and culture, sports, fundraising, corporate marketing or non-profit.  </p>
      <a style={{"margin-top":"30%"}} class="btn btn-outline-light btn-lg" href="/home">Explore</a>
    </div>
    <div class="product-device shadow-sm d-none d-md-block"></div>
    <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>
    </div>
  );
};

export default AboutUs;
