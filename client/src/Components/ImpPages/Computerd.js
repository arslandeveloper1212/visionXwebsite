
import React from 'react'
import "../ImpPages/Computerd.css"


import Accordion from '../../Components/Accordion'




const Computerd = () => {


  return (
    <div>

      <div className='container'>
        <div className='row mt-5 mb-5 text-white custom'>

          <div className='col-md-6 col-lg-6 col-12 mt-3'>
            <h5>COMPUTER VISIONS</h5>
            <h1 className='mt-3 mb-3'>Retrieve Real-<br></br>Time Insights From <br></br> Video Feed Using  <br></br> Computer Vision</h1>
            <p className='m-0'>Digitally automate complex manual processes with smart Vision systems</p>
            <button className='btn_sm_here m-0 mt-3 mb-5'>Get Started</button>
          </div>
          <div className='col-md-6 col-lg-6 col-12'>
            <img src='https://visionx.io/wp-content/uploads/2022/12/Computer-Vision-Banner-Image-1.png.webp' className='img-fluid' alt='image-6' />
          </div>



        </div>

      </div>


      <div className='computerd_bg text-white'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 col-lg-4 col-12'>
              <div className='content-left-computerd px-lg-4 px-md-4'>
                <h5>
                  TECHNOLOGY​</h5>
                <h1>We Can Help You Excel in the Following Fields of Computer Vision​</h1>
              </div>
            </div>

            <div className='col-md-8 col-lg-8 col-12 d-lg-flex d-md-flex '>
              <div className='content-right d-lg-flex d-md-flex'>
                <div className='right_content_1 px-5'>
                  <h3 className='pt-2 pb-2'>  Object Detection</h3>
                  <p className='m-0'>We specialize in extracting valuable insights from visual streams, images according to industry and use cases.</p>
                  <h3 className='mt-5 pt-2 pb-2 '> Event Detection</h3>
                  <p className='m-0'>Identify events in a video sequence like fights, rush, gestures or evaluate exercise like pushups, etc.</p>
                  <h3 className='mt-5 pt-2 pb-2 '> Facial Recognition</h3>
                  <p className='m-0'>Identify faces for security or other use cases in the biometric authorization where the law permits.</p>
                </div>

              </div>


              <div className='right_content_2 px-5'>
                <h3 className='pt-2 pb-2'>Image Segmentation</h3>
                <p className='m-0'>Identify pixel-perfect segmentation in objects to understand a scene and enable overlaying of virtual elements on a person. </p>
                <h3 className='mt-5 pt-2 pb-2'>Pose Estimation</h3>
                <p className='m-0'>Extract key points of a person’s structure joints like elbows, knees, wrists, etc.</p>
                <h3 className='mt-5 pt-2 pb-2'>Pose Estimation</h3>
                <p className='m-0'>Extract key points of a person’s structure joints like elbows, knees, wrists, etc.</p>
              </div>
            </div>

            </div>
          </div>
        </div>

          

       

        <div className='comp_dataco_bg'>
        <div className='text-center'>
        <h1 className='pb-3'>Are You Getting the Most Out  of <br></br> Your Surveillance Cameras?</h1>
        <p className='m-0'>We can help you get the most out of video feeds and images for video analytics and virtual experiences <br></br> for more revenue generation. </p>
        <button className='btn_sm_here mt-4 m-0'>Get Started</button>
        </div>
        </div>

          <Accordion/>

    </div>

  )
}

export default Computerd
