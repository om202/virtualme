import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Navigation.css";
import { AppConst } from "../AppConst";


export const Navigation = () => {
  return (
    <Navbar expand="lg" className="shadow-sm navbar fixed-top">
      <Navbar.Brand href="/" className="font-weight-bold navbar-brand">
        <img src="./logo.png" alt="logo" className="brand-logo" />
        {AppConst.APP_NAME}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#">Features</Nav.Link>
          <Nav.Link href="#">Pricing</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
