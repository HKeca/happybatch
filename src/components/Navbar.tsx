import React, { FC } from "react";
import { Link } from "react-router-dom";

const Navbar: FC<{}> = () => (
  <nav className="navbar">
    <h2 className="navbar-header">HappyBatch</h2>
    <ul className="links">
      <li>
        <Link className="navbar-link" to="/">
          Browse
        </Link>
      </li>
      <li>
        <Link className="navbar-link" to="/favourites">
          Favourites
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
