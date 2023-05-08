import React from 'react'
import "./IsYourBusiness.css"
import {Link} from "react-router-dom"
const IsYourBusiness = () => {
    return (
        <div className='isyourbusiness_bg'>
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <div className='text-center text-white'>
                        <h2 className='m-0'>Is Your Business Not Part of Digital World?</h2>
                        <p className='m-0 pt-4 pb-4'>Let us help you with our full-stack engineering capabilities that create unparalleled digital experiences for <br></br>businesses. Our nearshore/offshore software development cycle passes a series of steps, including <br></br> ideation, strategy, design, development, quality assurance, and release iterations to ensure the best service.</p>
                     <Link to="/industries">  <button className='btn_sm_here m-0 mt-4'>Get Started</button> </Link> 
                    </div>
                </div>
            </div>
        </div>



    )
}

export default IsYourBusiness
