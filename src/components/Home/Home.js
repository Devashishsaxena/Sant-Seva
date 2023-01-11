import React, { useState } from "react";
import "./Home.css";
import temple1 from "../Assests/Img/temple1.jpg";
import temple2 from "../Assests/Img/temple2.jpg";
import { FaGreaterThan } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <React.Fragment>
      <Carousel fade interval={null} style={{ opacity: "0.6" }}>
        <Carousel.Item>
          <img
            className="d-block"
            style={{ width: "100%", height: "100vh" }}
            src={temple1}
            alt="First slide"
          />
          <Carousel.Caption>
            <hr />
            <h3 className="d-flex justify-content-start align-items-start">
              Get your <br />
              Free Consultation
            </h3>
            <div className="d-flex justify-content-start align-items-start mt-5">
              <Link to="/about" className="linkButton">
                GET STARTED
              </Link>
            </div>
            <hr />
            <div className="d-flex justify-content-start align-items-start">
              <h1>
                - Are you looking for a
                <br />
                Business Plan Consultant?
              </h1>
            </div>
            <h6 className="d-flex justify-content-start align-items-start mt-5">
              Schedule your company strategy right session now
            </h6>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            style={{ width: "100%", height: "100vh" }}
            src={temple2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <hr />
            <h3 className="d-flex justify-content-start align-items-start">
              Solutions for <br />
              Pro Business Plan
            </h3>
            <div className="d-flex justify-content-start align-items-start mt-5">
              <Link to="/about" className="linkTag">
                GET STARTED
              </Link>
            </div>
            <hr />
            <div className="d-flex justify-content-start align-items-start">
              <h1>
                - Are you looking for a
                <br />
                Business Plan Consultant?
              </h1>
            </div>
            <h6 className="d-flex justify-content-start align-items-start mt-5">
              Schedule your company strategy right session now
            </h6>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="container">
        <div className="row">
          <div className="mt-5">
            <h1>About Us</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
              quisquam beatae, debitis nisi quod nam architecto unde non,
              quibusdam in corporis corrupti. Nostrum, accusamus adipisci
              voluptates facilis dolorum velit tempora molestias voluptatibus
              laborum beatae, necessitatibus dolores, tempore assumenda iste quo
              quis nesciunt. Exercitationem voluptas eligendi consequuntur iusto
              sint at harum eum. Explicabo quisquam aliquam non quis assumenda,
              sint quos iusto, neque laboriosam quo minima aut amet culpa, ex
              dolore quidem accusantium odit. Quaerat suscipit distinctio fugiat
              repellendus ea reiciendis quisquam, quo odio sunt dignissimos
              aperiam nihil ipsa nesciunt perspiciatis eos facilis minus. Eius
              delectus exercitationem voluptatem repellendus accusamus
              laboriosam consectetur.
            </p>
            <div className="d-flex flex-direction-column">
              <div className="col-6">
                <ul>
                  <li className="breadcrumb">
                    <span>
                      {<FaGreaterThan className="FaGreaterThan " />} Certified
                      Professionals{" "}
                    </span>
                  </li>
                  <li className="breadcrumb mt-2">
                    <span>
                      {<FaGreaterThan className="FaGreaterThan" />} Former Chief
                      Executives
                    </span>
                  </li>
                  <li className="breadcrumb mt-2">
                    <span>
                      {<FaGreaterThan className="FaGreaterThan" />} Real Estate
                      Professionals{" "}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <ul>
                  <li className="breadcrumb">
                    <span>
                      {<FaGreaterThan className="FaGreaterThan" />} Nobel
                      Laureate Economists{" "}
                    </span>
                  </li>
                  <li className="breadcrumb mt-2">
                    <span>
                      {<FaGreaterThan className="FaGreaterThan" />} Former
                      Political Leaders
                    </span>
                  </li>
                  <li className="breadcrumb mt-2">
                    <span>
                      {<FaGreaterThan className="FaGreaterThan" />} Chartered
                      Financial Analysts
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <Link to="/about" className="linkTag">
          Read More
        </Link>
      </div>
      <div
        className="container-fluid mt-5"
        style={{ backgroundColor: "#EEF4F2" }}
      >
        <div className="row">
          <div className="mt-5 ">
            <h1>Ashram List</h1>
          </div>
        </div>

        <div className="row d-flex justify-content-evenly mt-5">
          <div className="col-lg-4 col-md-12 col-sm-12  mt-2">
            <div className="row d-flex justify-content-center aligns-center">
              <div className="col-lg-3 col-md-4 col-sm-12">
                <div className="ourSanta">
                  <img src={temple1} />
                </div>
              </div>
              <div className="col-lg-7 col-md-4 col-sm-12 text-end mt-2">
                <h4>Corporate Finance</h4>
                <p>Lorem ipsum, dolor sit amet</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 mt-2">
            <div className="row d-flex justify-content-center aligns-center">
              <div className="col-lg-3 col-md-4 col-sm-12">
                <div className="ourSanta">
                  <img src={temple2} />
                </div>
              </div>
              <div className="col-lg-7 col-md-4 col-sm-12 text-end mt-2">
                <h4>Corp Restructuring</h4>
                <p>
                  Lorem ipsum, dolor sit amet <br />
                  consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12  mt-2">
            <div className="row d-flex justify-content-center aligns-center">
              <div className="col-lg-3 col-md-4 col-sm-12">
                <div className="ourSanta">
                  <img src={temple1} />
                </div>
              </div>
              <div className="col-lg-7 col-md-4 col-sm-12 text-end mt-2">
                <h4>Economic Consulting</h4>
                <p>
                  Lorem ipsum, dolor sit amet <br />
                  consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-evenly mt-3">
          <div className="col-lg-4 col-md-12 col-sm-12 ">
            <div className="row d-flex justify-content-center aligns-center">
              <div className="col-lg-3 col-md-4 col-sm-12">
                <div className="ourSanta">
                  <img src={temple1} />
                </div>
              </div>
              <div className="col-lg-7 col-md-4 col-sm-12 text-end mt-2">
                <h4>Litigation Consulting</h4>
                <p>
                  Lorem ipsum, dolor sit amet <br />
                  consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 ">
            <div className="row d-flex justify-content-center aligns-center">
              <div className="col-lg-3 col-md-4 col-sm-12">
                <div className="ourSanta">
                  <img src={temple2} />
                </div>
              </div>
              <div className="col-lg-7 col-md-4 col-sm-12 text-end mt-2">
                <h4>Strategic Consulting</h4>
                <p>
                  Lorem ipsum, dolor sit amet <br />
                  consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 ">
            <div className="row d-flex justify-content-center aligns-center">
              <div className="col-lg-3 col-md-4 col-sm-12">
                <div className="ourSanta">
                  <img src={temple1} />
                </div>
              </div>
              <div className="col-lg-7 col-md-4 col-sm-12 text-end mt-2">
                <h4>Tech Finance</h4>
                <p>
                  Lorem ipsum, dolor sit amet <br />
                  consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center mt-3">
          <Link to="/about" className="linkTag">
            View All
          </Link>
        </div>
      </div>

      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="mt-3"
        fade
        variant="dark"
        style={{ opacity: "0.6" }}
        interval={null}
      >
        <Carousel.Item className="d-flex">
          <div className="col-2">
            <img src={temple1} style={{ width: "14rem" }} />
            <div className="GreenEffect">
              <div>
                <h5>Corpate Finance</h5>
              </div>
              <div>
                <div className="d-flex justify-content-between">
                  <h6>Okler</h6>
                  <BsArrowRight size={40} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-2">
            <img src={temple1} style={{ width: "14rem" }} />
            <div className="GreenEffect">
              <div>
                <h5>Corprate Restructuring</h5>
              </div>
              <div>
                <div className="d-flex justify-content-between">
                  <h6>Okler</h6>
                  <BsArrowRight size={40} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-2">
            <img src={temple1} style={{ width: "14rem" }} />
            <div className="GreenEffect">
              <div>
                <h5>Economic Consulting</h5>
              </div>
              <div>
                <div className="d-flex justify-content-between">
                  <h6>Okler</h6>
                  <BsArrowRight size={40} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-2">
            <img src={temple1} style={{ width: "14rem" }} />
            <div className="GreenEffect">
              <div>
                <h5>Litigation Consulting</h5>
              </div>
              <div>
                <div className="d-flex justify-content-between">
                  <h6>Okler</h6>
                  <BsArrowRight size={40} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-2">
            <img src={temple2} style={{ width: "14rem" }} />
            <div className="GreenEffect">
              <div>
                <h5>Strategic Consulting</h5>
              </div>
              <div>
                <div className="d-flex justify-content-between">
                  <h6>Okler</h6>
                  <BsArrowRight size={40} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-2">
            <img src={temple2} style={{ width: "14rem" }} />
            <div className="GreenEffect">
              <div>
                <h5>Tech Finance</h5>
              </div>
              <div>
                <div className="d-flex justify-content-between">
                  <h6>Okler</h6>
                  <BsArrowRight size={40} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-2">
            <img src={temple2} style={{ width: "14rem" }} />
            <div className="GreenEffect">
              <div>
                <h5>Brand Consulting</h5>
              </div>
              <div>
                <div className="d-flex justify-content-between">
                  <h6>Okler</h6>
                  <BsArrowRight size={40} />
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="d-flex">
          <div className="col-2">
            <img src={temple2} style={{ width: "14rem" }} />
            <div className="GreenEffect">
              <div>
                <h5>Tech Consulting</h5>
              </div>
              <div>
                <div className="d-flex justify-content-between">
                  <h6>Okler</h6>
                  <BsArrowRight size={40} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-2">
            <img src={temple2} style={{ width: "14rem" }} />
            <div className="GreenEffect">
              <div>
                <h5>Strategic</h5>
              </div>
              <div>
                <div className="d-flex justify-content-between">
                  <h6>Okler</h6>
                  <BsArrowRight size={40} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-2">
            <img src={temple1} style={{ width: "14rem" }} />
            <div>
              <div>
                <h5>Litigation</h5>
              </div>
              <div className="GreenEffect">
                <div className="d-flex justify-content-between">
                  <h6>Okler</h6>
                  <BsArrowRight size={40} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-2">
            <img src={temple1} style={{ width: "14rem" }} />
            <div className="GreenEffect">
              <div>
                <h5>Consulting</h5>
              </div>
              <div>
                <div className="d-flex justify-content-between">
                  <h6>Okler</h6>
                  <BsArrowRight size={40} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-2">
            <img src={temple2} style={{ width: "14rem" }} />
            <div className="GreenEffect">
              <div>
                <h5>Brand Consulting</h5>
              </div>
              <div>
                <div className="d-flex justify-content-between">
                  <h6>Okler</h6>
                  <BsArrowRight size={40} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-2">
            <img src={temple2} style={{ width: "14rem" }} />
            <div className="GreenEffect">
              <div>
                <h5>Coprate Consulting</h5>
              </div>
              <div>
                <div className="d-flex justify-content-between">
                  <h6>Okler</h6>
                  <BsArrowRight size={40} />
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      <div className="mt-3"></div>
    </React.Fragment>
  );
}
export default Home;
