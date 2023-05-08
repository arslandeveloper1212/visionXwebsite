
import React from 'react'
import Slider from "react-slick";

import "./Testimonal.css"
const Testimonals = () => {
var settings = {
        dots: true,
        infinite: false,
        speed: 500,
       slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          
            
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <div className='text-center text-white testimonals_all'>
                <h5>TESTIMONIAL</h5>
                <h1>See Why Customers Love VisionX</h1>
                <div className='container'>
                    <div className='row'>
                        <div className='testi'>
                            <div className=' col-12'>
                               
                                <Slider {...settings}>
                                    <div>
                                        <div className='testi_background custom_test_1 mx-3 '>
                                       
                                            <div>
                                                <div className='testi_handle'>
                                                    <div className='testi_image'>
                                                        <img src='images/person1.jpg' alt='image1' className='testi_image_control' />
                                                    </div>
                                                    <h2 > Arslan Ahmad</h2>
                                                    <h5 >Web Developer</h5>
                                                    <p className='m-0 px-3'> "VisionX has always come through on time with every project that we have given them. They are a great company to work with because they pay attention to the details and everything is done properly."</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>

                                        <div className='testi_background custom_test_2 mx-3'>
                                            <div>
                                                <div className='testi_handle'>
                                                    <div className='testi_image'>
                                                        <img src='images/person1.jpg' alt='image1' className='testi_image_control' />
                                                    </div>
                                                    <h2 > Arslan Ahmad</h2>
                                                    <h5 >Web Developer</h5>
                                                    <p className='m-0 px-3'> "VisionX has always come through on time with every project that we have given them. They are a great company to work with because they pay attention to the details and everything is done properly."</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div>

                                        <div className='testi_background custom_test_3 mx-3 '>
                                            <div>
                                                <div className='testi_handle'>
                                                    <div className='testi_image'>
                                                        <img src='images/person1.jpg' alt='image1' className='testi_image_control' />
                                                    </div>
                                                    <h2 > Arslan Ahmad</h2>
                                                    <h5 >Web Developer</h5>
                                                    <p className='m-0 px-3'> "VisionX has always come through on time with every project that we have given them. They are a great company to work with because they pay attention to the details and everything is done properly."</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    
                                   
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonals
