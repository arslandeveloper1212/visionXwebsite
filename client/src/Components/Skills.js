import React from 'react'
import "./Skills.css"
import VisibilityIcon from '@mui/icons-material/Visibility';
import { BiCube } from "react-icons/bi";
import { BiMask } from "react-icons/bi";
const Skills = () => {
  return (
    <div>
      <div className='skills_bg text-white'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 col-lg-4 col-12'>
              <div className='content-left'>
                <h5>WHAT WE OFFER​</h5>
                <h1>We Work With Foundational and Emerging Tech Stacks​</h1>
              </div>
            </div>

            <div className='col-md-8 col-lg-8 col-12'>
              <div className='content-right d-lg-flex d-md-flex'>
                <div className='right_content_1 p-3'>
                  <h3 className='pt-2 pb-2'> <VisibilityIcon className='fs-1'/> Computer Visions</h3>
                  <p className='m-0'>We specialize in extracting valuable insights from visual streams, images according to industry and use cases.</p>
                  <h3 className='mt-5 pt-2 pb-2 '> <BiMask className='fs-1'/> AR/VR</h3>
                  <p className='m-0'>Our AR/VR unit is always thinking ahead in pushing boundaries on the existing form factors by creating photorealistic 3D assets and scenes for rendering across smartphones, web, and VR headsets.</p>
                </div>
                <div className='right_content_2 p-3'>
                <h3 className='pt-2 pb-2'>OCR/NLP</h3>
                <p className='m-0'>We enable extraction of data from digital images, docs, and speech to contextualize & understand semantics. </p>
                <h3 className='mt-5 pt-2 pb-2'> <BiCube className='fs-1'/> BlockChain</h3>
                <p className='m-0'>We continue to research and test practical use cases of blockchain and NFTs and partner with like-minded businesses to unlock the value behind the future of blockchain.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
