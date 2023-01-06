import React from 'react';
// import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Sant1 from '../Navbar/Img/Sant1.jpg';
import Sant2 from '../Navbar/Img/Sant2.jpg';
import Sant3 from '../Navbar/Img/Sant3.jpg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
function NavBar() {
    return (
    
           

       
             <React.Fragment>
             <Navbar bg="dark" expand="lg" className="sticky-top">
                 <Container >
                     <Navbar.Brand to="/home" style={{ color: 'white', margin: '5px', textDecoration: 'none' }} className="">Sant Seva</Navbar.Brand>
                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
                     <Navbar.Collapse id="basic-navbar-nav">
                         <Nav className="ms-auto">
                             <Link to={"/home"} style={{ color: 'white', margin: '10px', textDecoration: 'none' }}>Home</Link>
                             <Link to={"/about"} style={{ color: 'white', margin: '10px', textDecoration: 'none' }}>About Us</Link>
                             <Link to={"/aasharam "} style={{ color: 'white', margin: '10px', textDecoration: 'none' }}>Aasharam List</Link>
                             <Link to={"/oursant"} style={{ color: 'white', margin: '10px', textDecoration: 'none' }}> OurSant</Link>
                             <Link to={"/testinomials"} style={{ color: 'white', margin: '10px', textDecoration: 'none' }}> Testinomials</Link>
                             <Link to={"/contact"} style={{ color: 'white', margin: '10px', textDecoration: 'none' }}>Contact</Link>
                             <Link to={"/blog"} style={{ color: 'white', margin: '10px', textDecoration: 'none' }}>Blog</Link>
                             <Button to="#donate" style={{ color: 'white', margin: '5px', textDecoration: 'none' }}>Donate</Button>
                             
                         </Nav>
                         
                     </Navbar.Collapse>
                 </Container>
                
             </Navbar>
           
            
         </React.Fragment>
           
          

        
         
    )
}
export default NavBar;