import "./Footer.css"
import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'



const Footer = () => {
    return (
        <div>
            <div className="footer_background">
                <footer className="w-100 py-4 flex-shrink-0 custom_footer">
                    <div className="container py-4">
                        <div className="row gy-4 gx-5">
                            <div className="col-lg-4 col-md-6">
                                <h5 className="h1 text-white">
                                <img src="https://visionx.io/wp-content/uploads/elementor/thumbs/vx-logo-1-1-q168gmz6vg23ge9nbawn9ae1e5nrar0nnha3mhzuv4.png" alt="logo"/>
                                </h5>
                                <p className="small text-muted m-0">
                                <img src="https://visionx.io/wp-content/uploads/2022/12/ISO-Logo.svg" alt=""/>
                                <img src="https://visionx.io/wp-content/uploads/2022/12/fastlogo-db171e4a8168d88235bfb5ca063207d0-2-1.svg" alt="logo"/>
                                </p>

                            </div>
                            <div className="col-lg-2 col-md-6">
                                <h5 className="text-white mb-3">Services</h5>
                                <ul className="list-unstyled custom_footer_1">
                                    <li><Link to="/technologies" className=' hit text-decoration-none'>Technologies</Link></li>
                                    <li><Link to="/services" className=' hit text-decoration-none'>Services</Link></li>
                                    <li><Link to="/industries" className='  hit text-decoration-none'>Industries</Link></li>
                                    <li><Link to="/contact-form" className=' hit text-decoration-none'>Contact</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <h5 className="text-white mb-3">Industries</h5>
                                <ul className="list-unstyled custom_footer_1 ">
                                    <li><Link to="#" className='text-white hit text-decoration-none'>Home</Link></li>
                                    <li><Link to="#" className='text-white hit text-decoration-none'>Collection</Link></li>
                                    <li><Link to="#" className='text-white  hit text-decoration-none'>RoadMap</Link></li>
                                    <li><Link to="#" className='text-white hit text-decoration-none'>Community</Link></li>
                                </ul>
                            </div>
                           
                            <div className="col-lg-2 col-md-6">
                            <h5 className="text-white mb-3">Resources</h5>
                            <ul className="list-unstyled custom_footer_1">
                                <li><Link to="#" className='text-white hit text-decoration-none'>Blog</Link></li>
                                <li><Link to="#" className='text-white hit text-decoration-none'>Carriers</Link></li>
                               
                            </ul>
                        </div>


                            <p className="small text-muted mb-0 mt-4 text-center m-0">&copy; Copyrights. All rights reserved. <Link className="text-white text-decoration-none" to="">Arslandeveloper.com</Link></p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer
