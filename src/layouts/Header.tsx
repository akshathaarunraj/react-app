import { Link } from "react-router-dom";
import MenuList from "./MenuList";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

function Header() {
  const appName = "React Bosch App";
  const cartContext = useContext(CartContext);
  console.log(cartContext);
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {appName}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <MenuList />
            <button className="btn btn-danger me-2">
              Cart ({cartContext?.cartItems.length})
            </button>
            <Link className="btn btn-warning me-2" to={'/signUp'}>Sign UP</Link>
            <Link className="btn btn-warning" to={'/auth/login'}>Login</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
