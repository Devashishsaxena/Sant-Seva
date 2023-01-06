import React, { useState } from 'react'
import './Home.css';
import Sant1 from '../Assests/Img/Sant1.jpg';
import Sant2 from '../Assests/Img/Sant2.jpg';
import Sant3 from '../Assests/Img/Sant3.jpg';
import { FaGreaterThan } from 'react-icons/fa'
function Home() {
    return (
        <React.Fragment>
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
                <button><a href='/about'>Read More</a></button>
            </div>
            <div className='container-fluid' style={{backgroundColor:"#EEF4F2"}}>
                    <div className='mt-5'>
                        <h1>Ashram List</h1>
                </div>
                <div className="row d-flex justify-content-evenly mt-5">
                    <div className="col-lg-4 col-md-12 col-sm-12  mt-2">
                        <div className="row d-flex justify-content-center aligns-center">
                            <div className="col-lg-3 col-md-4 col-sm-12 ourSanta">
                                <img src={Sant1} />
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
                                <img src={Sant2}  />
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
                                <img src={Sant3}  />
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
                                <img src={Sant1}  />
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
                                <img src={Sant2}  />
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
                                <img src={Sant3}  />
                            </div>
                            <div className="col-lg-7 col-md-4 col-sm-12 text-end mt-2">
                                <h4>Tech Finance</h4>
                                <p>Lorem ipsum, dolor sit amet <br />consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className='d-flex justify-content-center align-items-center mt-5'>
                    <button><a href='/about'>View All</a></button>
                </div>
            </div>
        </React.Fragment>
        
    )
}
export default Home;