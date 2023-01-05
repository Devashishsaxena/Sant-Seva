import React from "react";
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
function ContanctUs() {
    return (<>
        <h3 className="text-center">ContanctUs Page</h3>
        <Nav.Link>
            <div>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <div className="dropdown linkNavs">
                    <Nav.Link className="dropbtn ms-3">STRATEGY</Nav.Link>
                    <div className="dropdown-content bg-primary">
                            <span >
                            <Link className='text-decoration-none text-white'>- Market Data</Link>
                            </span>                                                
                            <span >
                                <Link className='text-decoration-none text-white'>- Trade Signal</Link>
                            </span>
                            <span >
                                <Link className='text-decoration-none text-white'>- Strategies</Link>
                            </span>
                    </div>
                </div>
            </div>
        </Nav.Link>
    </>)
}
export default ContanctUs;