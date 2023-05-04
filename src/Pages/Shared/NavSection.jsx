// import React from 'react';

import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';
import './NavSection.css'
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';
// import { useContext } from "react";
// import AuthProvider from "../../Provider/AuthProvider";




const NavSection = () => {
  // const user = useContext(AuthProvider);
  // const [user] = useAuthState(auth);
  // console.log(user);
  // const {displayName}= user;
  // console.log(displayName);
  return (

    <div>
      <Navbar bg="success" className="bg-opacity-25" expand="lg">
        <Container >
          <h2 className="me-5 text-success">Dish Dazzle</h2>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-4">
            <NavLink to="/" className="text-decoration-none text-dark">Home</NavLink>
            <NavLink to="/blog" className="text-decoration-none text-dark">Blog</NavLink>
             




            </Nav>

            <Nav className="ms-auto">
              
              <FaUserCircle style={{ fontSize: '2rem' }} />
            </Nav>


            <Nav>
              <Link to="/login"><Button variant="outline-success" className="ms-3">sign In</Button></Link>
              {/* <Link to="/login"><Button variant="outline-success" className="ms-3">LogOut</Button></Link> */}
            </Nav>


          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  );
};

export default NavSection;