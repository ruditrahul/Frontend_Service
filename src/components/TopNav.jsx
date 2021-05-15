import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="nav bg-dark d-flix justify-content-between">
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/login">
        Login
      </Link>
      <Link className="nav-link" to="/register">
        Sign Up
      </Link>
    </div>
  );
};

export default TopNav;
