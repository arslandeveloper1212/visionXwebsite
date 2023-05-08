import React, { useState } from 'react'
import {questions} from './api'
import MyAccordion from './MyAccordion';
import "./Accordion.css";
const Accordion = () => {
 const [state, SetState] = useState(questions);
 console.log(state);
  return (
    <div className='container'>
    <section className='main-dev'>
    <h1 className='text-white text-center mb-5 fw-bold'>Frequently asked questions</h1>
      {
        state.map((item)=>{
          return <MyAccordion key={item.id} {...item}/>
        })
      }
      </section>
    </div>
  )
}

export default Accordion
