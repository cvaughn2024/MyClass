import { Outlet, Link } from "react-router-dom";

const Navbar= () => {
  return (
    <>
      <nav>
        <ul>

        <li>
            <Link to="/">Dashboard</Link>
          </li>
        <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          
          <li>
            <Link to="/create">Create</Link>
          </li>
          <li>
            <Link to="/progress">Progress</Link>
          </li>
          <li>
            <Link to="/social_hub">Social Hub</Link>
          </li>
          <li>
            <Link to="/wallet">Wallet</Link>
          </li>

          <li>
            <Link to="/account">Account</Link>
          </li>
          
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Navbar;