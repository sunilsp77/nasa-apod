import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <Link className="link" to="/">
          Take me Home
        </Link>
      </ul>
    </div>
  );
};
