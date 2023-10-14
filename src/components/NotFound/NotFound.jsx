import React from "react";
import style from "./NotFound.module.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center flex-column">
        <img src="./images/notFound.jpg" className="w-25" alt="Lost Person Image" />
        <h2 className="text-yellow">Are you lost?</h2>
        <p className="text-white">
          Go Back{" "}
          <Link className="btn btn-dark" to="/">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
}
