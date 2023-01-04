import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <>
            <div style={{ display: 'flex', gap: '12', padding: '24px', backgroundColor: 'rgb(42 65 96)', borderBottom: '1px solid red', marginBottom: '8', color: 'white' }}>
                <Link to={"/home"} style={{ color: 'white', margin: '5px',textDecoration:'none' }}>Home</Link>
                <Link to={"/about"} style={{ color: 'white', margin: '5px', textDecoration: 'none' }}>About Us</Link>
                <Link to={"/service"} style={{ color: 'white', margin: '5px', textDecoration: 'none' }}>Services</Link>
                <Link to={"/aasharam"} style={{ color: 'white', margin: '5px', textDecoration: 'none' }}>Aasharam List</Link>
                <Link to={"/contact"} style={{ color: 'white', margin: '5px', textDecoration: 'none' }}>Contact</Link>
                <Link to={"/blog"} style={{ color: 'white', margin: '5px', textDecoration: 'none' }}>Blog</Link>

            </div>
        </>
    )
}
export default NavBar;