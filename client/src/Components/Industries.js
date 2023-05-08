import React from 'react'
import "./Industries.css"
import { AiOutlineAntCloud } from "react-icons/ai";
import { SlBasketLoaded} from "react-icons/sl";
import {SlBulb} from "react-icons/sl";
import {SlCup} from "react-icons/sl";


const Industries = () => {
    return (
        <div>
            <div className='industries_bg'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-lg-6 col-12'>
                        <div className='indust_handle'>
                            <h5 className='indust'>INDUSTRIES</h5>
                            <h1 className='indust'>We Work Across Multiple Industries & Believe Digital Transformation Is Industry Agnostic</h1>
                            <div className='indust_indus'>
                            <h4><span className='fs-1'> <AiOutlineAntCloud/> </span> eCommerce & Retail</h4>
                            <h4> <span className='fs-1'> <SlBasketLoaded/> </span> Supply Chain & Logistics</h4>
                            <h4> <span className='fs-1'> <SlCup/> </span> Quick Service Restaurants </h4>
                            <h4> <span className='fs-1'> <SlBulb/> </span> Energy, Utilities & Power</h4>
                            </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-6 col-12'>
                        <img src='images/Industries-1.png' alt='img' className='indust_img img-fluid'/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Industries
