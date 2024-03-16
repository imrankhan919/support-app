import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import { useDispatch, useSelector } from "react-redux";
import { addTicket } from "../features/ticket/ticketSlice";
import { useNavigate } from "react-router-dom";

const NewTicket = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const { isLoading, isError, isSuccess, message, ticket } = useSelector(
    (state) => state.ticket
  );

  const [product, setProduct] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTicket({
        product,
        description,
      })
    );
  };

  useEffect(() => {
    if (ticket && isSuccess) {
      navigate(`/ticket/${ticket._id}`);
    }

    if (isError || message) {
      window.alert(message);
    }
  }, [ticket, isSuccess]);

  if (isLoading) {
    return (
      <div className="container p-5 text-center">
        <h1 className="display-1 text-secondary">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="container p-5">
      <BackButton url={"/"} />
      <div className="card p-3">
        <h1 className="display-6 text-center my-3">Create New Ticket</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={user.name}
            disabled
            className="form-control my-2"
          />
          <input
            type="email"
            value={user.email}
            disabled
            className="form-control my-2"
          />
          <select
            className="form-select my-2"
            onChange={(e) => setProduct(e.target.value)}
          >
            <option selected value="iPhone">
              iPhone
            </option>
            <option value="iPad">iPad</option>
            <option value="iMac">iMac</option>
            <option value="iWatch">iWatch</option>
            <option value="Macbook">Macbook</option>
            <option value="iPod">iPod</option>
          </select>
          <textarea
            placeholder="Enter Description Of your Issue"
            className="form-control"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button className="btn btn-success w-100 my-2">Raise A Ticket</button>
        </form>
      </div>
    </div>
  );
};

export default NewTicket;
