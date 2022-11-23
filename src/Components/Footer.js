import React, { useState, useEffect } from "react";

import UserService from "../Services/user-service";

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
    <div>
        {/* <h3>{content}</h3> */}
        <div class="container pt-lg-5 pt-md-4 pt-2 pb-2" style={{"position":"relative", "bottom":"0", "width":"100%", "height":"auto"}}>     
                <div class="row footer-hny-grids sub-columns">
                    <div class="col-lg-4 sub-one-left pe-lg-5">
                                                
                    </div>
                    <div class="col-lg-2 sub-two-right">
                    <a href="https://www.facebook.com"><span class="fab fa-facebook-f"></span></a>
                    </div>
                    <div class="col-lg-2 sub-two-right">
                    <a href="https://linkedin.com"><span class="fab fa-linkedin-in"></span></a>
                                                                    </div>
                    <div class="col-lg-4 sub-one-left">
                    <a href="https://twitter.com"><span class="fab fa-twitter"></span></a>
                                                                    </div>
                </div>

                <div class="mt-lg-5 mt-sm-4 mt-2 text-center">
                <p class="copy-text CopyRights">
                    © 2022 Event Planner. All Rights Reserved | Web App Developed by <a href="https://google.com/">google.</a>
                </p>
            </div>

        </div>
    </div>
  );
};

export default AboutUs;
