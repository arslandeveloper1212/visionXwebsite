import React, {useState} from 'react'
import "./MyAccordion.css";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const MyAccordion = ({question, answer}) => {
    const [change, SetChange] = useState(false);
   
   
  return (
    <div>
    <div className='text-white myaccord_handle'>
      
   <h2 className='ques_1'
  
   onClick={()=>SetChange(true)}>{question} {change ?  <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />  } </h2> 
     
    </div>
    { 
      
        change && <p className='ans_1 m-0 ' onClick={()=>SetChange(false)}>{answer}</p>
    }
   
    </div>
  )
}

export default MyAccordion
