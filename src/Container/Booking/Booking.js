import React, { useState } from 'react';
import './Booking.css';
import star from '../../Icon/star.png'
import { useParams } from 'react-router-dom';
import destinationData from '../destinationData/destinationData';
import Map from '../Map/Map';
const Booking = () => {
    const [place, setPlace] = useState(destinationData);
    const { key, start, end } = useParams();
    const { name, hotels, image } = destinationData.find(place => place.key === key);
    const startDate = (start).split("-");
    const endDate = (end).split("-");
    const total = 3;
    return (
        <div className="container book-details">
            <hr />
            <div className="row">
                <div className="col-md-7">
                    <div className="intro">
                        <small>252 guests stays on {startDate[1]}/{startDate[2]} to {endDate[1]}/{endDate[2]}</small>
                        <h5>Stay in {name}</h5>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mar-top">
                            <div className="row">
                                <div className="col-md-5 hotel">
                                    <img src={hotels[0].image} alt="" />
                                </div>
                                <div className="col-md-7 hotel-details">
                                    <h6>{hotels[0].name}</h6>
                                    <p className="info">4 Guests 2 bedrooms 2 beds 2 baths wifi Air conditioning kitchen</p>
                                    <p className="info">Cancellation flexibility available</p>
                                    <div className='rating d-flex justify-content-between'>
                                        <p><img src={star} alt=""></img><span className='star-rating'>{hotels[0].rating}({hotels[0].ratingUser})</span></p>
                                        <p className='price'>${hotels[0].price}/ <span className='night'>night</span> <span className='price-total'>${hotels[0].price * total} total</span> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 mar-top">
                            <div className="row">
                                <div className="col-md-5 hotel">
                                    <img src={hotels[1].image} alt="" />
                                </div>
                                <div className="col-md-7 hotel-details">
                                    <h6>{hotels[1].name}</h6>
                                    <p className="info">4 Guests 2 bedrooms 2 beds 2 baths wifi Air conditioning kitchen</p>
                                    <p className="info">Cancellation flexibility available</p>
                                    <div className='rating d-flex justify-content-between'>
                                        <p><img src={star} alt=""></img><span className='star-rating'>{hotels[1].rating}({hotels[1].ratingUser})</span></p>
                                        <p className='price'>${hotels[1].price}/ <span className='night'>night</span> <span className='price-total'>${hotels[1].price * total} total</span> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 mar-top">
                            <div className="row">
                                <div className="col-md-5 hotel">
                                    <img src={hotels[2].image} alt="" />
                                </div>
                                <div className="col-md-7 hotel-details">
                                    <h6>{hotels[2].name}</h6>
                                    <p className="info">4 Guests 2 bedrooms 2 beds 2 baths wifi Air conditioning kitchen</p>
                                    <p className="info">Cancellation flexibility available</p>
                                    <div className='rating d-flex justify-content-between'>
                                        <p><img src={star} alt=""></img><span className='star-rating'>{hotels[2].rating}({hotels[2].ratingUser})</span></p>
                                        <p className='price'>${hotels[2].price}/ <span className='night'>night</span> <span className='price-total'>${hotels[2].price * total} total</span> </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-md-5 map">
                    <Map name={name}></Map>
                </div>
            </div>
        </div>
    );
};

export default Booking;
