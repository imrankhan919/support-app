import React from "react";
import { Link } from "react-router-dom";

const TicketRow = ({ ticket }) => {
  return (
    <tr>
      <td>{new Date(ticket.createdAt).toDateString("en-IN")}</td>
      <td>{ticket?.product}</td>
      <td>
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
      </td>
      <td>
        <Link to={`/ticket/${ticket._id}`} className="btn btn-sm btn-dark">
          View
        </Link>
      </td>
    </tr>
  );
};

export default TicketRow;
