import { NavLink } from "react-router-dom";

const MenuList = () => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      <li className="nav-item">
        <NavLink
          className="nav-link" aria-current="page"
          to="/"
        >Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link" aria-current="page" to="/netflix"
        >
          Netflix
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link" aria-current="page"
          to="/employee-manager"
        >
          Employee Manager App
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link" aria-current="page"
          to="/products"
        >
          Products
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link" aria-current="page"
          to="/todos"
        >
          Todos
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link" aria-current="page"
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link" aria-current="page"
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default MenuList;
