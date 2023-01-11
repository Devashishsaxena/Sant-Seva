import React from "react";
// import john from './images/john-doe.png'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaUser } from "react-icons/fa";
import { RxEnvelopeClosed } from "react-icons/rx";
import { TbMessageCircle2 } from "react-icons/tb";
import { BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineRight } from "react-icons/ai";
import "./ContactUs.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Button } from "react-bootstrap";

const ContactUs = () => {
  return (
    <>
      <div className="bg-dark pt-5 pb-5">
        <section className="page-header page-header-modern bg-color-quaternary page-header-md custom-page-header">
          <div className="container">
            <div className="row mt-3">
              <div className="col-md-8 order-2 order-md-1 align-self-center p-static">
                <h2 className="text-white">- Corporate Finance</h2>
                <span className="d-block lead  text-secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </div>
              <div className="col-md-4 order-1 order-md-2 align-self-center  ">
                <small>
                  <ul className="breadcrumb d-flex justify-content-end  ">
                    <li className=" me-end ">
                      <Link
                        to={"/home"}
                        href="#"
                        className="text-underline-hover text-white me-2"
                      >
                        Home <AiOutlineRight />
                      </Link>
                    </li>

                    <li className="active text-white me-5 ">
                      {" "}
                      Aasharam list <AiOutlineRight />{" "}
                      <span className="text-secondary">List Four</span>
                    </li>
                  </ul>
                </small>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="container mb-5">
        <Row className="mt-5 ps-3 py-3 ">
          <Col lg="7">
            <h3>Send a Message</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              volutpat ex finibus urna tincidunt, auctor ullamcorper risus
              luctus. Nunc et feugiat arcu, in placerat risus. Phasellus
              condimentum sapien vitae.
            </p>
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

          <Col xs lg="4 ">
            <h3>
              <HiOutlineLocationMarker style={{ color: "#4dbb6d" }} /> - Address
            </h3>
            <p>
              123 Porto Blvd, Suite 100<br></br>
              New York, NY
            </p>
            <br></br>
            <h3>
              <BsTelephone style={{ color: "#4dbb6d" }} /> - Phone
            </h3>
            <p>
              123-456-7890<br></br>
              123-456-7891
            </p>
            <br></br>
            <h3>
              {" "}
              <RxEnvelopeClosed
                style={{ color: "#4dbb6d" }}
              ></RxEnvelopeClosed>{" "}
              - Email
            </h3>
            <p style={{ color: "#4dbb6d" }}>
              mail@example.com<br></br>
              mail2@example.com
            </p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ContactUs;
