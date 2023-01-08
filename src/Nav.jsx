import { Outlet, Link } from "react-router-dom";


function Nav() {
  const style = { color: "white", textDecoration: "none", padding: "5px", textAlign:'center' };


  return (
    <div style={style}>
      <nav>
        <Link style={style} to="/">
          Home
        </Link>
        <Link style={style} to="/about">
          Error 404
        </Link>
        <Link style={style} to="/boundary">
          ErrorBoundary
        </Link>

      </nav>
      <Outlet />
      
    </div>
  );
}
export default Nav;
