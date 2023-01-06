import React from "react";
import "./AboutUS.css";

import { AiOutlineRight } from "react-icons/ai";
// import { BsFacebook } from "react-icons/bs";
// import { BsLinkedin } from "react-icons/bs";
// import { AiFillTwitterSquare } from "react-icons/ai";
// import { AiFillGooglePlusSquare } from "react-icons/ai";
import Aasharam1 from "../Assests/Img/Aasharam1.jpg.jpg";
import Aasharam2 from "../Assests/Img/Aasharam2.jpg.jpg";
import Aasharam3 from "../Assests/Img/Aasharam3.jpg.jpg";
function AboutUs() {
  return (
    <>
      <div className="bg-dark pt-5 pb-5">
        <section className="page-header page-header-modern bg-color-quaternary page-header-md custom-page-header">
          <div className="container">
            <div className="row mt-3">
              <div className="col-md-8 order-2 order-md-1 align-self-center p-static">
                <h2 className="text-white">- About Us</h2>
                <span className="d-block text-4 text-white">Who We Are</span>
              </div>
              <div className="col-md-4 order-1 order-md-2 align-self-center  ">
                <small>
                  <ul className="breadcrumb d-flex justify-content-end  ">
                    <li className=" me-end ">
                      <a
                        href="#"
                        className="text-underline-hover text-white me-2"
                      >
                        Home <AiOutlineRight />
                      </a>
                    </li>

                    <li className="active text-secondary me-5 ">About Us</li>
                  </ul>
                </small>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="container mt-5">
        <div className="row pt-1 pb-4 mb-3">
          <div className="col">
            <p className="lead mb-4 fw-normal text-secondary">
              Founded in 2001 by John Doe, gravida nibh vel velit auctor
              aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
              elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio
              sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
              ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
              Sed non mauris vitae erat consequat.
            </p>

            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              volutpat ex finibus urna tincidunt, auctor ullamcorper risus
              luctus. Nunc et feugiat arcu, in placerat risus. Phasellus
              condimentum sapien vitae.
            </p>

            <div className="row pb-4">
              <div className="col-lg-4">
                <ul className="list list-icons list-icons-style-3 list-tertiary list-unstyled">
                  <li className="mb-4 mt-4">
                    <AiOutlineRight
                      className="rounded-circle fs-3 p-2"
                      style={{ background: "#e2fdea" }}
                    />{" "}
                    <span className="ms-2">Certified Professionals</span>
                  </li>
                  <li>
                    <AiOutlineRight
                      className="rounded-circle fs-3 p-2"
                      style={{ background: "#e2fdea" }}
                    />{" "}
                    <span className="ms-2"> Former Chief Executives</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4">
                <ul className="list list-icons list-icons-style-3 list-tertiary list-unstyled">
                  <li className="mb-4 mt-4">
                    <AiOutlineRight
                      className="rounded-circle fs-3 p-2"
                      style={{ background: "#e2fdea" }}
                    />{" "}
                    <span className="ms-2">Real Estate Professionals</span>
                  </li>
                  <li>
                    <AiOutlineRight
                      className="rounded-circle fs-3 p-2"
                      style={{ background: "#e2fdea" }}
                    />{" "}
                    <span className="ms-2"> Chartered Financial Analystss</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4">
                <ul className="list list-icons list-icons-style-3 list-tertiary list-unstyled">
                  <li className="mb-4 mt-4">
                    <AiOutlineRight
                      className="rounded-circle fs-3 p-2"
                      style={{ background: "#e2fdea" }}
                    />{" "}
                    <span className="ms-2"> Nobel Laureate Economists</span>
                  </li>
                  <li>
                    <AiOutlineRight
                      className="rounded-circle fs-3 p-2"
                      style={{ background: "#e2fdea" }}
                    />{" "}
                    <span className="ms-2"> Former Political Leaders</span>
                  </li>
                </ul>
              </div>
            </div>

            <p>
              Lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
              cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec
              tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae
              erat consequat.
            </p>

            <p>
              Gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
              quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
              nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
              amet mauris. Gravida nibh vel velit auctor aliquet. Aenean
              sollicitudin, lorem quis bibendum auctor, nisi elit consequat
              ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh
              vulputate cursus a sit amet mauris.
            </p>

            <p>
              Gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
              quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
              nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
              amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
              tincidunt auctor a ornare odio. Sed non mauris vitae erat
              consequat.
            </p>

            <p>
              Lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
              cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec
              tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae
              erat consequat.
            </p>

            <div className="row pb-4  ">
              <div className="col-lg-4">
                <img src={Aasharam2} alt="" className="img-fluid mb-4 " />
              </div>
              <div className="col-lg-4">
                <img src={Aasharam1} alt="" className="img-fluid mb-4  " />
              </div>
              <div className="col-lg-4">
                <img src={Aasharam3} alt="" className="img-fluid mb-4" />
              </div>
            </div>

            <p>
              Gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
              quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
              nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
              amet mauris. Gravida nibh vel velit auctor aliquet. Aenean
              sollicitudin, lorem quis bibendum auctor, nisi elit consequat
              ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh
              vulputate cursus a sit amet mauris.
            </p>

            <p>
              Gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
              quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
              nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
              amet mauris. Gravida nibh vel velit auctor aliquet. Aenean
              sollicitudin, lorem quis bibendum auctor, nisi elit consequat
              ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh
              vulputate cursus a sit amet mauris.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutUs;
