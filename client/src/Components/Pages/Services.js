import React from 'react'
import Accordion from '../Accordion'
import IsYourBusiness from '../IsYourBusiness'
import WhatweOffer from '../WhatweOffer'

import "./Services.css"

const Services = () => {


  return (
    <div>
      <div className='container'>
        <div className='row'>


          <div className='service_bg text-white'>

            <div className='service_content'>
              <h2>Software Development <br></br> Services for Businesses</h2>
              <p className='m-0'>No matter your industry, we breathe software.</p>
            </div>

          </div>

        </div>

      </div>
      <div className='container'>
        <div className='row custom_second_content text-white d-lg-flex d-md-flex '>
          <div className='col-md-6 col-lg-6 col-12'>
            <img src="https://visionx.io/wp-content/uploads/2023/01/Software-Development.png.webp" className='img-fluid custom_second_image pb-sm-4' alt="" />
          </div>
          <div className='col-md-6 col-lg-6 col-12 '>
            <div className='custom_third_content'>
              <h5>What we offer</h5>
              <h1>Let's Work Together to <br></br> Build the Perfect <br></br> Software Solution for <br></br>Your Business</h1>
              <p className='m-0'>With our enterprise software development , we enable our clients to scale and accelerate their business. We strategize and implement new ideas so our customers can gain business value by utilizing our custom software development services.</p>
            </div>
          </div>

        </div>
      </div>

        <div className='container'>
        <div className='row'>
        
        <WhatweOffer />
       
        
        </div>
        </div>

        <IsYourBusiness/>
        <Accordion/>
    </div>
  )
}

export default Services
