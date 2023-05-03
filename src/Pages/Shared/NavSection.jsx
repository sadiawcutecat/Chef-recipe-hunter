// import React from 'react';

import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';



const NavSection = () => {
  return (

    <div>
      <Navbar bg="success" className="bg-opacity-25" expand="lg">
        <Container >
          <h2 className="me-5 text-success">Dish Dazzle</h2>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-4">
              <Link to="/" className="text-decoration-none text-dark">Home</Link>
             <Link to="/blog" className="text-decoration-none text-dark">Blog</Link>




            </Nav>
            <Nav className="ms-auto">
              <FaUserCircle style={{ fontSize: '2rem' }}/>
              <Link><Button variant="outline-success" className="ms-3">Login</Button></Link></Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  );
};

export default NavSection;