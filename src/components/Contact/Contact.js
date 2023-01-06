import React from 'react'
// import john from './images/john-doe.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaUser } from 'react-icons/fa';
import { RxEnvelopeClosed } from 'react-icons/rx';
import { TbMessageCircle2 } from 'react-icons/tb';
import { BsTelephone } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import "./ContactUs.css";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Button } from 'react-bootstrap';




const ContactUs = () => {
    return (
        <>
            <div className='container' >
                {/* <img src={"https://img.freepik.com/free-photo/grunge-black-concrete-textured-background_53876-124541.jpg?w=360"} alt='john' className='header-bg' /> */}
              
                <Row className='mt-5 ps-3 py-3 '>
                    <Col lg='7' >
                        <h3>Send a Message</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat ex finibus urna tincidunt,
                            auctor ullamcorper risus luctus. Nunc et feugiat arcu, in placerat risus. Phasellus condimentum sapien vitae.</p>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1" style={{ background: 'none',color:'#4dbb6d' }}><FaUser></FaUser></InputGroup.Text>
                            <Form.Control
                                placeholder='Name'
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default" />
                        </InputGroup>
                        <br></br>
                        <InputGroup className="mb-3" >
                            <InputGroup.Text id="basic-addon1" style={{ background: 'none',color:'#4dbb6d'  }}><RxEnvelopeClosed></RxEnvelopeClosed></InputGroup.Text>

                            <Form.Control
                                placeholder='Email'
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default" />
                        </InputGroup>
                        <br></br>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1" style={{ background: 'none',color:'#4dbb6d'  }}><TbMessageCircle2></TbMessageCircle2></InputGroup.Text>

                            <Form.Control
                                type="textarea"
                                placeholder='Message'
                                className='p-4'
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default" />
                        </InputGroup>

                  

                    </Col>
                    <Col xs lg="4">
                        <h3><HiOutlineLocationMarker style={{color:'#4dbb6d'}}/> - Address</h3>
                        <p>123 Porto Blvd, Suite 100<br></br>
                            New York, NY</p>
                        <br></br>
                        <h3><BsTelephone style={{color:'#4dbb6d'}}/> - Phone</h3>
                        <p>123-456-7890<br></br>
                            123-456-7891</p>
                        <br></br>
                        <h3> <RxEnvelopeClosed style={{color:'#4dbb6d'}}></RxEnvelopeClosed> - Email</h3>
                        <p  style={{color:'#4dbb6d'}}>mail@example.com<br></br>
                            mail2@example.com</p>
                    </Col>
                </Row>
                <div className=' ms-3 '>
                <button><Link className='text-success '>SUBMIT NOW </Link></button>
            </div>
              </div>
          

        </>

    )
}

export default ContactUs