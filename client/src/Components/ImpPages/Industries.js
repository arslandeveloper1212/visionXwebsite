import React from 'react'
import "./Industries.css"
import EnablingDig from './EnablingDig'
import {Link} from 'react-router-dom'
const Industries = () => {
    return (
        <div>
            <div className='industries_bg_here text-white'>
                <div className='container'>
                    <div className='row d-flex justify-content-around align-items-center'>
                        <div className='col-md-6 col-lg-6 col-12'>
                            <h5>ECOMMERCE & RETAIL</h5>
                            <h1>Accelerate Sales & Empower Customers</h1>
                            <p className='m-0'>The shift in consumer desire for immersive experiences is a call to action for retailers to reinvent digital commerce and enhance the customer experience in retail. </p>
                          <Link to="/services"> <button className='btn_sm_here m-0 mt-4'>Get Started</button> </Link> 
                        </div>
                        <div className='col-md-6 col-lg-6 col-12'>
                            <img src='https://visionx.io/wp-content/uploads/2022/12/eComm-Retail-Banner.png.webp' width="600" className='img-fluid' alt='industies_img' />
                        </div>
                    </div>
                </div>



                <EnablingDig 
                stitle="WHY US" 
                title="Enabling Digital Commerce
                 and Transforming Retail 
                 Customer Experience"
                heading =  "Talk to Us About Your Software Needs!"
                para = "One of our experts will get on a short call to discuss your needs and find a fit before coming up with an engagement proposal."
                

                />
            </div>
        </div>
    )
}

export default Industries
