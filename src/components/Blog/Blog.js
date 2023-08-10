import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import temple1 from "../Assests/Img/temple1.jpg";
import { AiOutlineRight } from "react-icons/ai";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Blog.css";
function Blog() {
  return (
    <>
      <div className="bg-dark pt-5 pb-3 ">
        <div className="container">
          <div className="row mt-3">
            <div className="col-md-12 text-center pt-4">
              <h2 className="text-white">Blogs</h2>
              <span className="d-block lead  text-secondary">Lastest News</span>
            </div>
            {/* <div className="col-md-4 order-1 order-md-2 align-self-center  ">
                <small>
                  <ul className="breadcrumb d-flex justify-content-end  ">
                    <li className=" me-end ">
                      <Link className="text-underline-hover text-white me-2">
                        Home <AiOutlineRight />
                      </Link>
                    </li>

                    <li className="active text-white me-5 ">
                      <span className="text-secondary">Blogs</span>
                    </li>
                  </ul>
                </small>
              </div> */}
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <Card style={{ width: "auto", border: "none" }}>
            <Card.Body>
              <Row className="mt-2 me-5 Card-absolute">
                <Col className="d-flex">
                  <Card.Img
                    src={temple1}
                    style={{
                      postion: "absolute",
                      top: "250px",
                      right: "-30px",
                    }}
                  />
                  <Col>
                    <Card
                      className="box"
                      style={{
                        width: "6rem",
                        backgroundColor: "#4DBB6D",
                        color: "#FFFFFF",
                        font: "39px sintony,sans-serif",
                        padding: "25px 15px",
                      }}
                    >
                      <h4 className="mx-3">20</h4>
                      <h6 className="mx-2"> Oct-16</h6>
                    </Card>
                  </Col>
                </Col>
                <Col className="mt-3 mx-5">
                  <Card.Text>
                    <Card.Title>Global Opportunities</Card.Title>
                    <p className="lead mt-3 pb-5">
                      {" "}
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <hr className="pb-3" />
                    <p className="lead pb-3 row">
                      Posted by:
                      <span className="text-dark col">
                        <b>Jhon </b>{" "}
                      </span>
                      Comments:
                      <span className="text-success col">
                        <b>15</b>
                      </span>
                      Likes:
                      <span className="text-danger col">
                        <b>38</b>
                      </span>
                    </p>
                  </Card.Text>
                  <div className="d-flex justify-content-start align-items-start mt-5">
                    <Link to="/globel" className="Read-More">
                      Read More
                    </Link>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
        <div className="row mt-5">
          <Card style={{ width: "auto", border: "none" }}>
            <Card.Body>
              <Row className="mt-2 me-5 Card-absolute">
                <Col className="d-flex">
                  <Card.Img variant="bottom" src={temple1} />
                  <Col>
                    <Card
                      className="box"
                      style={{
                        width: "6rem",
                        backgroundColor: "#4DBB6D",
                        color: "#FFFFFF",
                        font: "39px sintony,sans-serif",
                        padding: "25px 15px",
                      }}
                    >
                      <h4 className="mx-3">20</h4>
                      <h6 className="mx-2"> Oct-16</h6>
                    </Card>
                  </Col>
                </Col>
                <Col className="mt-3 mx-5">
                  <Card.Text>
                    <Card.Title>Global Opportunities</Card.Title>
                    <p className="lead mt-3 pb-5">
                      {" "}
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <hr className="pb-3" />
                    <p className="lead pb-3 row">
                      Posted by:
                      <span className="text-dark col">
                        <b>Jhon </b>{" "}
                      </span>
                      Comments:
                      <span className="text-success col">
                        <b>15</b>
                      </span>
                      Likes:
                      <span className="text-danger col">
                        <b>38</b>
                      </span>
                    </p>
                  </Card.Text>
                  <div className="d-flex justify-content-start align-items-start mt-5">
                    <Link to="/globel" className="Read-More">
                      Read More
                    </Link>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
        <div className="row mt-5">
          <Card style={{ width: "auto", border: "none" }}>
            <Card.Body>
              <Row className="mt-2 me-5 Card-absolute">
                <Col className="d-flex">
                  <Card.Img variant="bottom" src={temple1} />
                  <Col>
                    <Card
                      className="box"
                      style={{
                        width: "6rem",
                        backgroundColor: "#4DBB6D",
                        color: "#FFFFFF",
                        font: "39px sintony,sans-serif",
                        padding: "25px 15px",
                      }}
                    >
                      <h4 className="mx-3">20</h4>
                      <h6 className="mx-2"> Oct-16</h6>
                    </Card>
                  </Col>
                </Col>
                <Col className="mt-3 mx-5">
                  <Card.Text>
                    <Card.Title>Global Opportunities</Card.Title>
                    <p className="lead mt-3 pb-5">
                      {" "}
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <hr className="pb-3" />
                    <p className="lead pb-3 row">
                      Posted by:
                      <span className="text-dark col">
                        <b>Jhon </b>{" "}
                      </span>
                      Comments:
                      <span className="text-success col">
                        <b>15</b>
                      </span>
                      Likes:
                      <span className="text-danger col">
                        <b>38</b>
                      </span>
                    </p>
                  </Card.Text>
                  <div className="d-flex justify-content-start align-items-start mt-5">
                    <Link to="/globel" className="Read-More">
                      Read More
                    </Link>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
export default Blog;
