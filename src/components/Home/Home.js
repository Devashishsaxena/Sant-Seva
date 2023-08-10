import React, { useState } from 'react'
import './Home.css';
import temple1 from '../Assests/Img/temple1.jpg';
import temple2 from '../Assests/Img/temple2.jpg';
import Aasharam1 from '../Assests/Img/Aasharam1.jpg.jpg';
import Aasharam2 from '../Assests/Img/Aasharam2.jpg.jpg';
import Temples1 from '../Assests/Img/Temples1.jpg';
import Temples2 from '../Assests/Img/Temples2.jpg';
import { FaGreaterThan } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import muni1 from "../Assests/Img/muni1.jpg";
import muni2 from "../Assests/Img/muni2.jpg";
import Card from 'react-bootstrap/Card';
import { Col, Row } from "react-bootstrap";

function Home() {
    return (
        <React.Fragment>
            <div className='main-slider'>
            <Carousel className='text-white' fade interval={3000} style={{ opacity: "0.9" }}>
                <Carousel.Item  >
                    <img
                        className="d-block"
                        style={{ width: '100%', height: "100vh" }}
                        src={temple1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <hr />
                                    <h3 className='d-flex justify-content-start align-items-start'>Get your <br />
                                        Free Consultation</h3>
                                    <div className='d-flex justify-content-start align-items-start mt-5'>
                                        <Link to='/about' className='linkButton'>GET STARTED</Link>
                                    </div>
                                    <hr />
                                </div>
                                <div className='row'>
                                    <div className="col-md-6">
                                        <div className='d-flex justify-content-start align-items-start'>
                                            <h1 className='Font-Carousel'>- Are you looking for a
                                                <br />
                                                Business Plan Consultant?
                                            </h1>
                                        </div>
                                        <div className='d-flex justify-content-start align-items-start'>
                                            <h6 className='Font-Schedule'>Schedule your company strategy right session now</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 d-flex flex-column justify-content-end align-items-end'>
                                        <div className='d-flex'>
                                            <div className='d-flex mx-5'>
                                                <span className='vertical'></span>
                                                <div>
                                                    <h5 className=" mx-2" style={{ color: "#4DBB6D" }}>Call US Now</h5>
                                                        <p className='mail'>+001 1230 4567</p>
                                                </div>
                                            </div>
                                            <div className='d-flex '>
                                                <span className='vertical'></span>
                                                <div>
                                                    <h5 className=" mx-2" style={{ color: "#4DBB6D" }}>Email Us Now</h5>
                                                        <p className='Mail-m'>mail@example.com</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img

                        className="d-block"
                        style={{ width: '100%', height: "100vh" }}
                        src={temple2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div className='container'>
                            <div className='row '>
                                <div className='col-md-6 '>
                                    <hr />
                                    <h3 className='d-flex justify-content-start align-items-start Solution' >Solutionsfor <br />
                                        Pro Business Plan</h3>
                                    <div className='d-flex justify-content-start align-items-start mt-5'>
                                        <Link to='/about' className='linkButton'>GET STARTED</Link>
                                    </div>
                                    <hr />
                                </div>
                                <div className='row'>
                                    <div className="col-md-6 ">
                                        <div className='d-flex justify-content-start align-items-start'>
                                            <h1 className='Font-Carousel'>- Are you looking for a
                                                <br />
                                                Business Plan Consultant?
                                            </h1>
                                        </div>
                                        <div className='d-flex justify-content-start align-items-start'>
                                            <h6 className='Font-Schedule'>Schedule your company strategy right session now</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6  d-flex flex-column justify-content-end align-items-end'>
                                        <div className='d-flex'>
                                            <div className='d-flex mx-5'>
                                                <span className='vertical'></span>
                                                <div>
                                                    <h5 className=" mx-2" style={{ color: "#4DBB6D" }}>Call US Now</h5>
                                                        <p className='mail'>+001 1230 4567</p>
                                                </div>
                                            </div>
                                            <div className='d-flex '>
                                                <span className='vertical'></span>
                                                <div>
                                                    <h5 className=" mx-2" style={{ color: "#4DBB6D" }}>Email Us Now</h5>
                                                        <p className='Mail-m'>mail@example.com</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>










            <div className='mob-main-slider'>
            <Carousel fade interval={3000} style={{ opacity: "0.9" }}>
                <Carousel.Item  >
                    <img
                        className="d-block"
                        style={{ width: '100%', height: "100vh" }}
                        src={temple1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-6'>
                                        <h3 className='d-flex justify-content-start align-items-start Solution'>Get your <br />
                                        Free Consultation</h3>
                                    <div className='d-flex justify-content-start align-items-start mt-5'>
                                        <Link to='/about' className='linkButton'>GET STARTED</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                    </Carousel.Item>
                <Carousel.Item>
                    <img

                        className="d-block"
                        style={{ width: '100%', height: "100vh" }}
                        src={temple2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div className='container'>
                            <div className='row '>
                                <div className='col-6 '>
                                        <h3 className='d-flex justify-content-start align-items-start Solution'>Solutionsfor <br />
                                        Pro Business Plan</h3>
                                    <div className='d-flex justify-content-start align-items-start mt-5'>
                                        <Link to='/about' className='linkButton'>GET STARTED</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
                <div className='container-fluid'>
                <div className='row bg-black'>
                    <div className="col-md-6">
                        <div className='d-flex justify-content-start align-items-start'>
                            <h1 className='Font-Carousel'>- Are you looking for a
                                <br />
                                Business Plan Consultant?
                            </h1>
                        </div>
                        <div className='d-flex justify-content-start align-items-start'>
                            <h6 className='Font-Schedule'>Schedule your company strategy right session now</h6>
                        </div>
                    </div>
                    <div className='col-md-6 '>
                        <div className='d-flex'>
                            <div className='d-flex mx-5'>
                                <span className='vertical'></span>
                                <div>
                                    <h5 className="mx-2" style={{ color: "#4DBB6D" }}>Call US Now</h5>
                                    <p className='mail'>+001 1230 4567</p>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <span className='vertical'></span>
                                <div>
                                    <h5 className=" mx-2" style={{ color: "#4DBB6D" }}>Email Us Now</h5>
                                    <p className='Mail-m'>mail@example.com</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    </div>
                </div>
            </div>




            <div className='mob-Sub-slider'>
            <Carousel fade interval={3000} style={{ opacity: "0.9" }}>
                <Carousel.Item  >
                    <img
                        className="d-block"
                        style={{ width: '100%', height: "100vh" }}
                        src={temple1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-6'>
                                        <h3 className='d-flex justify-content-start align-items-start Solution'>Get your <br />
                                        Free Consultation</h3>
                                    <div className='d-flex justify-content-start align-items-start mt-5'>
                                        <Link to='/about' className='linkButton'>GET STARTED</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                    </Carousel.Item>
                <Carousel.Item>
                    <img

                        className="d-block"
                        style={{ width: '100%', height: "100vh" }}
                        src={temple2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div className='container'>
                            <div className='row '>
                                <div className='col-6 '>
                                    <h3 className='d-flex justify-content-start align-items-start'>Solutionsfor <br />
                                        Pro Business Plan</h3>
                                    <div className='d-flex justify-content-start align-items-start mt-5'>
                                        <Link to='/about' className='linkButton'>GET STARTED</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
                <div className='container'>
                <div className='row bg-black '  >
                    <div className="col-md-6">
                        <div className='d-flex justify-content-start align-items-start'>
                            <h1 className='Font-Carousel'>- Are you looking for a
                                <br />
                                Business Plan Consultant?
                            </h1>
                        </div>
                        <div className='d-flex justify-content-start align-items-start'>
                            <h6 className='Font-Schedule'>Schedule your company strategy right session now</h6>
                        </div>
                    </div>
                    <div className='col-12 '>
                        <div className='call-us'>
                            <div className='d-flex mx-5'>
                                <span className='vertical'></span>
                                <div className='d-flex flex-column'>
                                    <h5 className="mx-2" style={{ color: "#4DBB6D" }}>Call US Now</h5>
                                    <p className='mail'>+001 1230 4567</p>
                                </div>
                            </div>
                            <div className='d-flex mx-5'>
                                <span className='vertical'></span>
                                <div className='d-flex flex-column'>
                                    <h5 className=" mx-2" style={{ color: "#4DBB6D" }}>Email Us Now</h5>
                                    <p className='Mail-m'>mail@example.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    </div>
                </div>
            </div>








            <div className='container mt-5'>
                <div className='row'>
                    <div className='mt-5'>
                        <h1 className='d-flex justify-content-center'>
                            About Us
                        </h1>
                        <p className='mt-5'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse quisquam beatae, debitis nisi quod nam architecto unde non, quibusdam in corporis corrupti. Nostrum, accusamus adipisci voluptates facilis dolorum velit tempora molestias voluptatibus laborum beatae, necessitatibus dolores, tempore assumenda iste quo quis nesciunt. Exercitationem voluptas eligendi consequuntur iusto sint at harum eum. Explicabo quisquam aliquam non quis assumenda, sint quos iusto, neque laboriosam quo minima aut amet culpa, ex dolore quidem accusantium odit. Quaerat suscipit distinctio fugiat repellendus ea reiciendis quisquam, quo odio sunt dignissimos aperiam nihil ipsa nesciunt perspiciatis eos facilis minus. Eius delectus exercitationem voluptatem repellendus accusamus laboriosam consectetur.
                        </p>
                        <div className='d-flex flex-direction-column certified'>
                            <div className='col-6'>
                                <ul>
                                    <li className='breadcrumb'>
                                        <span>{<FaGreaterThan className='FaGreaterThan ' />}  Certified Professionals </span>
                                    </li>
                                    <li className='breadcrumb mt-2'>
                                        <span>{<FaGreaterThan className='FaGreaterThan' />} Former Chief Executives</span>
                                    </li>
                                    <li className='breadcrumb mt-2'>
                                        <span>{<FaGreaterThan className='FaGreaterThan' />} Real Estate Professionals </span>
                                    </li>
                                </ul>

                            </div>
                            <div className='col-6'>
                                <ul>
                                    <li className='breadcrumb'>

                                        <span>{<FaGreaterThan className='FaGreaterThan' />} Nobel Laureate Economists </span>
                                    </li>
                                    <li className='breadcrumb mt-2'>
                                        <span>{<FaGreaterThan className='FaGreaterThan' />} Former Political Leaders</span>
                                    </li>
                                    <li className='breadcrumb mt-2'>
                                        <span>{<FaGreaterThan className='FaGreaterThan' />} Chartered Financial Analysts</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='d-flex justify-content-center align-items-center mt-5'>
                <Link to='/about' className='linkTag'>Read More</Link>
            </div>
            <div className='container-fluid mt-5' style={{ backgroundColor: "#EEF4F2" }}>
                <div className='row'>
                    <div className='mt-5 '>
                        <h1 className='d-flex justify-content-center'>Ashram List</h1>
                    </div>
                </div>
                <div className="row d-flex justify-content-evenly mt-5">
                    <div className="col-lg-4 col-md-12 col-sm-12 mt-2">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className='AshramList row'>
                                    <div className="col-lg-5 col-md-5 col-sm-5 ourSanta">
                                        <img src={temple1} />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 text-center mt-3">
                                        <h4>Corporate Finance</h4>
                                        <p>Lorem ipsum, dolor sit amet</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="col-lg-4 col-md-12 mt-2">
                        <div className="row d-flex justify-content-center aligns-center">
                            <div className='AshramList row'>
                                <div className="col-lg-5 col-md-5 ourSanta">
                                    <img src={temple2} />
                                </div>
                                <div className="col-lg-6 col-md-6 text-center mt-3">
                                    <h4>Corp Restructuring</h4>
                                    <p>Lorem ipsum, dolor sit amet </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12  mt-2">
                        <div className="row d-flex justify-content-center aligns-center">
                            <div className='AshramList row'>
                                <div className="col-lg-5 col-md-5 col-sm-5 ourSanta">
                                    <img src={temple1} />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 text-center mt-3">
                                    <h4>Economic Consulting</h4>
                                    <p>Lorem ipsum, dolor sit amet</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-evenly mt-3">
                    <div className="col-lg-4 col-md-12 col-sm-12 ">
                        <div className="row d-flex justify-content-center aligns-center">
                            <div className='AshramList row'>
                                <div className="col-lg-5 col-md-5 col-sm-5 ourSanta">
                                    <img src={temple1} />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 text-center mt-3">
                                    <h4>Litigation Consulting</h4>
                                    <p>Lorem ipsum, dolor sit amet </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 ">
                        <div className="row d-flex justify-content-center aligns-center">
                            <div className='AshramList row'>
                                <div className="col-lg-5 col-md-5 col-sm-5 ourSanta">
                                    <img src={temple2} />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 text-center mt-3">
                                    <h4>Strategic Consulting</h4>
                                    <p>Lorem ipsum, dolor sit amet </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 ">
                        <div className="row d-flex justify-content-center aligns-center">
                            <div className='AshramList row'>
                                <div className="col-lg-5 col-md-5 col-sm-5 ourSanta">
                                    <img src={temple1} />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 text-center mt-3">
                                    <h4>Tech Finance</h4>
                                    <p>Lorem ipsum, dolor sit amet </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='d-flex justify-content-center align-items-center mt-3'>
                    <Link to='/aasharam' className='linkTag'>View All</Link>
                </div>
            </div>








<div className='mt-5 '>
            <div className='oursant'>
                <div className='d-flex'>
                    {/* <p className="fs-1 text-dark mx-2">_</p> */}
                    <h1 className='mt-2'>Our-Sant</h1>
                </div>
                <div className='large-slider'>
                    <Carousel className='position-sticky' variant='dark' fade style={{ opicity: "0.4" }}>
                        <Carousel.Item>
                            <div>
                                <div className='d-flex'>
                                        <div className='col-2 Corprate'>
                                            <div className='Corprate-Img'>
                                                <img  className='corprate-Img-2' src={Temples1} style={{ width: '14rem' }} />
                                            </div>
                                        <div className='GreenEffect'>
                                            <h5 className='Font-oursant'>Corpate Finance</h5>
                                            <div>
                                                <div className="d-flex justify-content-between">
                                                    <h6 className='Font-oursant-ok'>Okler</h6>
                                                    <BsArrowRight className='oursant-icon' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                        <div className='col-2 Corprate'>
                                            <div className='Corprate-Img'>
                                                <img className='corprate-Img-2' src={Aasharam1} style={{ width: '14rem' }} />
                                             </div>
                                        <div className='GreenEffect'>
                                            <h5 className='Font-oursant'>Corprate Restructuring</h5>
                                            <div className="d-flex justify-content-between">
                                                <h6 className='Font-oursant-ok'>Envato</h6>
                                                <BsArrowRight className='oursant-icon' />
                                            </div>
                                        </div>
                                    </div>
                                        <div className='col-2 Corprate'>
                                            <div   className='Corprate-Img'>
                                                <img className='corprate-Img-2'  src={Temples2} style={{ width: '14rem' }} />
                                                </div>
                                        <div className='GreenEffect'>
                                            <h5 className='Font-oursant'>Economic Consulting</h5>
                                            <div className="d-flex justify-content-between">
                                                <h6 className='Font-oursant-ok'>Porto</h6>
                                                <BsArrowRight className='oursant-icon' />
                                            </div>
                                        </div>
                                    </div>
                                        <div className='col-2 Corprate'>
                                            <div  className='Corprate-Img'>
                                                <img className='corprate-Img-2' src={Aasharam2} style={{ width: '14rem' }} />
                                                </div>
                                        <div className='GreenEffect'>
                                            <h5 className='Font-oursant'>Litigation Consulting</h5>
                                            <div className="d-flex justify-content-between">
                                                <h6 className='Font-oursant-ok'>GetCustom</h6>
                                                <BsArrowRight className='oursant-icon' />
                                            </div>
                                        </div>
                                    </div>
                                        <div className='col-2 Corprate'>
                                            <div className='Corprate-Img'>
                                                <img className='corprate-Img-2' src={Temples1} style={{ width: '14rem' }} />
                                                </div>
                                        <div className='GreenEffect'>
                                            <h5 className='Font-oursant'>Strategic Consulting</h5>

                                            <div className="d-flex justify-content-between">
                                                <h6 className='Font-oursant-ok'>jet Orange</h6>
                                                <BsArrowRight className='oursant-icon' />
                                            </div>
                                        </div>
                                    </div>

                                        <div className='col-2 Corprate'>
                                            <div className='Corprate-Img'>
                                                <img className='corprate-Img-2' src={Aasharam1} style={{ width: '14rem' }} />
                                                </div>
                                        <div className='GreenEffect'>
                                            <h5 className='Font-oursant'>Tech Finance</h5>
                                            <div className="d-flex justify-content-between">
                                                <h6 className='Font-oursant-ok'>Paradox</h6>
                                                <BsArrowRight className='oursant-icon' />
                                            </div>
                                        </div>
                                    </div>
                                        <div className='col-2 Corprate'>
                                            <div className='Corprate-Img'>
                                                <img className='corprate-Img-2' src={Temples2} style={{ width: '14rem' }} />
                                                </div>
                                        <div className='GreenEffect'>
                                            <h5 className='Font-oursant'>Brand Consulting</h5>
                                            <div className="d-flex justify-content-between">
                                                <h6 className='Font-oursant-ok'>iMessenger</h6>
                                                <BsArrowRight className='oursant-icon' />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item >
                            <div>
                                <div className='d-flex'>
                                        <div className='col-2 Corprate'>
                                            <div className='Corprate-Img'>
                                                <img className='corprate-Img-2' src={Aasharam2} style={{ width: '14rem' }} />
                                                </div>
                                        <div className='GreenEffect'>
                                            <h5 className='Font-oursant'>Tech  Consulting</h5>
                                            <div className="d-flex justify-content-between">
                                                <h6 className='Font-oursant-ok'>Theme Forest</h6>
                                                <BsArrowRight className='oursant-icon' />
                                            </div>
                                        </div>
                                    </div>
                                        <div className='col-2 Corprate'>
                                            <div className='Corprate-Img'>
                                                <img className='corprate-Img-2'  src={Temples1} style={{ width: '14rem' }} />
                                                </div>
                                        <div className='GreenEffect'>
                                            <h5 className='Font-oursant'>Strategic</h5>
                                            <div className="d-flex justify-content-between">
                                                <h6 className='Font-oursant-ok'>Tucson</h6>
                                                <BsArrowRight className='oursant-icon' />
                                            </div>
                                        </div>
                                    </div>
                                        <div className='col-2 Corprate'>
                                            <div className='Corprate-Img'>
                                                <img className='corprate-Img-2' src={Aasharam1} style={{ width: '14rem' }} />
                                                </div>
                                        <div className='GreenEffect'>
                                            <h5 className='Font-oursant'>Litigation</h5>
                                            <div className="d-flex justify-content-between">
                                                <h6 className='Font-oursant-ok'>Paradox</h6>
                                                <BsArrowRight className='oursant-icon' />
                                            </div>
                                        </div>
                                    </div>
                                        <div className='col-2 Corprate'>
                                            <div className='Corprate-Img'>
                                                <img className='corprate-Img-2'  src={Temples2} style={{ width: '14rem' }} />
                                                </div>
                                        <div className='GreenEffect'>
                                            <h5 className='Font-oursant'>Consulting</h5>
                                            <div className="d-flex justify-content-between">
                                                <h6 className='Font-oursant-ok'>iMessanger</h6>
                                                <BsArrowRight className='oursant-icon' />
                                            </div>
                                        </div>
                                    </div>
                                        <div className='col-2 Corprate'>
                                            <div className='Corprate-Img'>
                                                <img className='corprate-Img-2' src={Aasharam2} style={{ width: '14rem' }} />
                                                </div>
                                        <div className='GreenEffect'>
                                            <h5 className='Font-oursant'>Brand Consulting</h5>
                                            <div className="d-flex justify-content-between">
                                                <h6 className='Font-oursant-ok'>Theme Forest</h6>
                                                <BsArrowRight className='oursant-icon' />
                                            </div>
                                        </div>
                                    </div>
                                        <div className='col-2 Corprate'>
                                            <div className='Corprate-Img'>
                                                <img className='corprate-Img-2'  src={Temples1} style={{ width: '14rem' }} />
                                                </div>
                                        <div className='GreenEffect'>
                                            <h5 className='Font-oursant'>Coprate Consulting</h5>
                                            <div className="d-flex justify-content-between">
                                                <h6 className='Font-oursant-ok'>Tukson</h6>
                                                <BsArrowRight className='oursant-icon' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            </div>
            <div className='oursant'>
                <div className='mob-slider'>
                    <Carousel className='position-sticky' variant='dark' fade style={{ opicity: "0.4" }}>
                        <Carousel.Item >
                            <div>
                                <div className='d-flex'>
                                    <div className='col-6 Corprate'>
                                        <div className='Corprate-Img'>
                                            <img className='corprate-Img-2' src={Aasharam1} style={{ width: '24rem' }} />
                                            </div>
                                        <div className='GreenEffect'>
                                            <h5 className='Font-oursant'>Corpate Finance</h5>
                                            <div className="d-flex justify-content-between">
                                                <h6 className='Font-oursant-ok'>Okler</h6>
                                                <BsArrowRight className='oursant-icon' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-6 Corprate'>
                                        <div className='Corprate-Img'>
                                            <img className='corprate-Img-2' src={Temples2} style={{ width: '24rem' }} />
                                            </div>
                                        <div className='GreenEffect'>
                                            <h5 className='Font-oursant'>Corprate Restructuring</h5>
                                            <div className="d-flex justify-content-between">
                                                <h6 className='Font-oursant-ok'>Okler</h6>
                                                <BsArrowRight className='oursant-icon' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item >
                            <div>
                                <div className='d-flex'>
                                    <div className='col-6 Corprate'>
                                        <div className='Corprate-Img'>
                                            <img className='corprate-Img-2' src={Aasharam2} style={{ width: '24rem' }} />
                                            </div>
                                        <div className='GreenEffect'>
                                            <h5 className='Font-oursant'>Economic Consulting</h5>
                                            <div className="d-flex justify-content-between">
                                                <h6 className='Font-oursant-ok'>Okler</h6>
                                                <BsArrowRight className='oursant-icon' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-6 Corprate'>
                                        <div className='Corprate-Img'>
                                            <img className='corprate-Img-2'  src={Temples1} style={{ width: '24rem' }} />
                                            </div>
                                        <div className='GreenEffect'>
                                            <h5 className='Font-oursant'>Litigation Consulting</h5>
                                            <div className="d-flex justify-content-between">
                                                <h6 className='Font-oursant-ok'>Okler</h6>
                                                <BsArrowRight className='oursant-icon' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item >
                            <div>
                                <div className='d-flex'>
                                    <div className='col-6 Corprate'>
                                        <div className='Corprate-Img'>
                                            <img className='corprate-Img-2' src={Aasharam1} style={{ width: '24rem' }} />
                                            </div>
                                        <div className='GreenEffect'>
                                            <h5 className='Font-oursant'>Strategic Consulting</h5>
                                            <div className="d-flex justify-content-between">
                                                <h6 className='Font-oursant-ok'>Okler</h6>
                                                <BsArrowRight className='oursant-icon' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-6 Corprate'>
                                        <div className='Corprate-Img'>
                                            <img className='corprate-Img-2'  src={Temples2} style={{ width: '24rem' }} />
                                            </div>
                                        <div className='GreenEffect'>
                                            <h5 className='Font-oursant'>Tech Finance</h5>
                                            <div className="d-flex justify-content-between">
                                                <h6 className='Font-oursant-ok'>Okler</h6>
                                                <BsArrowRight className='oursant-icon' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item >
                            <div>
                                <div className='d-flex'>
                                    <div className='col-6 Corprate'>
                                        <div className='Corprate-Img'>
                                            <img className='corprate-Img-2'  src={Aasharam2} style={{ width: '24rem' }} />
                                            </div>
                                        <div className='GreenEffect'>
                                            <h5 className='Font-oursant'>Strategic</h5>
                                            <div className="d-flex justify-content-between">
                                                <h6 className='Font-oursant-ok'>Okler</h6>
                                                <BsArrowRight className='oursant-icon' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-6 Corprate'>
                                        <div className='Corprate-Img'>
                                            <img className='corprate-Img-2'  src={Temples1} style={{ width: '24rem' }} />
                                            </div>
                                        <div className='GreenEffect'>
                                            <h5 className='Font-oursant'>Litigation</h5>
                                            <div className="d-flex justify-content-between">
                                                <h6 className='Font-oursant-ok'>Okler</h6>
                                                <BsArrowRight className='oursant-icon' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item >
                            <div>
                                <div className='d-flex'>
                                    <div className='col-6 Corprate'>
                                        <div className='Corprate-Img'>
                                            <img className='corprate-Img-2'  src={Aasharam1} style={{ width: '24rem' }} />
                                            </div>
                                        <div className='GreenEffect'>
                                            <h5 className='Font-oursant'>Consulting</h5>
                                            <div className="d-flex justify-content-between">
                                                <h6 className='Font-oursant-ok'>Okler</h6>
                                                <BsArrowRight className='oursant-icon' />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-6 Corprate'>
                                        <div className='Corprate-Img'>
                                            <img className='corprate-Img-2'  src={Temples2} style={{ width: '24rem' }} />
                                            </div>
                                        <div className='GreenEffect'>
                                            <h5 className='Font-oursant'>Brand Consulting</h5>
                                            <div className="d-flex justify-content-between">
                                                <h6 className='Font-oursant-ok'>Okler</h6>
                                                <BsArrowRight className='oursant-icon' />
                                            </div>
                                        </div>

                                    </div>


                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>

                </div>
            </div>
            <div className='oursant'>
                <div className='mobile-slider'>
                    <Carousel className='position-sticky' variant='dark' fade style={{ opicity: "0.4" }}>
                        <Carousel.Item >

                            <div>

                                <div className='d-flex'>
                                    <div className='col-12 Corprate'>
                                        <div className='Corprate-Img'>
                                            <img className='corprate-Img-2'  src={Aasharam2} style={{ width: '20rem' }} />
                                            </div>
                                        <div className='GreenEffect'>
                                            <h5 className='Font-oursant'>Corpate Finance</h5>
                                            <div className="d-flex justify-content-between">
                                                <h6 className='Font-oursant-ok'>Okler</h6>
                                                <BsArrowRight className='oursant-icon' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item >
                            <div>
                                <div className='d-flex'>
                                    <div className='col-12 Corprate'>
                                        <div className='Corprate-Img'>
                                            <img className='corprate-Img-2'  src={Temples1} style={{ width: '20rem' }} />
                                            </div>
                                        <div className='GreenEffect'>
                                            <h5 className='Font-oursant'>Corpate Finance</h5>
                                            <div className="d-flex justify-content-between">
                                                <h6 className='Font-oursant-ok'>Okler</h6>
                                                <BsArrowRight className='oursant-icon' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item >

                            <div>

                                <div className='d-flex'>
                                    <div className='col-12 Corprate'>
                                        <div className='Corprate-Img'>
                                            <img className='corprate-Img-2'  src={Temples2} style={{ width: '20rem' }} />
                                            </div>
                                        <div className='GreenEffect'>
                                            <h5 className='Font-oursant'>Corpate Finance</h5>
                                            <div className="d-flex justify-content-between">
                                                <h6 className='Font-oursant-ok'>Okler</h6>
                                                <BsArrowRight className='oursant-icon' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item >
                            <div>
                                <div className='d-flex'>
                                    <div className='col-12 Corprate'>
                                        <div className='Corprate-Img'>
                                            <img className='corprate-Img-2'  src={Aasharam2} style={{ width: '20rem' }} />
                                            </div>
                                        <div className='GreenEffect'>
                                            <h5 className='Font-oursant'>Corpate Finance</h5>
                                            <div className="d-flex justify-content-between">
                                                <h6 className='Font-oursant-ok'>Okler</h6>
                                                <BsArrowRight className='oursant-icon' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item >
                            <div>
                                <div className='d-flex'>
                                    <div className='col-12 Corprate'>
                                        <div className='Corprate-Img'>
                                            <img className='corprate-Img-2'  src={Temples1} style={{ width: '20rem' }} />
                                            </div>
                                        <div className='GreenEffect'>
                                            <h5 className='Font-oursant'>Corpate Finance</h5>
                                            <div className="d-flex justify-content-between">
                                                <h6 className='Font-oursant-ok'>Okler</h6>
                                                <BsArrowRight className='oursant-icon' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        
                    </Carousel>
                </div>
                </div>
            <div className='mt-5'>
            <div className='d-flex'>
                <p className="fs-1 text-dark mx-2">_</p>
                <h1 className='mt-2 '>Testimonials</h1>
            </div>
            <Carousel className='mt-2 position-sticky' fade variant='dark' interval={null} >
                <Carousel.Item>
                    <div className='row'>
                        <div className='d-flex Testimonials'>
                            <div className="col-lg-2 col-md-3 col-sm-12 text-center">
                                <img src={muni1} className="ourTest" />
                            </div>
                            <div className="col-lg-10 col-md-12 col-sm-12  mt-2">
                                <ImQuotesLeft />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
                                    risus porta, tincidunt turpis at, interdum tortor. Suspendisse
                                    potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sociis natoque penatibus et magnis dis parturient montes, nascetur
                                    ridiculus mus. Fusce ante tellus, convallis non consectetur sed,
                                    pharetra nec ex. Aliquam et tortor nisi. Duis mollis diam nec elit
                                    volutpat suscipit.
                                </p>
                                <div className=" d-flex justify-content-end"> <ImQuotesRight /></div>
                                <p className="fs-1 text-dark">_</p>
                                <h5 className="mb-0">Corporate Finance</h5>
                                <small className=" mt-0 fw-bold text-success">
                                    Corporate Finance
                                </small>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className='row'>
                        <div className='d-flex Testimonials'>
                            <div className="col-lg-2 col-md-3 col-sm-12 text-center">
                                <img src={muni2} className="ourTest" />
                            </div>
                            <div className="col-lg-10 col-md-12 mt-2">
                                <ImQuotesLeft />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
                                    risus porta, tincidunt turpis at, interdum tortor. Suspendisse
                                    potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sociis natoque penatibus et magnis dis parturient montes, nascetur
                                    ridiculus mus. Fusce ante tellus, convallis non consectetur sed,
                                    pharetra nec ex. Aliquam et tortor nisi. Duis mollis diam nec elit
                                    volutpat suscipit.
                                </p>
                                <div className=" d-flex justify-content-end"> <ImQuotesRight /></div>
                                <p className="fs-1 text-dark">_</p>
                                <h5 className="mb-0">Corporate Finance</h5>
                                <small className=" mt-0 fw-bold text-success">
                                    Corporate Finance
                                </small>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                </Carousel>
                </div>
            <div className="container-fluid mt-5">
                <div className='d-flex justify-content-center'>
                    {/* <p className="fs-1 text-dark mx-2">_</p> */}
                    <h1 className='mt-2'>Our-Blog</h1>
                </div>

                <Card style={{ width: 'auto', border: 'none' }} >
                    <Card.Body>
                        <Row className="mt-2 me-5 Card-Title">
                            <Col>
                                <Card.Img variant="bottom" src={Aasharam1} />
                            </Col>
                            <Col className="mt-3 ">
                                <Card.Text>
                                    <Card.Title >Card Title</Card.Title>
                                    <p className="lead mt-3 pb-5">  Some quick example text to build on the card title and make up the
                                        bulk of the card's content.</p>
                                    <hr className="pb-3" />
                                    <p className="lead pb-3 row">Posted by:
                                        <h6 className="text-dark col mt-1"><b>Jhon</b> </h6>
                                        Comments:<span className="text-success col"><b>15</b></span>
                                        Likes:<span className="text-danger col"><b>38</b></span>
                                    </p>
                                </Card.Text>
                                <div className='d-flex justify-content-start align-items-start mt-5'>
                                    <Link to='/blog' className='Read-More'>Read More</Link>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
            <div className='mt-3'></div>
        </React.Fragment>

    )
}
export default Home;