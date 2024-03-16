import { Link } from "react-router-dom";

const BackButton = ({ url }) => {
  return (
    <Link to={url} className="btn btn-dark my-3">
      Back
    </Link>
  );
};

export default BackButton;
