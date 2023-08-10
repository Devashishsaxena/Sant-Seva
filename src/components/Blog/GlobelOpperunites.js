import React from 'react';
import Temples1 from '../Assests/Img/Temples1.jpg';
import { SiFacebook } from 'react-icons/si';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsPlusCircleFill } from 'react-icons/bs';
import { FaReply } from 'react-icons/fa';
import { AiFillCaretLeft } from 'react-icons/ai';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaUser } from "react-icons/fa";
import { RxEnvelopeClosed } from "react-icons/rx";
import { TbMessageCircle2 } from "react-icons/tb";
import "./GlobelOpperunites.css";

function GlobelOpperunites(props) {
    return (
        <React.Fragment>
            <div className="bg-dark pt-5 pb-3">
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-md-12 text-center pt-4">
                            <h2 className="text-white">- Global Opportunities</h2>
                            <span className="d-block lead  text-secondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row' style={{ fontFamily: "sintony,sans-serif", font: "14px" }} >
                    <div className='Globel'>
                        <span style={{ color: "#777777" }}>Posted by: </span>
                        <span style={{ color: "#212529" }}>John Doe</span>
                        <div className='mx-5'>
                            <span style={{ color: "#777777" }}>Comments: </span>
                            <span style={{ color: "#4DBB6D" }}> 15 </span>
                        </div>
                        <span style={{ color: "#777777" }}>Post Date:</span>
                        <span style={{ color: "#212529" }}>15 Dec 2022</span>
                    </div>
                </div>
            </div>
            <div className='container'>
                <hr />
                <p style={{ color: "#777777", font: "19.2", fontFamily: "sintony,sans-serif" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
                    risus porta, tincidunt turpis at, interdum tortor. Suspendisse
                    potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sociis natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Fusce ante tellus, convallis non consectetur sed,
                    pharetra nec ex. Aliquam et tortor nisi. Duis mollis diam nec elit
                    volutpat suscipit.
                </p>
                <div className='row mt-3'>
                    <div className='col-lg-8 col-sm-12'>
                        <p style={{ color: "#777777", font: "19.2", fontFamily: "sintony,sans-serif" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat ex finibus urna tincidunt, auctor ullamcorper risus luctus. Nunc et feugiat arcu, in placerat risus. Phasellus condimentum sapien vitae. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat
                        </p>

                    </div>
                    <div className='col-lg-4 col-sm-12 d-flex justify-content-center '>
                        <img src={Temples1} style={{ width: '18rem' }} />
                    </div>
                </div>
                <div className='mt-2'>
                    <p style={{ color: "#777777", font: "14", fontFamily: "sintony,sans-serif" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat ex finibus urna tincidunt, auctor ullamcorper risus luctus. Nunc et feugiat arcu, in placerat risus. Phasellus condimentum sapien vitae. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat
                    </p>
                </div>
                <div className='mt-2'>
                    <p style={{ color: "#777777", font: "14", fontFamily: "sintony,sans-serif" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat ex finibus urna tincidunt, auctor ullamcorper risus luctus. Nunc et feugiat arcu, in placerat risus. Phasellus condimentum sapien vitae. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat
                    </p>
                </div>
                <div className='d-flex'>
                    <SiFacebook size={35} style={{ color: "#3B5998" }} />
                    <AiFillTwitterCircle size={40} className="mx-1" style={{ color: "#1DA1F2" }} />
                    <BsPlusCircleFill size={35} style={{ color: "#FF6550" }} />
                </div>
                <div className='container mt-5'>
                    <h1 style={{ color: "#212529", font: "19.6px", fontFamily: "Playfair Display,serif" }}>- Author</h1>
                    <div className='row'>
                        <div className="col-lg-2">
                            <img src={Temples1} style={{ width: '80px', height: "80px" }} />
                        </div>
                        <div className='col-lg-10'>
                            <h6 style={{ color: "#777777", font: "13.86px", fontFamily: "Sintony,sans-serif" }}>Jhon Doe</h6>
                            <p className='mt-1' style={{ color: "#777777", font: "12.6px", fontFamily: "sintony,sans-serif" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed  dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat.</p>
                        </div>
                    </div>
                </div>
                <div className='container mt-2'>
                    <div className='row'>
                        <h1 style={{ color: "#212529", font: "19.6px", fontFamily: "Playfair Display,serif" }}>- Comments</h1>
                        <div className='d-flex'>
                            <div className="col-2">
                                <img src={Temples1} style={{ width: '48px', height: "48px" }} />
                            </div>
                            <span className='mt-3'><AiFillCaretLeft size={50} style={{ position: "relative", left: "5px", color: "#F8F9F8" }} /></span>
                            <div className='row bg-light'>
                                <div className='d-flex justify-content-between mt-4'>
                                    <h6 className='fw-bold' style={{ color: "#777777", font: "13.86px", fontFamily: "Sintony,sans-serif" }}>Jhon Doe</h6>
                                    <h6 className='fw-bold' style={{ color: "#4DBB6D", font: "14px", fontFamily: "sintony,sans-serif" }}><FaReply size={15} className="mx-1 " /><span>Reply</span></h6>
                                </div>

                                <p className='mt-1' style={{ color: "#777777", font: "12.6px", fontFamily: "sintony,sans-serif" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim ornare nisi, vitae mattis nulla ante id dui.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container mt-5 mx-5'>
                    <div className='row joe'>
                        <div className='d-flex'>
                            <div className="col-2">
                                <img src={Temples1} style={{ width: '48px', height: "48px" }} />
                            </div>
                            <span className='mt-3'><AiFillCaretLeft className='icon' size={50} style={{ position: "relative", left: "5px", color: "#F8F9F8" }} /></span>
                            <div className='row bg-light'>
                                <div className='d-flex justify-content-between mt-4'>

                                    <h6 className='fw-bold' style={{ color: "#777777", font: "13.86px", fontFamily: "Sintony,sans-serif" }}>Jhon Doe</h6>
                                    <h6 className='fw-bold' style={{ color: "#4DBB6D", font: "14px", fontFamily: "sintony,sans-serif" }}><FaReply size={15} className="mx-1 " /><span>Reply</span></h6>
                                </div>

                                <p className='mt-1' style={{ color: "#777777", font: "12.6px", fontFamily: "sintony,sans-serif" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae.</p>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className='d-flex'>
                            <div className="col-2">
                                <img src={Temples1} style={{ width: '48px', height: "48px" }} />
                            </div>
                            <span className='mt-3'><AiFillCaretLeft className='icon' size={50} style={{ position: "relative", left: "5px", color: "#F8F9F8" }} /></span>
                            <div className='row bg-light'>
                                <div className='d-flex justify-content-between mt-4'>

                                    <h6 className='fw-bold' style={{ color: "#777777", font: "13.86px", fontFamily: "Sintony,sans-serif" }}>Jhon Doe</h6>
                                    <h6 className='fw-bold' style={{ color: "#4DBB6D", font: "14px", fontFamily: "sintony,sans-serif" }}><FaReply size={15} className="mx-1 " /><span>Reply</span></h6>
                                </div>

                                <p className='mt-1' style={{ color: "#777777", font: "12.6px", fontFamily: "sintony,sans-serif" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='d-flex'>
                            <div className="col-2">
                                <img src={Temples1} style={{ width: '48px', height: "48px" }} />
                            </div>
                            <span className='mt-3'><AiFillCaretLeft size={50} style={{ position: "relative", left: "20px", color: "#F8F9F8" }} /></span>
                            <div className='container-fluid'>
                                <div className='row bg-light'>
                                    <div className='col-12 '>
                                        <div className='d-flex justify-content-between mt-4'>

                                            <h6 className='fw-bold' style={{ color: "#777777", font: "13.86px", fontFamily: "Sintony,sans-serif" }}>Jhon Doe</h6>
                                            <h6 className='fw-bold' style={{ color: "#4DBB6D", font: "14px", fontFamily: "sintony,sans-serif" }}><FaReply size={15} className="mx-1 " /><span>Reply</span></h6>
                                        </div>

                                        <p className='mt-1' style={{ color: "#777777", font: "12.6px", fontFamily: "sintony,sans-serif" }}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='d-flex'>
                            <div className="col-2">
                                <img src={Temples1} style={{ width: '48px', height: "48px" }} />
                            </div>
                            <span className='mt-3'><AiFillCaretLeft size={50} style={{ position: "relative", left: "20px", color: "#F8F9F8" }} /></span>
                            <div className='container-fluid'>
                                <div className='row bg-light'>
                                    <div className='col-12 '>
                                        <div className='d-flex justify-content-between mt-4'>

                                            <h6 className='fw-bold' style={{ color: "#777777", font: "13.86px", fontFamily: "Sintony,sans-serif" }}>Jhon Doe</h6>
                                            <h6 className='fw-bold' style={{ color: "#4DBB6D", font: "14px", fontFamily: "sintony,sans-serif" }}><FaReply size={15} className="mx-1 " /><span>Reply</span></h6>
                                        </div>

                                        <p className='mt-1' style={{ color: "#777777", font: "12.6px", fontFamily: "sintony,sans-serif" }}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className="container mb-5">
                <Row className="mt-5 ps-3 py-3 ">
                    <Col lg="12">
                        <h3 style={{ color: "#212529", font: "18.2px", fontFamily: "Playfair Display, serif" }}>- Leave a Comment</h3>
                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                id="basic-addon1"
                                style={{ background: "none", color: "#4dbb6d" }}
                            >
                                <FaUser></FaUser>
                            </InputGroup.Text>
                            <Form.Control
                                placeholder="Name"
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                        <br></br>
                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                id="basic-addon1"
                                style={{ background: "none", color: "#4dbb6d" }}
                            >
                                <RxEnvelopeClosed></RxEnvelopeClosed>
                            </InputGroup.Text>

                            <Form.Control
                                placeholder="Email"
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                        <br></br>
                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                id="basic-addon1"
                                style={{ background: "none", color: "#4dbb6d" }}
                            >
                                <TbMessageCircle2></TbMessageCircle2>
                            </InputGroup.Text>

                            <Form.Control
                                type="textarea"
                                placeholder="Message"
                                className="p-4"
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                        <div className="mb-4 ">
                            <button className="submit-btn">SUBMIT NOW</button>
                        </div>
                    </Col>
                </Row>
            </div>


        </React.Fragment>
    );
}

export default GlobelOpperunites;