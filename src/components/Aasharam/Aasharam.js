import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { FaLongArrowAltRight } from "react-icons/fa";
import Footer from '../Footer/Footer'
import Aasharam1 from "../Assests/Img/Aasharam1.jpg.jpg";
import "./Aasharam.css"
function Aasharam(){
return(<>
    <div className="bg-dark pt-5 pb-5">
     <section className="page-header page-header-modern bg-color-quaternary page-header-md custom-page-header">
					<div className="container">
						<div className="row mt-3">
							<div className="col-md-8 order-2 order-md-1 align-self-center p-static">
								<h2 className="text-white">- Expertise</h2>
								<span className="d-block text-4 text-white">What We do</span>
							</div>
							<div className="col-md-4 order-1 order-md-2 align-self-center  ">
								<ul className="breadcrumb d-flex justify-content-end  ">
									<li className=" me-end "><a href="#" className="text-underline-hover text-white me-2" >Home <AiOutlineRight /></a></li>
                      
									<li className="active text-white me-5 ">Aasharam list</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
    </div> 
    <div className=" container mt-5">
                        <div className="row">
                            <div className="col-lg-2 col-md-3 col-sm-12 text-center">
                                <img src={Aasharam1} className='ourSanta'/>
                            </div>
                            <div className="col-lg-10 col-md-12  mt-2 text-start">
                                <h4 className="">Corporate Finance</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu semper tellus, at condimentum tortor. Curabitur pulvinar orci nunc, at facilisis nisl vehicula tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce eget est viverra, venenatis.   </p>
                                <p className="text-underline-hover text-success">Read More <FaLongArrowAltRight/></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-2 col-md-3 col-sm-12 text-center">
                                <img src={Aasharam1} className='ourSanta'/>
                            </div>
                            <div className="col-lg-10 col-md-12  mt-2 text-start">
                                <h4 className="">Corporate Finance</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu semper tellus, at condimentum tortor. Curabitur pulvinar orci nunc, at facilisis nisl vehicula tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce eget est viverra, venenatis.   </p>
                                <p className="text-underline-hover text-success">Read More <FaLongArrowAltRight/></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-2 col-md-3 col-sm-12 text-center">
                                <img src={Aasharam1} className='ourSanta'/>
                            </div>
                            <div className="col-lg-10 col-md-12  mt-2 text-start">
                                <h4 className="">Corporate Finance</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu semper tellus, at condimentum tortor. Curabitur pulvinar orci nunc, at facilisis nisl vehicula tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce eget est viverra, venenatis.   </p>
                                <p className="text-underline-hover text-success">Read More <FaLongArrowAltRight/></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-2 col-md-3 col-sm-12 text-center">
                                <img src={Aasharam1} className='ourSanta'/>
                            </div>
                            <div className="col-lg-10 col-md-12  mt-2 text-start">
                                <h4 className="">Corporate Finance</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu semper tellus, at condimentum tortor. Curabitur pulvinar orci nunc, at facilisis nisl vehicula tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce eget est viverra, venenatis.   </p>
                                <p className="text-underline-hover text-success">Read More <FaLongArrowAltRight/></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-2 col-md-3 col-sm-12 text-center">
                                <img src={Aasharam1} className='ourSanta'/>
                            </div>
                            <div className="col-lg-10 col-md-12  mt-2 text-start">
                                <h4 className="">Corporate Finance</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu semper tellus, at condimentum tortor. Curabitur pulvinar orci nunc, at facilisis nisl vehicula tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce eget est viverra, venenatis.   </p>
                                <p className="text-underline-hover text-success">Read More <FaLongArrowAltRight/></p>
                            </div>
                        </div>
                </div>



                
</>)
}
export default Aasharam;