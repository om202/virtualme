import React from "react";
import "./BackNav.css";

const BackNav = ({clickFn}) => {
  return (
    <button className="btn back-nav" onClick={clickFn}>
      <i className="bi bi-list mr-2"></i> View All
    </button>
  );
};

export default BackNav;
