// import React from 'react';

import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';



const NavSection = () => {
  return (

    <div>
      <Navbar bg="success" className="bg-opacity-25" expand="lg">
        <Container >
          <h2 className="me-5">Dish Dazzle</h2>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/" className="text-decoration-none"><Nav.Link >Home</Nav.Link></Link>
             <Link to="/blog" className="text-decoration-none"><Nav.Link>Blog</Nav.Link></Link>




            </Nav>
            <Nav className="ms-auto">
              <div className="h-100 w-100"><FaUserCircle /></div>
              <Link><Button variant="outline-success" className="ms-auto">Login</Button></Link></Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  );
};

export default NavSection;