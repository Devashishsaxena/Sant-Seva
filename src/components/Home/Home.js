import React, { useState } from 'react'
import './Home.css';
import temple1 from '../Assests/Img/temple1.jpg';
import temple2 from '../Assests/Img/temple2.jpg';
import { FaGreaterThan } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import muni1 from "../Assests/Img/muni1.jpg";
import muni2 from "../Assests/Img/muni2.jpg";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from "react-bootstrap";

function Home() {
    return (
        <React.Fragment>
            <Carousel fade interval={null} style={{opacity: "0.9"}}>
                    <Carousel.Item  >
                        <img
                            className="d-block"
                        style={{ width: '100%', height: "100vh"}}
                            src={temple1}
                            alt="First slide"
                        />
                    <Carousel.Caption>
                            <hr />
                            <h3 className='d-flex justify-content-start align-items-start'>Get your <br />
                                Free Consultation</h3>
                            <div className='d-flex justify-content-start align-items-start mt-5'>
                                <Link to='/about' className='linkButton'>GET STARTED</Link>
                            </div>
                        <hr />
                            <div className='d-flex justify-content-start align-items-start'>
                                <h1>- Are you looking for a
                                    <br />
                                    Business Plan Consultant?
                                </h1>
                            </div>
                        <div className='d-flex justify-content-between'>                             
                            <h6 className='d-flex justify-content-start align-items-start' style={{ color: "#777777", margin: "0px 0px 20px", Font: "13px Sintony,sans-serif" }}>Schedule your company strategy right session now</h6>
                            <div className='d-flex flex-column'>
                            <div className='d-flex'>
                                <span className='vertical'></span>
                                <div>
                                <h5 className=" mx-2" style={{ color: "#4DBB6D" }}>Call US Now</h5>
                                    <p>+001 1230 4567</p>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <span className='vertical'></span>
                                <div>
                                <h5 className=" mx-2" style={{ color: "#4DBB6D" }}>Email Us Now</h5>
                                    <p>mail@example.com</p>
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
                        <hr />
                        <div className='mt-5'>
                            <h3 className='d-flex justify-content-start align-items-start'>Solutions for <br />
                                Pro Business Plan</h3>
                            <div className='d-flex justify-content-start align-items-start mt-2'>
                                <Link to='/about' className='linkTag'>GET STARTED</Link>
                            </div>
                            <hr />
                            <div className='d-flex justify-content-start align-items-start'>
                                <h1>- Are you looking for a
                                    <br />
                                    Business Plan Consultant?
                                </h1>
                            </div>
                        <div className='d-flex justify-content-between'>
                            <h6 className='d-flex justify-content-start align-items-start mt-2' style={{ color: "#777777", margin: "0px 0px 20px", Font: "13px Sintony,sans-serif" }}>Schedule your company strategy right session now</h6>
                            <div className='d-flex flex-column'>
                                <div className='d-flex'>
                                    <span className='vertical'></span>
                                    <div>
                                        <h6 className="mt-1 mx-2" style={{ color: "#4DBB6D" }}>Call US Now</h6>
                                        <p className='mx-1'>+001 1230 4567</p>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <span className='vertical'></span>
                                    <div>
                                        <h6 className="mt-1 mx-2" style={{ color: "#4DBB6D" }}>Email Us Now</h6>
                                            <p>mail@example.com</p>
                                    </div>
                                </div>
                            </div>
                            </div>

                        </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            <div className='container'>
                <div className='row'>
                    <div className='mt-5'>
                        <h1>
                            About Us
                        </h1>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse quisquam beatae, debitis nisi quod nam architecto unde non, quibusdam in corporis corrupti. Nostrum, accusamus adipisci voluptates facilis dolorum velit tempora molestias voluptatibus laborum beatae, necessitatibus dolores, tempore assumenda iste quo quis nesciunt. Exercitationem voluptas eligendi consequuntur iusto sint at harum eum. Explicabo quisquam aliquam non quis assumenda, sint quos iusto, neque laboriosam quo minima aut amet culpa, ex dolore quidem accusantium odit. Quaerat suscipit distinctio fugiat repellendus ea reiciendis quisquam, quo odio sunt dignissimos aperiam nihil ipsa nesciunt perspiciatis eos facilis minus. Eius delectus exercitationem voluptatem repellendus accusamus laboriosam consectetur.
                        </p>
                        <div className='d-flex flex-direction-column'>
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
                        <h1>Ashram List</h1>
                    </div>

                </div>
                <div className="row d-flex justify-content-evenly mt-5">
                    <div className="col-lg-4 col-md-12 col-sm-12  mt-2">
                        <div className="row d-flex justify-content-center aligns-center">
                            <div className="col-lg-3 col-md-4 col-sm-12 ourSanta">
                                <img src={temple1} />
                            </div>
                            <div className="col-lg-7 col-md-4 col-sm-12 text-end mt-2">
                                <h4>Corporate Finance</h4>
                                <p>Lorem ipsum, dolor sit amet</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12  mt-2">
                        <div className="row d-flex justify-content-center aligns-center">
                            <div className="col-lg-3 col-md-4 col-sm-12 ourSanta">
                                <img src={temple2} />
                            </div>
                            <div className="col-lg-7 col-md-4 col-sm-12 text-end mt-2">
                                <h4>Corp Restructuring</h4>
                                <p>Lorem ipsum, dolor sit amet <br />consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12  mt-2">
                        <div className="row d-flex justify-content-center aligns-center">
                            <div className="col-lg-3 col-md-4 col-sm-12 ourSanta">
                                <img src={temple1} />
                            </div>
                            <div className="col-lg-7 col-md-4 col-sm-12 text-end mt-2">
                                <h4>Economic Consulting</h4>
                                <p>Lorem ipsum, dolor sit amet <br />consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-evenly mt-3">
                    <div className="col-lg-4 col-md-12 col-sm-12 ">
                        <div className="row d-flex justify-content-center aligns-center">
                            <div className="col-lg-3 col-md-4 col-sm-12 ourSanta">
                                <img src={temple1} />
                            </div>
                            <div className="col-lg-7 col-md-4 col-sm-12 text-end mt-2">
                                <h4>Litigation Consulting</h4>
                                <p>Lorem ipsum, dolor sit amet <br />consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 ">
                        <div className="row d-flex justify-content-center aligns-center">
                            <div className="col-lg-3 col-md-4 col-sm-12 ourSanta">
                                <img src={temple2} />
                            </div>
                            <div className="col-lg-7 col-md-4 col-sm-12 text-end mt-2">
                                <h4>Strategic Consulting</h4>
                                <p>Lorem ipsum, dolor sit amet <br />consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 ">
                        <div className="row d-flex justify-content-center aligns-center">
                            <div className="col-lg-3 col-md-4 col-sm-12 ourSanta">
                                <img src={temple1} />
                            </div>
                            <div className="col-lg-7 col-md-4 col-sm-12 text-end mt-2">
                                <h4>Tech Finance</h4>
                                <p>Lorem ipsum, dolor sit amet <br />consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='d-flex justify-content-center align-items-center mt-3'>
                    <Link to='/about' className='linkTag'>View All</Link>
                </div>
            </div>
            <Carousel className='mt-5 position-sticky' variant='dark' fade interval={null} style={{ opicity: "0.4" }}>
                <Carousel.Item className='d-flex'>
                    <div className='col-2'>
                            <img src={temple1} style={{ width: '14rem' }} />
                        <div className='GreenEffect'>
                                <div><h5>Corpate <br/> Finance</h5></div>
                                <div>
                                    <div className="d-flex justify-content-between">
                                        <h6>Okler</h6>
                                        <BsArrowRight size={40} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className='col-2'>
                        <img src={temple1} style={{ width: '14rem' }} />
                        <div className='GreenEffect'>
                            <div><h5>Corprate <br /> Restructuring</h5></div>
                                    <div className="d-flex justify-content-between">
                                        <h6>Okler</h6>
                                        <BsArrowRight size={40} />
                                    </div>
                            </div>
                        </div>
                    <div className='col-2'>
                            <img src={temple1} style={{ width: '14rem' }} />
                        <div className='GreenEffect'>
                            <div><h5>Economic <br /> Consulting</h5></div>
                                    <div className="d-flex justify-content-between">
                                        <h6>Okler</h6>
                                        <BsArrowRight size={40} />
                                    </div>
                                </div>
                        </div>
                    <div className='col-2'>
                            <img src={temple1} style={{ width: '14rem' }} />
                        <div className='GreenEffect'>
                            <div><h5>Litigation <br /> Consulting</h5></div>
                                    <div className="d-flex justify-content-between">
                                        <h6>Okler</h6>
                                        <BsArrowRight size={40} />
                                    </div>
                            </div>
                        </div>
                    <div className='col-2'>
                        <img src={temple2}   style={{ width: '14rem' }} />
                        <div className='GreenEffect'>
                            <div><h5>Strategic <br /> Consulting</h5></div>
                                
                                    <div className="d-flex justify-content-between">
                                        <h6>Okler</h6>
                                        <BsArrowRight size={40} />
                                    </div>
                                </div>
                        </div>

                    <div className='col-2'>
                            <img  src={temple2}  style={{ width: '14rem' }} />
                        <div className='GreenEffect'>
                            <div><h5>Tech <br /> Finance</h5></div>
                                    <div className="d-flex justify-content-between">
                                        <h6>Okler</h6>
                                        <BsArrowRight size={40} />
                                    </div>
                            </div>
                        </div>
                    <div className='col-2'>
                        <img src={temple2} style={{ width: '14rem' }} />
                        <div className='GreenEffect'>
                            <div><h5>Brand <br /> Consulting</h5></div>
                                    <div className="d-flex justify-content-between">
                                        <h6>Okler</h6>
                                        <BsArrowRight size={40} />
                                    </div>
                            </div>
                        </div>
                </Carousel.Item>
                <Carousel.Item className='d-flex'>
                    <div className='col-2'>
                        <img src={temple2} style={{ width: '14rem' }} />
                        <div className='GreenEffect'>
                            <div><h5>Tech <br /> Consulting</h5></div>
                                    <div className="d-flex justify-content-between">
                                        <h6>Okler</h6>
                                        <BsArrowRight size={40} />
                                    </div>
                            </div>
                        </div>
                    <div className='col-2'>
                            <img  src={temple2}  style={{ width: '14rem' }} />
                        <div className='GreenEffect'>
                                <div><h5>Strategic</h5></div>
                                    <div className="d-flex justify-content-between">
                                        <h6>Okler</h6>
                                        <BsArrowRight size={40} />
                                    </div>
                            </div>
                        </div>
                    <div className='col-2'>
                <img src={temple1} style={{ width: '14rem' }} />
                            <div className='GreenEffect'>
                                <div><h5>Litigation</h5></div>
                                    <div className="d-flex justify-content-between">
                                        <h6>Okler</h6>
                                        <BsArrowRight size={40} />
                                    </div>
                                </div>
                            </div>
                    <div className='col-2'>
                            <img  src={temple1}  style={{ width: '14rem' }} />
                        <div className='GreenEffect'>
                                <div><h5>Consulting</h5></div>
                                    <div className="d-flex justify-content-between">
                                        <h6>Okler</h6>
                                        <BsArrowRight size={40} />
                                    </div>
                            </div>
                        </div>
                    <div className='col-2'>
                            <img  src={temple2}  style={{ width: '14rem' }} />
                        <div className='GreenEffect'>
                            <div><h5>Brand <br /> Consulting</h5></div>
                                    <div className="d-flex justify-content-between">
                                        <h6>Okler</h6>
                                        <BsArrowRight size={40} />
                                    </div>
                            </div>
                        </div>
                    <div className='col-2'>
                            <img src={temple2} style={{ width: '14rem' }} />
                            <div className='GreenEffect'>
                                <div><h5>Coprate Consulting</h5></div>
                                    <div className="d-flex justify-content-between">
                                        <h6>Okler</h6>
                                        <BsArrowRight size={40} />
                                    </div>
                            </div>
                        </div>
                </Carousel.Item>
            </Carousel>
            <div className='d-flex mt-5 '>
                <p className="fs-1 text-dark mx-2">_</p>
                <h1 className='mt-2'>Testimonials</h1>
            </div>
            <Carousel  className='mt-2 position-sticky' fade variant='dark' interval={null} >
                <Carousel.Item className='d-flex'>
                    <div className="col-lg-2 col-md-3 col-sm-12 text-center">
                        <img src={muni1} className="ourTest" />
                    </div>
                    <div className="col-lg-10 col-md-12  mt-2">
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
                </Carousel.Item>
                <Carousel.Item className='d-flex'>
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
                </Carousel.Item>
            </Carousel>
            <div className="container-fluid mt-5">
                <div className='d-flex'>
                    <p className="fs-1 text-dark mx-2">_</p>
                    <h1 className='mt-2'>OurBlog</h1>
                </div>
                <div className="row">
                    <Card style={{ width: 'auto', border: 'none' }} >
                        <Card.Body>
                            <Row className="mt-2 me-5">
                                <Col>
                                    <Card.Img variant="bottom" src={temple1} />
                                </Col>
                                <Col className="mt-3">
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
                                        <Link to='/about' className='Read-More'>Read More</Link>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className='mt-3'></div>
        </React.Fragment>

    )
}
export default Home;