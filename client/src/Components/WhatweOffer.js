import React from 'react'
import "./WhatweOffer.css"
const WhatweOffer = () => {
    return (
        <div className='text-white whatweoffer_bg'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 col-lg-4 col-12'>
                        <h5 >WHAT WE OFFER</h5>
                        <h2 className='h-1'>Software Development Services</h2>
                    </div>
                    <div className='col-md-8 col-lg-8 col-12 d-lg-flex d-md-flex'>
                        <div className='left_content_WhatweOffer'>
                            <h2>Mobile App Development</h2>
                            <p className='m-0'>Our expert mobile development engineers are equipped with the latest tech stacks to deliver seamless mobile experience across platforms, including</p>
                            <ul>
                                <li>IOS</li>
                                <li>Andriod</li>
                                <li>React Native/Hybrid apps</li>
                            </ul>

                            <h2>APIs Development</h2>
                            <p className='m-0'>As API services are the backbone of software products, our teams ensure scalable implementations for maximum future customizability, cost, and speed. We specialize in building microservices and monolith architecture as per business needs.</p>
                        </div>
                        <div className='right_content_WhatweOffer'>
                            <h2>Web Application Development</h2>
                            <p className='m-0'>We specialize in developing custom websites and optimizing them to gain the best results using the latest stacks. Our experienced web application development engineers have worked across several industry verticals catering to different needs.</p>

                            <h2 className='mt-4'>Cloud Infrastructure Development</h2>
                            <p className='m-0'>With best-in-class talent in cloud and infrastructure domain, our engineers have experience in developing cloud solutions leveraging AWS, GCP, and Azure to deliver scalable deployments.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatweOffer
