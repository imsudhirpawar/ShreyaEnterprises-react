import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import logo from "./img/logo.png";
import "./navbar.css";
import { Link } from "react-router-dom";
import { BsFillPersonLinesFill, BsWhatsapp } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";

function BootstrapNavbar() {
  const isMobile = window.innerWidth <= 768;
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar navbar-expand-lg ">
      <Container fluid>
        <Navbar.Brand href="#" className="navbar-brand logo">
          <Link to="/" className="navbar-brand">
            <Image className="imglogo" src={logo} fluid />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler"
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link ">
                Contact Us
              </Link>
            </li>
            {/* <li className="nav-item">
              <a href="tel:9822148658" className=" nav-link ">
                <BiSolidPhoneCall className="fs-5" />
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://api.whatsapp.com/send?phone=8550952588&text=Hi%20there!%20%F0%9F%91%8B%20I'm%20interested%20in%20placing%20an%20order%20for%20the%20Domestic%20Oil%20Press%20and%20Counting%20Machine.%20Can%20you%20assist%20me%20with%20more%20details%3F%20Thanks!%20%F0%9F%9B%92"
                target="blank"
                className=" nav-link "
              >
                <BsWhatsapp className="fs-5" />
              </a>
            </li> */}
          </ul>

          <div className="call d-flex " style={{ marginLeft: "auto" }}>
            <div className="m-1">
              <a
                className="btn btn-outline-success p-2 text-decoration-none"
                href="tel:9822148658"
                style={{ borderRadius: "30px" }}
              >
                <h6 className="m-0">
                  <BiSolidPhoneCall className="fs-3 p-1" />
                </h6>
              </a>
            </div>

            <div className="m-1">
              <a
                className="btn btn-outline-success p-2 text-decoration-none"
                style={{ borderRadius: "30px" }}
                href="https://api.whatsapp.com/send?phone=9822148658&text=Hi%20there!%20%F0%9F%91%8B%20I'm%20interested%20in%20placing%20an%20order%20for%20the%20Domestic%20Oil%20Press%20and%20Counting%20Machine.%20Can%20you%20assist%20me%20with%20more%20details%3F%20Thanks!%20%F0%9F%9B%92"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h6 className="m-0">
                  <BsWhatsapp className="fs-3 p-1" />
                </h6>
              </a>
            </div>

            <div className="m-1">
              <Link to="/login" style={{ marginLeft: "auto" }}>
                <button
                  className="btn btn-outline-success p-2"
                  text-decoration-none
                  style={{ borderRadius: "30px" }}
                >
                  <h6 className="m-0 ">
                    Login
                    <BsFillPersonLinesFill className="fs-3 p-1" />
                  </h6>
                </button>
              </Link>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BootstrapNavbar;

// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Image from 'react-bootstrap/Image';
// import logo from './img/logo.png';
// // import bars from './img/menu.png';
// import './navbar.css';
// import { Link } from 'react-router-dom';
// import Contact from './contactForm';

// function BootstrapNavbar() {
//   return (
//     <Navbar collapseOnSelect expand="lg" className="nav-item  m-0 p-0 pb-3">
//       <Container fluid>
//         <Navbar.Brand href="#home" className="logo">
//           <Image className='imglogo' src={logo} fluid  />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav"  className='custom-toggler'/>
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="ml-auto">
//             <Nav.Link href="/">Home</Nav.Link>
//             <Nav.Link href="/">Product</Nav.Link>
//             <Nav.Link>
//             <Link to="/contact" className='text-decoration-none text-secondary'> Contact Us</Link>
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default BootstrapNavbar;

// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Image from 'react-bootstrap/Image';
// import logo from './img/logo.png';
// import './navbar.css';
// import { Link } from 'react-router-dom';
// // import {CgProfile} from 'react-icons/cg'
// import  {BsFillPersonLinesFill} from 'react-icons/bs';

// function BootstrapNavbar() {
//   const isMobile = window.innerWidth <= 768;
//   return (
//     <Navbar collapseOnSelect expand="lg" className="nav-item m-0 p-0 pb-3">
//       <Container fluid>
//         <Navbar.Brand href="#home" className="logo">
//           <Image className='imglogo' src={logo} fluid />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" className='custom-toggler' />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item">
//               <Link to="/" className='nav-link'>Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/about" className='nav-link'>About us</Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/contact" className='nav-link text-secondary'>Contact Us</Link>
//             </li>

//           </ul>
//           <Link to="/login"  style={{marginLeft:'auto'}} >
//             <button type="button" className="btn btn-outline-success p-2 "text-decoration-none   style={{borderRadius:'30px'}}><h6  className='m-0 '>Login< BsFillPersonLinesFill className='fs-3 p-1'/></h6>

//             </button>
//             </Link>
//         </Navbar.Collapse>

//       </Container>
//     </Navbar>
//   );
// }

// export default BootstrapNavbar;
