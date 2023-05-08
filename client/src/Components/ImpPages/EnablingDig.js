import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import datatwohere from "../ImpPages/Data2"
const EnablingDig = ({ stitle, title, heading, para }) => {
    const [datatwo, SetDatatwo] = useState(datatwohere);
    console.log(datatwo)
    return (
        <div>
            <div className='enablingDig_bg text-white'>
                <div className='container'>
                    <div className='row'>
                        <div className=' col-lg-4 col-12'>
                            <h5>{stitle}</h5>
                            <h2 className='main_enabling' style={{ fontSize: "52px" }}>{title}</h2>
                            {
                                datatwo.map((item) => {
                                    return (
                                        <div>
                                            <h2 className='mt-5 mx-5' style={{ fontSize: "32px" }}>{item.heading}</h2>
                                            <p className='m-0 mx-5' style={{ fontSize: "18px" }}>{item.paragraph}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className=' col-lg-8 col-12 '>
                            <img src='https://visionx.io/wp-content/uploads/2022/12/eCommerce-and-Retail-Illustration-1.png.webp' className='enablingDig_img' alt='' />
                        </div>


                    </div>
                </div>

               
            </div>

            <div className='container'>
            <div className='row'>
                <div className='enabling_bg_two'>
                    <div className='text-center'>
                        <h1>{heading}</h1>
                        <p className='m-0'>{para}</p>
                     <Link to="/services">  <button className='btn_sm_here mt-5 m-0'>Discover More</button> </Link> 
                     </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default EnablingDig
