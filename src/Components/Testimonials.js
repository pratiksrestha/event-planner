

import React, { useState, useEffect } from "react";

import UserService from "../Services/user-service";
import bg from "../Media/ew3.jpg";

const Testimonials = () => {
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
    <div style={{"padding-top":"50px"}}>
        <h1 style={{"textAlign":"center"}}>Testimonials</h1>
        <div style={{"padding-top":"50px"}}class="row">
            
        <div className="col-sm-4">

            <div style={{"text-align":"center"}}>

                <img src="https://www.bing.com/th?id=OIP.LFcgFYL-bX-lbDjrqJc8cAHaLH&w=150&h=225&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" style={{"maxHeight":"200px","maxWidth":"200px","borderRadius":"50%"}} />
            </div>
                <div style={{"padding":"30px"}}>
                <h3 style={{"text-align":"center"}}>IVY Comptech</h3><h4 style={{"text-align":"center"}}>Company</h4>
                <p style={{"text-align":"center", "paddingTop":"10px"}}> 
                    Very nice service         
                </p>
                </div>
        </div>   
        <div className="col-sm-4">

<div style={{"text-align":"center"}}>

    <img src="https://th.bing.com/th/id/OIP.fmaL3p_JnNiL9nP57C2R7QHaLH?w=182&h=273&c=7&r=0&o=5&dpr=1.25&pid=1.7" style={{"maxHeight":"200px","maxWidth":"200px","borderRadius":"50%"}} />
</div>
    <div style={{"padding":"30px"}}>
    <h3 style={{"text-align":"center"}}>IVY Comptech</h3><h4 style={{"text-align":"center"}}>Company</h4>
    <p style={{"text-align":"center", "paddingTop":"10px"}}> 
        Very nice service         
    </p>
    </div>
</div>   
<div className="col-sm-4">

<div style={{"text-align":"center"}}>

    <img src="https://www.bing.com/th?id=OIP.taUA8objkc9aKhxuJwHRMQHaHa&w=150&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" style={{"maxHeight":"200px","maxWidth":"200px","borderRadius":"50%"}} />
</div>
    <div style={{"padding":"30px"}}>
    <h3 style={{"text-align":"center"}}>IVY Comptech</h3><h4 style={{"text-align":"center"}}>Company</h4>
    <p style={{"text-align":"center", "paddingTop":"10px"}}> 
        Very nice service         
    </p>
    </div>
</div>   
                     
        </div>
        
    </div>
  );
};

export default Testimonials;
