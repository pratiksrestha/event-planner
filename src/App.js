import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AuthService from "./Services/auth-service";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import BoardUser from "./Components/BoardUser";
import AdminBoard from "./Components/AdminBoard";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Navbar from "./Components/Navbar";
import Todo from "./Components/ToDo/todo";
import Gallery from "./Components/TabMenu/Gallery";
// import Calender from "./Components/Calender/Calender";
import Calender from "./page/Calender";
import SignUp from "./Components/SignUp";
import Testimonials from "./Components/Testimonials";
import Temp from "./Components/TabMenu/Temp";
import AddEvent from "./Components/TabMenu/AddEvent"
import moment from "moment";
import Booking from "./Components/Booking";
import Register from "./Components/Register";
import AddBooking from "./Components/AddBooking"
import AdminGallery from "./Components/TabMenu/AdminGalary";
import UpdateEvent from "./Components/UpdateEvent";
const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showUserBoard, setShowUserBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
      setShowUserBoard(user.roles.includes("ROLE_USER"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <div>
      <Navbar></Navbar>      
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/user" element={<BoardUser/>} />
        <Route path="/admin" element={<AdminBoard/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/todo" element={<Todo/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/calender" element={<Calender/>} />
        <Route path="/year/:year/month/:month" element={ <Calender /> } />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/testimonials" element={<Testimonials/>} />
        {/* <Route path="/temp" element={<Temp/>} /> */}
        <Route path="/addevent" element={<AddEvent/>} />
        <Route path="/booking" element={<Booking/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/addbooking" element={<AddBooking/>} />
        <Route path="/addbooking" element={<AddBooking/>} />
        <Route path="/temp/:id" element={<Temp/>} />
        <Route path="/admingallery" element={<AdminGallery/>} />
        <Route path="/updateevent/:id" element={<UpdateEvent/>} />




      </Routes>
    </div>
  );
};

export default App;