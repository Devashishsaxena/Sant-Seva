import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import Aasharam1 from "../../Assests/Img/Aasharam1.jpg.jpg";
import { Link } from "react-router-dom";
const Listone = () => {
  return (
    <div>
      <div className="bg-dark pt-5 pb-3">
        <div className="container">
          <div className="row mt-3">
            <div className="col-md-12 text-center pt-4">
              <h2 className="text-white">ListOne</h2>
              <span className="d-block lead  text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </div>
            {/* <div className="col-md-4 order-1 order-md-2 align-self-center  ">
                <small>
                  <ul className="breadcrumb d-flex justify-content-end  ">
                    <li className=" me-end ">
                      <Link
                        to={"/home"}
                        className="text-underline-hover text-white me-2"
                      >
                        Home <AiOutlineRight />
                      </Link>
                    </li>

                    <li className="active text-white me-5 ">
                      Aasharam list <AiOutlineRight />
                      <span className="text-secondary">List One</span>
                    </li>
                  </ul>
                </small>
              </div> */}
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div class="row pt-1 pb-4 mb-3">
          <div class="col-lg-8">
            <p class="lead mb-4">
              Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
              consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit
              amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
              velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed
              non mauris vitae erat consequat.
            </p>

            <p class="clearfix">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              volutpat ex finibus urna tincidunt, auctor ullamcorper risus
              luctus. Nunc et feugiat arcu, in placerat risus. Phasellus
              condimentum sapien vitae. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nulla volutpat ex finibus urna tincidunt, auctor
              ullamcorper.
            </p>

            <div class="row pb-4">
              <div class="col-lg-4">
                <ul class="list list-icons list-icons-style-3 list-tertiary list-unstyled">
                  <li className="mb-4 mt-4">
                    <AiOutlineRight
                      className="rounded-circle fs-3 p-2"
                      style={{ background: "#e2fdea" }}
                    />
                    <span className="ms-2">Certified Professionals</span>
                  </li>
                  <li>
                    <AiOutlineRight
                      className="rounded-circle fs-3 p-2"
                      style={{ background: "#e2fdea" }}
                    />
                    <span className="ms-2"> Former Chief Executives</span>
                  </li>
                </ul>
              </div>
              <div class="col-lg-4">
                <ul class="list list-icons list-icons-style-3 list-tertiary list-unstyled">
                  <li className="mb-4 mt-4">
                    <AiOutlineRight
                      className="rounded-circle fs-3 p-2"
                      style={{ background: "#e2fdea" }}
                    />
                    <span className="ms-2">Real Estate Professionals</span>
                  </li>
                  <li>
                    <AiOutlineRight
                      className="rounded-circle fs-3 p-2"
                      style={{ background: "#e2fdea" }}
                    />
                    <span className="ms-2"> Chartered Financial Analystss</span>
                  </li>
                </ul>
              </div>
              <div class="col-lg-4">
                <ul class="list list-icons list-icons-style-3 list-tertiary list-unstyled">
                  <li className="mb-4 mt-4">
                    <AiOutlineRight
                      className="rounded-circle fs-3 p-2"
                      style={{ background: "#e2fdea" }}
                    />
                    <span className="ms-2"> Nobel Laureate Economists</span>
                  </li>
                  <li>
                    <AiOutlineRight
                      className="rounded-circle fs-3 p-2"
                      style={{ background: "#e2fdea" }}
                    />
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
              Lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
              cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec
              tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae
              erat consequat.
            </p>
          </div>

          <div className="col-lg-4">
            <img src={Aasharam1} alt="" className="img-fluid mb-4  " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listone;
