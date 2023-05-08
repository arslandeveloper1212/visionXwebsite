import React, {useState} from "react"
import "./NavHit.css"


import { Link } from 'react-router-dom'




function NavHit() {

  const [clicked, setClicked] = useState(false)

  const HandleClick = () => {
      setClicked(!clicked)
  }

  return (
    <div>
      <div>
        <div className='navbar_handle'>
          <div className='logo text-white'><Link to="/">
          <img src="https://visionx.io/wp-content/uploads/elementor/thumbs/vx-logo-1-1-q168gmz6vg21eqj7vp1eekt1crtc65tje4qbf7cd1c.png" alt="logo"/>
          </Link></div>
          <div className='navbar_nav'>
            <ul>
              
              <Link to= "/technologies" > <li className="hover_nav">Technologies</li> </Link>
              <Link to="/services"> <li className="hover_nav">Services</li> </Link>
              <Link to="/industries"> <li className="hover_nav">Industries</li> </Link>
             
              <Link to="/contact-form"><li className="hover_nav">Contact</li> </Link>
            </ul>


          </div>
        </div>

        {/* small devices */}
        <div onClick={HandleClick} className='menu_icons'>
          {clicked ? <i className='fa fa-close'></i> : <i className='fa fa-bars'></i>}
        </div>
        {clicked &&

          <div className='menu_handle'>
          <ul>
              
          <Link className="text-decoration-none " to= "/technologies"> <li  style={{color: "white", listStyle:"none"}} >Technologies</li> </Link>
          <Link className="text-decoration-none" to="/services"> <li  style={{color: "white", listStyle:"none"}}>Services</li> </Link>
          <Link className="text-decoration-none" to="/industries"> <li  style={{color: "white", listStyle:"none"}}>Industries</li> </Link>

          <Link className="text-decoration-none" to="/contact-form"><li  style={{color: "white", listStyle:"none"}}>Contact</li> </Link>
        </ul>
          </div>
        }


      </div>
    </div>
  );
}

export default NavHit;