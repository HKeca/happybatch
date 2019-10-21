import * as React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <h2>HappyBatch</h2>
        <ul className="links">
          <li>Browse</li>
          <li>Favourites</li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
