import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <Link className="home-link" to="/nasaphoto">
        See into the Stars
      </Link>
    </div>
  );
};
