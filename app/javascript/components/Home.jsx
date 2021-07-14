import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">National Park Hub</h1>
        <p className="lead">
          You're quick-stop for National Park and Monument information.
        </p>
        <hr className="my-4" />
        <Link
          to="/parks"
          className="btn btn-lg custom-button"
          role="button"
        >
          View Parks
        </Link>
      </div>
    </div>
  </div>
);