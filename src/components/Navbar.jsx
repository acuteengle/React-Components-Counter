import React from "react";
const Navbar = ({ totalCounters, totalItems }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Non-Zero Counters:{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
        <br />
        <span>
          Total items:{" "}
          <span className="badge badge-pill badge-secondary">{totalItems}</span>
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
