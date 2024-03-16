import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import ViewAllTickets from "./screens/ViewAllTickets";
import NewTicket from "./screens/NewTicket";
import ViewAllUsers from "./screens/ViewAllUsers";
import SingleTicket from "./screens/SingleTicket";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/all-tickets" element={<ViewAllTickets />} />
        <Route path="/new-tickets" element={<NewTicket />} />
        <Route path="/all-users" element={<ViewAllUsers />} />
        <Route path="/ticket/:id" element={<SingleTicket />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
