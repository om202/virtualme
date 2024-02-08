import React from "react";
import "./NotFound.css";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    return (
      <div className="not-found-conatiner">
        <i className="bi bi-exclamation-circle-fill display-4"></i>
        <h6>404 - Not Found!</h6>
        <button className="btn btn-primary" onClick={() => navigate('/')}>Home Page</button>
      </div>
    );
};

export default NotFound;