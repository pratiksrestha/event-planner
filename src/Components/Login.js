import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
// import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
// import CheckButton from "react-validation/build/button";
// import "../Template/demo.css";
// import Demo from "../Template/demo";
import Celebration from "../Media/celebration.jpg";
import Logo from "../Media/logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import AuthService from "../Services/auth-service";
// const required = (value) => {
//   if (!value) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This field is required!
//       </div>
//     );
//   }
// };

// const myStyle={

//   backgroundImage:

// "url('https://www.bing.com/th?id=OIP.LNzhkNmVlua9z2CvRVZxCwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2')",

//   height:'99vh',

//   marginTop:'70px',

//   fontSize:'50px',

//   backgroundSize: 'cover',

//   backgroundRepeat: 'no-repeat',

// };
const Login = () => {
  let navigate = useNavigate();

  // const form = useRef();
  // const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // setMessage("");
    // setLoading(true);

    // form.current.validateAll();

  //  if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password).then(
        () => {
          navigate("/home");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          // setLoading(false);
          // setMessage(resMessage);
        }
      );
  //  else {
  //     setLoading(false);
  //   }
  };
  useEffect(() => {
    document.title = "Login Page";  
  }, []);

  return (
    //   <div style={{"background-image": "url('https://static.vecteezy.com/system/resources/previews/000/541/164/original/vector-abstract-beautiful-white-gradient-background.jpg')", "backgroundSize":"cover","backgroundRepeat":"no-repeat"}}>
    // <div className="col-md-12" style={{"padding-top":"50px", "padding-bottom":"50px"}}>
    //   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"></link>
    //   <div  style={{"backgroundColor":"transparent"}}  className="card card-container">
    //     <img
    //       src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          
    //       alt="profile-img"
    //       className="profile-img-card"
    //     />

    //     <form onSubmit={handleLogin}>
    //       <div className="form-group">
    //         <label htmlFor="username">Username</label>
    //         <input
    //           type="text"
    //           className="form-control"
    //           name="username"
    //           value={username}
    //           onChange={onChangeUsername}
              
    //         />
    //       </div>

    //       <div className="form-group">
    //         <label htmlFor="password">Password</label>
    //         <input
    //           type="password"
    //           className="form-control"
    //           name="password"
    //           value={password}
    //           onChange={onChangePassword}
    //                       />
    //       </div>

    //       <div className="row"  style={{"padding-top":"20px"}}>
    //         <button className="btn btn-light btn-block" style={{}}>
    //           <span>Login</span>
    //         </button>
    //       </div>

    //       {/* {message && (
    //         <div className="form-group">
    //           <div className="alert alert-danger" role="alert">
    //             {message}
    //           </div>
    //         </div>
    //       )} */}
    //       {/* <CheckButton style={{ display: "none" }} ref={checkBtn} /> */}
    //     </form>
    //   </div>
    //   </div>
    // </div>


<div style={{"height":"550px","padding-top":"50px"}}>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"></link>

<div class="h-100 no-gutters row">
<div class="d-none d-lg-block col-lg-4">

<div class="position-relative h-100 d-flex justify-content-center align-items-center bg-plum-plate" tabindex="-1">
{/* <div class="slide-img-bg" style="background-image: url('assets/images/originals/city.jpg');"></div> */}
<img  class="img-fluid" src={Celebration} alt="Logo"></img>

<h3 class="login-sidebar-title" style={{"textAlign":"center"}}>Your Event. Your Plan. <br/>Our Effort</h3>
</div>
</div>

<div class="h-100 d-flex bg-white justify-content-center align-items-center col-md-12 col-lg-8">
<div class="mx-auto app-login-box col-sm-12 col-md-10 col-lg-9">
{/* <div class="app-logo"><img  class="img-fluid" src={Logo} alt="Logo"></img></div> */}
<h4 class="mb-0">
 <span class="d-block">Welcome back,</span>
<span>Please sign in to your account.</span>
</h4>
<h6 class="mt-3">No account? <a href="./SignUp" class="text-primary">Sign up now</a></h6>
<div class="divider row"></div>
<div>
<form onSubmit={handleLogin}>
<div class="form-row">
<div class="col-md-6">
<div class="position-relative form-group">
<label for="username" class="">Username</label>
<input name="username" value={username} onChange={onChangeUsername} placeholder="Username here..." type="text" className="form-control"/>
</div>
</div>
<div class="col-md-6">
<div class="position-relative form-group">
<label for="password" class="">Password</label>
<input name="password" value={password} onChange={onChangePassword} placeholder="Password here..." type="password" className="form-control"/>
</div>
</div>
</div>
<div class="divider row"></div>
<div class="d-flex align-items-center">
<div class="ml-auto">
<button class="btn btn-dark" style={{"height":"30px"}}>Sign In</button>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
</div>

  );
};

export default Login;