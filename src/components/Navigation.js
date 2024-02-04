import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Navigation.css";
import { AppConst } from "../AppConst";


export const Navigation = () => {
  return (
    <Navbar expand="lg" className="shadow-sm navbar">
      <Navbar.Brand href="#home" className="font-weight-bold navbar-brand">
        {AppConst.APP_NAME}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
