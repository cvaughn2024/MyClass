import { Outlet, Link } from "react-router-dom";

const Navbar= () => {
  return (
    <>
      <nav>
     
       
            <div id="navtext">
            <a><Link to="/">Dashboard</Link></a>
         
            <a><Link to="/courses">Courses</Link></a>
          
            <a><Link to="/posts">Posts</Link></a>

            <a><Link to="/create">Create</Link></a>
          
          
           <a><Link to="/account">Account</Link></a>

            </div>
         
      </nav>

      <Outlet />
    </>
  )
};

export default Navbar;