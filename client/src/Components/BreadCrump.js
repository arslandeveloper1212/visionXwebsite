import React from 'react'
import { Link } from 'react-router-dom'
import './BreadCrump.css'

const BreadCrump = () => {
    return (
        <div className='breadcrump_all'>
            <div className='container'>
                <div className='row'>
                   
                        <div className='col-md-6 col-lg-6 col-12'>
                            <div className='breadCrump_text text-white'>
                                <h5>How we Help</h5>
                                <h2>Deliver Digital <br></br>Experiences Better Than <br></br> Anyone!</h2>
                                <p>VisionX is your one-stop bespoke software shop. We align with your priorities, <br></br> move fast, and deliver quality software that significantly grows your brand. <br></br> Start with us anywhere in your product lifecycle journey.</p>
                           <Link to="/contact-form">    <button className='btn_here mt-4'>Get Started</button> </Link> 
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-6 col-12'>
                            <div className='breadCrump_video_here'>
                                <video src='./video/vision.mp4' autoPlay loop muted className='video_here' />
                            </div>

                        </div>
                    
                </div>
            </div>
        </div>
    )
}

export default BreadCrump
