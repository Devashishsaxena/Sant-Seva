import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import "./Testinomials.css";
import muni1 from "../Assests/Img/muni1.jpg";
import muni2 from "../Assests/Img/muni2.jpg";
import muni3 from "../Assests/Img/muni3.jpg";

function Testinomials() {
  return (
    <>
      <div className="bg-dark pt-5 pb-5">
        <section className="page-header page-header-modern bg-color-quaternary page-header-md custom-page-header">
          <div className="container">
            <div className="row mt-3">
              <div className="col-md-8 order-2 order-md-1 align-self-center p-static">
                <h2 className="text-white">- Testimonials</h2>
                <span className="d-block lead  text-secondary">
                  What our clients say about us
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
                        Home <AiOutlineRight />
                      </a>
                    </li>

                    <li className="active text-white me-5 ">
                      <span className="text-secondary">Testimonials</span>
                    </li>
                  </ul>
                </small>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-lg-2 col-md-3 col-sm-12 text-center">
            <img src={muni1} className="ourTest" />
          </div>
          <div className=" col-lg-10 col-md-12 mt-2  ">
            <ImQuotesLeft />
            <div className="ms-1">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                eget risus porta, tincidunt turpis at, interdum tortor.
                Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Fusce ante tellus,
                convallis non consectetur sed, pharetra nec ex. Aliquam et
                tortor nisi. Duis mollis diam nec elit volutpat suscipit.
              </p>
            </div>
            <div className=" d-flex justify-content-end">
              {" "}
              <ImQuotesRight />
            </div>
            <p className="fs-1 text-dark">_</p>
            <h5 className="mb-0">Corporate Finance</h5>
            <small className=" mt-0 fw-bold text-success">
              Corporate Finance
            </small>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 col-md-3 col-sm-12 text-center">
            <img src={muni2} className="ourTest" />
          </div>
          <div className=" col-lg-10 col-md-12 mt-2  ">
            <ImQuotesLeft />
            <div className="ms-1">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                eget risus porta, tincidunt turpis at, interdum tortor.
                Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Fusce ante tellus,
                convallis non consectetur sed, pharetra nec ex. Aliquam et
                tortor nisi. Duis mollis diam nec elit volutpat suscipit.
              </p>
            </div>
            <div className=" d-flex justify-content-end">
              {" "}
              <ImQuotesRight />
            </div>
            <p className="fs-1 text-dark">_</p>
            <h5 className="mb-0">Corporate Finance</h5>
            <small className=" mt-0 fw-bold text-success">
              Corporate Finance
            </small>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 col-md-3 col-sm-12 text-center">
            <img src={muni3} className="ourTest" />
          </div>
          <div className=" col-lg-10 col-md-12 mt-2  ">
            <ImQuotesLeft />
            <div className="ms-1">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                eget risus porta, tincidunt turpis at, interdum tortor.
                Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Fusce ante tellus,
                convallis non consectetur sed, pharetra nec ex. Aliquam et
                tortor nisi. Duis mollis diam nec elit volutpat suscipit.
              </p>
            </div>
            <div className=" d-flex justify-content-end">
              {" "}
              <ImQuotesRight />
            </div>
            <p className="fs-1 text-dark">_</p>
            <h5 className="mb-0">Corporate Finance</h5>
            <small className=" mt-0 fw-bold text-success">
              Corporate Finance
            </small>
          </div>
        </div>
      </div>
    </>
  );
}
export default Testinomials;
