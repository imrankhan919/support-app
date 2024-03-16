import React, { useEffect } from "react";
import TicketRow from "../components/TicketRow";
import BackButton from "../components/BackButton";
import { useDispatch, useSelector } from "react-redux";
import { getTickets } from "../features/ticket/ticketSlice";

const ViewAllTickets = () => {
  const dispatch = useDispatch();

  const { tickets, isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.ticket
  );

  useEffect(() => {
    dispatch(getTickets());
  }, []);

  return (
    <div className="container p-5">
      <h1 className="display-6 text-center">All Tickets</h1>
      <BackButton url={"/"} />
      <div className="card p-3">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Product</th>
              <th scope="col">Status</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <TicketRow ticket={ticket} key={ticket._id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAllTickets;
