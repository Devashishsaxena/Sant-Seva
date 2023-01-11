import React,{useState} from 'react';
import './NavBar.css';
import { FaBars, FaTimes } from 'react-icons/fa'
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
function NavBar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        }
        else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)
    return (
        <React.Fragment>
           <div className={color?'header header-bg': "header"}>
                <nav className='navbar'>
                    <a href='/home' style={{ color: 'white', margin: '10px', textDecoration: 'none'  }}>
                        <h5 className='text-white'>Sant Seva</h5>
                    </a>
               
               <div className='hamburger' onClick={handleClick}>
                  {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className='nav-item'>
                            <a href="/"  style={{ color: 'white', margin: '10px', textDecoration: 'none'  }} onClick={closeMenu}>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a href="/about" style={{ color: 'white', margin: '10px', textDecoration: 'none' }} onClick={closeMenu}>About Us</a>
                        </li>
                        <li className='nav-item'>
                            <a href="/aasharam" style={{ color: 'white', margin: '10px', textDecoration: 'none' }} onClick={closeMenu}>Asharam List</a>
                        </li>
                        <li className='nav-item'>
                            <a href="/oursant" style={{ color: 'white', margin: '10px', textDecoration: 'none' }} onClick={closeMenu}>Our Sant</a>
                        </li>
                        <li className='nav-item'>
                            <a href="/testinomials" style={{ color: 'white', margin: '10px', textDecoration: 'none' }} onClick={closeMenu}>Testinomials</a>
                        </li>
                        <li className='nav-item'>
                            <a href="/contact" style={{ color: 'white', margin: '10px', textDecoration: 'none' }} onClick={closeMenu}>Contact</a>
                        </li>
                        <li className='nav-item'>
                            <a href="/blog" style={{ color: 'white', margin: '10px', textDecoration: 'none' }} onClick={closeMenu}>Blog</a>
                        </li>
                        <button class='DonateButton'  onClick={closeMenu}>Donate</button>
                </ul>
            </nav>
        </div>
        </React.Fragment>

    )
}
export default NavBar