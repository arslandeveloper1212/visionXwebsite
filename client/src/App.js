import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css"


import NavHit from './Components/NavHit'

import Footer from './Components/Footer'
import { Routes,Route } from 'react-router-dom';
import TechnologyCon from './Components/Pages/TechnologyCon';
import Services from './Components/Pages/Services';
import Indux from './Components/Pages/Indux';

import Home from './Components/Home';
import ContactForm from './Components/Pages/ContactForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div className='app'>
   
  <NavHit/>
    <Routes>
    <Route exact path='/' element= {<Home/>}/>
    <Route exact path='/technologies' element= {<TechnologyCon/>}/>
    <Route exact path='/services' element= {<Services/>}/>
    <Route exact path='/industries' element= {<Indux/>}/>
  
    <Route exact path='/contact-form' element= {<ContactForm/>}/>

    
    </Routes>
    
    
       <Footer/>
       <ToastContainer />
    </div>
   
  );
}

export default App;
