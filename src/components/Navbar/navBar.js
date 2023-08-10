import React,{useState} from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'

function NavBar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 10) {
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
                    <Link to={"/home"} style={{ color: 'white', margin: '10px', textDecoration: 'none'  }}>
                        <h5 className='text-white'>Sant Seva</h5>
                    </Link>
               
               <div className='hamburger' onClick={handleClick}>
                  {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className='nav-item'>
                            <Link to ={"/"}  style={{ color: 'white', margin: '10px', textDecoration: 'none'  }} onClick={closeMenu}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={"/about"} style={{ color: 'white', margin: '10px', textDecoration: 'none' }} onClick={closeMenu}>About Us</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={"/aasharam"} style={{ color: 'white', margin: '10px', textDecoration: 'none' }} onClick={closeMenu}>Asharam List</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={"/oursant"} style={{ color: 'white', margin: '10px', textDecoration: 'none' }} onClick={closeMenu}>Our Sant</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={"/testinomials"} style={{ color: 'white', margin: '10px', textDecoration: 'none' }} onClick={closeMenu}>Testinomials</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={"/contact" }style={{ color: 'white', margin: '10px', textDecoration: 'none' }} onClick={closeMenu}>Contact</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={"/blog"} style={{ color: 'white', margin: '10px', textDecoration: 'none' }} onClick={closeMenu}>Blog</Link>
                        </li>
                        <div className='mt-3'>
                            <Link to={'/'} className='linkButton'>Donate</Link>
                        </div>
                </ul>
            </nav>
        </div>
        </React.Fragment>

          
  );
}
export default NavBar;
