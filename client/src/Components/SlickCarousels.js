import React from 'react'
import Slider from "react-slick";
import "./slickCaro.css"

const SlickCarousels = () => {

  var settings = {
    dots: false,
    infinite: true,

    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      }
    ]
  };

  return (
    <div>
      <div className='container'>
        <div className='row'>

          <h5 className='mb-4 text-white'> Our Customer </h5>
          <Slider {...settings} className='text-white custom_slick'>
            <div>
              <img src='https://visionx.io/wp-content/uploads/2022/12/Accenture.png.webp' width="150" alt='image1' />
            </div>
            <div>
              <img src='https://visionx.io/wp-content/uploads/2022/12/ConocoPhilips.png.webp' width="150" alt='image2' />
            </div>
            <div>
              <img src='https://visionx.io/wp-content/uploads/2022/12/Emaar.png.webp' width="150" alt='image3' />
            </div>
            <div>
              <img src='https://visionx.io/wp-content/uploads/2022/12/KWARTS.png.webp' width="150" alt='image4' />
            </div>
            <div>
              <img src='https://visionx.io/wp-content/uploads/2022/12/M.png.webp' width="150" alt='image5' />
            </div>
            <div>
              <img src='https://visionx.io/wp-content/uploads/2022/12/MSC.png.webp' width="150" alt='image6' />
            </div>
            <div>
              <img src='https://visionx.io/wp-content/uploads/2022/12/Staples.png.webp' width="150" alt='image7' />
            </div>

          </Slider>







        </div>
      </div>
    </div>
  )
}

export default SlickCarousels
