import React  from 'react'

import CardsDataHere from './CardsData';
import "./Cards.css"
import { Link } from 'react-router-dom';




const Cards = () => {



    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card_handle '>
                        {
                            CardsDataHere.map((item, index) => {
                                return (
                                    <div key={index}>
                                   
                                        <div className="card text-white mx-3 mb-sm-5" style={{ width: "18rem", height: "28rem" }}>
                                            <div className="card-body">
                                                <span><img src={item.image} alt='images' /></span>
                                                <h2 style={{fontSize: "28px"}}>{item.title}</h2>
                                                
                                                <p className='m-0' style={{fontSize: "14px"}}>{item.para}</p>
                                            <Link to= "/services">    <button className='btn_sm_here m-0 mt-3'>Click Here</button> </Link>

                                            </div>
                                        </div>

                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
