import React from "react";
import Aasharam4 from "../Assests/Img/Aasharam4.jpg";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./OurSant.css";
import { AiOutlineRight } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

function OurSant() {
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
                      <a
                        href="#"
                        className="text-underline-hover text-white me-2"
                      >
                        {" "}
                        Home <AiOutlineRight />
                      </a>
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

      <div className="container mt-5 mb-3  ">
        <button type="button" className="button  ">
          SHOW ALL
        </button>
        <button type="button" className="button ">
          ECONOMIC
        </button>
        <button type="button" className="button ">
          STRATEGIC
        </button>
        <button type="button" className="button ">
          TECH
        </button>
      </div>

      <div class="container mb-5  ">
        <div
          className="row d-flex justify-content-center"
          style={{ paddingLeft: "9px" }}
        >
          <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
            <Card
              style={{ width: "22rem", height: "22rem" }}
              className="main-card rounded-0"
            >
              <div className="temp">
                <Card.Img
                  style={{ height: "16rem" }}
                  src={Aasharam4}
                  variant="top"
                  className="main-img rounded-0"
                />
              </div>
              <div className="temp-1 pb-5">
                <Card.Body className="py-3 ">
                  <Card.Title className=" d-flex justify-content-between fw-bold fs-5">
                    <p className="text-dark">
                      Corporate Finance
                      <br />
                      <span className="lead">Envato</span>
                    </p>
                    <span className="text-end">
                      <BsArrowRight className="fs-1" />
                    </span>
                  </Card.Title>
                </Card.Body>
              </div>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
            <Card
              style={{ width: "22rem", height: "22rem" }}
              className="main-card rounded-0"
            >
              <div className="temp">
                <Card.Img
                  style={{ height: "16rem" }}
                  src={Aasharam4}
                  variant="top"
                  className="main-img rounded-0"
                />
              </div>
              <div className="temp-1 pb-5">
                <Card.Body className="py-3 ">
                  <Card.Title className=" d-flex justify-content-between fw-bold fs-5">
                    <p className="text-dark">
                      Corporate Finance
                      <br />
                      <span className="lead">Envato</span>
                    </p>
                    <span className="text-end">
                      <BsArrowRight className="fs-1" />
                    </span>
                  </Card.Title>
                </Card.Body>
              </div>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
            <Card
              style={{ width: "22rem", height: "22rem" }}
              className="main-card rounded-0"
            >
              <div className="temp">
                <Card.Img
                  style={{ height: "16rem" }}
                  src={Aasharam4}
                  variant="top"
                  className="main-img rounded-0"
                />
              </div>
              <div className="temp-1 pb-5">
                <Card.Body className="py-3 ">
                  <Card.Title className=" d-flex justify-content-between fw-bold fs-5">
                    <p className="text-dark">
                      Corporate Finance
                      <br />
                      <span className="lead">Envato</span>
                    </p>
                    <span className="text-end">
                      <BsArrowRight className="fs-1" />
                    </span>
                  </Card.Title>
                </Card.Body>
              </div>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
            <Card
              style={{ width: "22rem", height: "22rem" }}
              className="main-card rounded-0"
            >
              <div className="temp">
                <Card.Img
                  style={{ height: "16rem" }}
                  src={Aasharam4}
                  variant="top"
                  className="main-img rounded-0"
                />
              </div>
              <div className="temp-1 pb-5">
                <Card.Body className="py-3 ">
                  <Card.Title className=" d-flex justify-content-between fw-bold fs-5">
                    <p className="text-dark">
                      Corporate Finance
                      <br />
                      <span className="lead">Envato</span>
                    </p>
                    <span className="text-end">
                      <BsArrowRight className="fs-1" />
                    </span>
                  </Card.Title>
                </Card.Body>
              </div>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
            <Card
              style={{ width: "22rem", height: "22rem" }}
              className="main-card rounded-0"
            >
              <div className="temp">
                <Card.Img
                  style={{ height: "16rem" }}
                  src={Aasharam4}
                  variant="top"
                  className="main-img rounded-0"
                />
              </div>
              <div className="temp-1 pb-5">
                <Card.Body className="py-3 ">
                  <Card.Title className=" d-flex justify-content-between fw-bold fs-5">
                    <p className="text-dark">
                      Corporate Finance
                      <br />
                      <span className="lead">Envato</span>
                    </p>
                    <span className="text-end">
                      <BsArrowRight className="fs-1" />
                    </span>
                  </Card.Title>
                </Card.Body>
              </div>
            </Card>
          </div>
          <div className="col-lg-4  col-md-6 col-sm-12 mt-4">
            <Card
              style={{ width: "22rem", height: "22rem" }}
              className="main-card rounded-0"
            >
              <div className="temp">
                <Card.Img
                  style={{ height: "16rem" }}
                  src={Aasharam4}
                  variant="top"
                  className="main-img rounded-0"
                />
              </div>
              <div className="temp-1 pb-5">
                <Card.Body className="py-3 ">
                  <Card.Title className=" d-flex justify-content-between fw-bold fs-5">
                    <p className="text-dark">
                      Corporate Finance
                      <br />
                      <span className="lead">Envato</span>
                    </p>
                    <span className="text-end">
                      <BsArrowRight className="fs-1" />
                    </span>
                  </Card.Title>
                </Card.Body>
              </div>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
            <Card
              style={{ width: "22rem", height: "22rem" }}
              className="main-card rounded-0"
            >
              <div className="temp">
                <Card.Img
                  style={{ height: "16rem" }}
                  src={Aasharam4}
                  variant="top"
                  className="main-img rounded-0"
                />
              </div>
              <div className="temp-1 pb-5">
                <Card.Body className="py-3 ">
                  <Card.Title className=" d-flex justify-content-between fw-bold fs-5">
                    <p className="text-dark">
                      Corporate Finance
                      <br />
                      <span className="lead">Envato</span>
                    </p>
                    <span className="text-end">
                      <BsArrowRight className="fs-1" />
                    </span>
                  </Card.Title>
                </Card.Body>
              </div>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
            <Card
              style={{ width: "22rem", height: "22rem" }}
              className="main-card rounded-0"
            >
              <div className="temp">
                <Card.Img
                  style={{ height: "16rem" }}
                  src={Aasharam4}
                  variant="top"
                  className="main-img rounded-0"
                />
              </div>
              <div className="temp-1 pb-5">
                <Card.Body className="py-3 ">
                  <Card.Title className=" d-flex justify-content-between fw-bold fs-5">
                    <p className="text-dark">
                      Corporate Finance
                      <br />
                      <span className="lead">Envato</span>
                    </p>
                    <span className="text-end">
                      <BsArrowRight className="fs-1" />
                    </span>
                  </Card.Title>
                </Card.Body>
              </div>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
            <Card
              style={{ width: "22rem", height: "22rem" }}
              className="main-card rounded-0"
            >
              <div className="temp">
                <Card.Img
                  style={{ height: "16rem" }}
                  src={Aasharam4}
                  variant="top"
                  className="main-img rounded-0"
                />
              </div>
              <div className="temp-1 pb-5">
                <Card.Body className="py-3 ">
                  <Card.Title className=" d-flex justify-content-between fw-bold fs-5">
                    <p className="text-dark">
                      Corporate Finance
                      <br />
                      <span className="lead">Envato</span>
                    </p>
                    <span className="text-end">
                      <BsArrowRight className="fs-1" />
                    </span>
                  </Card.Title>
                </Card.Body>
              </div>
            </Card>
          </div>

          {/* <div className="col-lg-4 col-md-6 col-sm-12">

          </div> */}
        </div>
      </div>
    </>
  );
}
export default OurSant;
