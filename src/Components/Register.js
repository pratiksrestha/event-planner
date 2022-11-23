import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import bg from "../Media/ew3.jpg";

import AuthService from "../Services/auth-service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const Register = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(username, email, password).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };

  return (
    // <div className="col-md-12">
    //   <div className="card card-container">
    //     <img
    //       src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
    //       alt="profile-img"
    //       className="profile-img-card"
    //     />

    //     <Form onSubmit={handleRegister} ref={form}>
    //       {!successful && (
    //         <div>
    //           <div className="form-group">
    //             <label htmlFor="username">Username</label>
    //             <Input
    //               type="text"
    //               className="form-control"
    //               name="username"
    //               value={username}
    //               onChange={onChangeUsername}
    //               validations={[required, vusername]}
    //             />
    //           </div>

    //           <div className="form-group">
    //             <label htmlFor="email">Email</label>
    //             <Input
    //               type="text"
    //               className="form-control"
    //               name="email"
    //               value={email}
    //               onChange={onChangeEmail}
    //               validations={[required, validEmail]}
    //             />
    //           </div>

    //           <div className="form-group">
    //             <label htmlFor="password">Password</label>
    //             <Input
    //               type="password"
    //               className="form-control"
    //               name="password"
    //               value={password}
    //               onChange={onChangePassword}
    //               validations={[required, vpassword]}
    //             />
    //           </div>

    //           <div className="form-group">
    //             <button className="btn btn-primary btn-block">Sign Up</button>
    //           </div>
    //         </div>
    //       )}

    //       {message && (
    //         <div className="form-group">
    //           <div
    //             className={ successful ? "alert alert-success" : "alert alert-danger" }
    //             role="alert"
    //           >
    //             {message}
    //           </div>
    //         </div>
    //       )}
    //       <CheckButton style={{ display: "none" }} ref={checkBtn} />
    //     </Form>
    //   </div>
    // </div>


    <div style={{"height":"550px","padding-top":"90px"}}>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"></link>

    <div class="app-container app-theme-white body-tabs-shadow" >
<div class="app-container">
<div class="h-100">
<div class="h-100 no-gutters row">
<div class="h-100 d-md-flex d-sm-block bg-white justify-content-center align-items-center col-md-12 col-lg-7"style={{"padding-top":"90px"}}>
<div class="mx-auto app-login-box col-sm-12 col-md-10 col-lg-9">
<div class="app-logo"></div>
<h4>
<div>Welcome,</div>
<span>It only takes a <span class="text-success">few seconds</span> to create your account</span>
</h4>
<div>
<Form onSubmit={handleRegister} ref={form}>
{!successful && (
                     <><div class="form-row">
                       <div class="col-md-6">
                         <div class="position-relative form-group">
                           <label for="exampleEmail" class=""><span class="text-danger">*</span> Email</label>
                           <Input name="email" id="exampleEmail" placeholder="Email here..." type="email" class="form-control" value={email} onChange={onChangeEmail} validations={[required, validEmail]} />
                         </div>
                       </div>
                       <div class="col-md-6">
                         <div class="position-relative form-group">
                           <label for="exampleName" class="">Name</label>
                           <Input name="text" id="exampleName" placeholder="Name here..." type="text" class="form-control" value={username}
                             onChange={onChangeUsername}
                             validations={[required, vusername]} />
                         </div>
                       </div>
                       <div class="col-md-6">
                         <div class="position-relative form-group">
                           <label for="examplePassword" class=""><span class="text-danger">*</span> Password</label>
                           <Input name="password" id="examplePassword" placeholder="Password here..." type="password" class="form-control" value={password}
                             onChange={onChangePassword}
                             validations={[required, vpassword]} />
                         </div>
                       </div>
                       <div class="col-md-6">
                         <div class="position-relative form-group">
                           <label for="examplePasswordRep" class=""><span class="text-danger">*</span> Repeat Password</label>
                           <Input name="passwordrep" id="examplePasswordRep" placeholder="Repeat Password here..." type="password" class="form-control" />
                         </div>
                       </div>
                     </div><div class="mt-4 d-flex align-items-center">
                         <h5 class="mb-0">Already have an account?<a href="./Login" class="text-primary">Sign in</a></h5>
                         <div class="ml-auto">
                           <button class="btn-wide btn-pill btn-shadow btn-hover-shine btn btn-dark btn-lg">Create Account </button>
                         </div>
                       </div></>
)}
{message && (
<div className="form-group">
 <div
   className={ successful ? "alert alert-success" : "alert alert-danger" }
   role="alert"
 >
   {message}
 </div>
</div>
)}
<CheckButton style={{ display: "none" }} ref={checkBtn} />
</Form>
</div>
</div>
</div>
<div class="d-lg-flex d-xs-none col-lg-5">
<div class="slider-light">
<div class="slick-slider slick-initialized">
<div>
<div class="position-relative h-100 d-flex justify-content-center align-items-center bg-premium-dark" tabindex="-1">
<div class="slider-content">
<img  class="img-fluid" src={bg} alt="Logo"></img>

<h3 class="login-sidebar-title" style={{"textAlign":"center","color":"white"}}>Want us to handle your chores? <br/>Sign Up with us and we will handle it.</h3>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<script type="text/javascript" src="./assets/scripts/main.d810cf0ae7f39f28f336.js"></script>




 </div>   
  );
};

export default Register;