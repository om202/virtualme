import React from "react";
import "./BackNav.css";
import { useNavigate } from "react-router-dom";

const BackNav = () => {
  const navigate = useNavigate();
  return (
    <div className="back-nav">
      <button className="btn button-back-nav" onClick={() => navigate("/")}>
        <i className="bi bi-list mr-2"></i> View All
      </button>
    </div>
  );
};

export default BackNav;
