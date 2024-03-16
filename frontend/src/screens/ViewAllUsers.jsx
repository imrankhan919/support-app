import React, { useEffect } from "react";
import UsersRow from "../components/UsersRow";
import BackButton from "../components/BackButton";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../features/admin/adminSlice";

const ViewAllUsers = () => {
  const { users, isLoading } = useSelector((state) => state.admin);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  if (isLoading) {
    return (
      <div className="container p-5">
        <h1 className="text-center text-secondary">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="container p-5">
      <h1 className="display-6 text-center">All Tickets</h1>
      <BackButton url={"/"} />
      <div className="card p-3">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Total Tickets</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UsersRow key={user._id} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAllUsers;
