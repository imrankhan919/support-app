import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <nav className="navbar bg-dark shadow">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">
          Support Desk App
        </Link>
        <span className="float-end">
          {!user ? (
            <>
              <Link to={"/login"} className="btn btn-sm btn-secondary">
                Login
              </Link>
              <Link to={"/login"} className="btn btn-sm btn-secondary mx-2">
                Register
              </Link>
            </>
          ) : (
            <button className="btn btn-sm btn-danger">Logout</button>
          )}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
