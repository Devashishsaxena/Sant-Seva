import React from "react";
import Button from 'react-bootstrap/Button';
import "./OurSant.css"
import { AiOutlineRight } from "react-icons/ai";

function OurSant() {
    return (
    <>


         <div className="bg-dark pt-5 pb-5">
	                <section className="page-header page-header-modern bg-color-quaternary page-header-md custom-page-header">
					<div className="container">
						<div className="row mt-3">
							<div className="col-md-8 order-2 order-md-1 align-self-center p-static">
								<h2 className="text-white">- Corporate Finance</h2>
								<span className="d-block lead  text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
							</div>
							<div className="col-md-4 order-1 order-md-2 align-self-center  ">
								<small>
								<ul className="breadcrumb d-flex justify-content-end  ">
									<li className=" me-end "><a href="#" className="text-underline-hover text-white me-2" > Home <AiOutlineRight /></a></li>
				  
									<li className="active text-white me-5 "> Aasharam list <AiOutlineRight /> <span className='text-secondary'>List Four</span></li>
								</ul>
								</small>
							</div>
						</div>
					</div>
			</section>
	</div>
    <div className="container mt-5">
    <button type="button" class="btn btn-primary ">SHOW ALL</button>
    <button type="button" class="btn btn-primary">ECONOMIC</button>
    <button type="button" class="btn btn-primary">STRATEGIC</button>
    <button type="button" class="btn btn-primary">TECH</button>  

    <Button variant="outline-primary">Primary</Button>{' '}
      <Button variant="outline-secondary">Secondary</Button>{' '}
      <Button variant="outline-success">Success</Button>{' '}
      <Button variant="outline-warning">Warning</Button>{' '}
    </div>
            
    
    </>
    )
}
export default OurSant;