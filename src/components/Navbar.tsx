import * as React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
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
      </div>
    );
  }
}

export default Navbar;
