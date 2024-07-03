import React from "react";
import { Link, Route } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

export const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streamy
      </Link>
      <div className="right menu">
        <Link to="/streams/show" className="item">
          All Streams
        </Link>
        <GoogleAuth></GoogleAuth>
      </div>
    </div>
  );
};
