import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const { user } = useSelector((state) => state.auth);

  let isAdmin = !user ? false : user.isAdmin;

  return (
    <div className="container p-5">
      <div className="card p-3">
        <h1 className="display-6 text-center">Welcome {user?.name}</h1>

        <span className="my-3">
          {isAdmin ? (
            <>
              <Link
                to={"/all-users"}
                className="btn btn-outline-dark w-100 my-2"
              >
                View All Users
              </Link>
              <Link
                to={"/all-tickets"}
                className="btn btn-outline-dark w-100 my-2"
              >
                View All Tickets
              </Link>
            </>
          ) : (
            <>
              <Link
                to={"/new-tickets"}
                className="btn btn-outline-dark w-100 my-2"
              >
                Create New Ticket
              </Link>
              <Link
                to={"/all-tickets"}
                className="btn btn-outline-dark w-100 my-2"
              >
                View All Ticket
              </Link>
            </>
          )}
        </span>
      </div>
    </div>
  );
};

export default Home;
