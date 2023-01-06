import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillGooglePlusSquare } from "react-icons/ai";
import { Link } from "react-router-dom";
function Footer() {
    return (<>
        <div class="container-fluid bg-dark text-white pt-5  ">     
                <div class="row text-center">                       
                    <div class="col-md-4">
                        <div>
                            <h4>Sant Seva</h4>
                         
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div >
                            <h4>Contact Us</h4>
                         <p className="text-white"> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div >
                            <h4>Get Social</h4>
                           
                        </div>
                        <div className="text-center">
                            <ul className="list-unstyled d-flex justify-content-center ">
                                <li><a href="#"><BsFacebook className="me-2 fs-4 text-white"/></a></li>
                                <li><a href="#"><BsLinkedin className="me-2 fs-4 text-white"/></a></li>
                                <li><a href="#"><AiFillTwitterSquare className="me-2 fs-3 text-white"/></a></li>
                                <li><a href="#"><AiFillGooglePlusSquare className="me-2 fs-3 text-white"/></a></li>
                            </ul>
                        </div>                          
                    </div>        
                </div>
                <hr/>
                <div class="row">
                    <div class="col-lg-12 col-sm-12 col-xs-12 text-center mb-3 ">
                        <Link className="text-decoration-none text-secondary">Copyright © 2023 Akdesign.</Link>
                    </div>                
                </div>               
            </div>
        
    </>)
}
export default Footer;