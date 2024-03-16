import React, { useEffect } from "react";
import BackButton from "../components/BackButton";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTicket } from "../features/ticket/ticketSlice";

const SingleTicket = () => {
  const { ticket } = useSelector((state) => state.ticket);

  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getTicket(params.id));
  }, []);

  return (
    <div className="container p-5">
      <BackButton url={"/all-tickets"} />
      <div className="card p-5">
        <h5>Product Name : {ticket.product}</h5>
        <h5>
          Status :
          <span
            className={
              ticket.status === "open"
                ? "badge rounded-pill text-bg-success"
                : ticket.status === "new"
                ? "badge rounded-pill text-bg-primary"
                : "badge rounded-pill text-bg-danger"
            }
          >
            {ticket.status}
          </span>
        </h5>
        <h5 className="text-secondary">
          Date : {new Date(ticket.createdAt).toDateString("en-IN")}
        </h5>
        <p className="text-secondary">Description : {ticket.description}</p>
      </div>
      <button className="btn btn-dark my-3">Add Note</button>
      <h4>Notes :</h4>
      <ul className="my-3 list-group">
        <li className="list-group-item bg-secondary">
          <p className="text-light">User : Please Tell Me Status</p>
        </li>
        <li className="list-group-item">
          <p className="text-secondary">Admin : Sabar Karo!!</p>
        </li>
      </ul>
      {ticket.status === "closed" ? (
        <button className="btn btn-danger w-100" disabled>
          Close Ticket
        </button>
      ) : (
        <button className="btn btn-danger w-100">Close Ticket</button>
      )}
    </div>
  );
};

export default SingleTicket;
