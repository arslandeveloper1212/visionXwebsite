import { Link } from 'react-router-dom';
import React from 'react'
import './Carosuel.css'
const Carosuel = () => {
  
  return (


    <div className='Carosuel_all'>
      <img
        className='Carosuel_image img-fluid'
        src='images/carosuel.jpg' alt='image_1' />

      <div className='Carosuel_grdient'></div>
      <div className='container'>
        <div className='row'>

          <div className='Carosuel_heading '>
            <h1>Your Software Team <br></br>for Digital <br></br> Experiences</h1>
            <p className='my-3'>We help businesses build great software and products with speed, quality, <br></br> and agility at a competitive price through a global team of product <br></br>managers, designers, and software developers.</p>
         <Link to="/contact-form"> <button className='btn_sm_here my-3'>Learn More</button> </Link>  
          </div>

        </div>
      </div>

    </div>

  )
}

export default Carosuel
