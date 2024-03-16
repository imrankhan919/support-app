import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="container p-5">
      <div className="card p-3">
        <h1 className="display-6 text-center">Login Here</h1>
        <form className="my-3" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Email"
            className="form-control my-2"
            onChange={handleChange}
            value={email}
            name="email"
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="form-control"
            onChange={handleChange}
            value={password}
            name="password"
          />
          <button className="my-3 btn btn-success w-100">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
