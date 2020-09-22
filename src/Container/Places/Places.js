import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Places.css';
import arrow from '../../Icon/arrow.svg'
const Places = ({ place, handleBooking }) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="container indicator">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <div className="yoo row align-items-center">
                        <div className="col-md-6 places">
                            <Carousel.Caption>
                                <h3>{place[1].name}</h3>
                                <p>{place[1].description}</p>
                                <button onClick={() => handleBooking(place[1].key)} type="button" className="btn-booking">Booking <img src={arrow} alt="" /></button>
                            </Carousel.Caption>
                        </div>
                        <div className="col-md-6 photo">
                        <button  onClick={() => handleBooking(place[1].key)}>
                            <img
                                className="d-block w-100"
                                src={place[1].image}
                                alt={place[1].name}
                            />
                            <h4>{place[1].name}</h4>
                            </button>
                        </div>
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <div className="row align-items-center">
                        <div className="col-md-6 places">
                            <Carousel.Caption>
                                <h3>{place[2].name}</h3>
                                <p>{place[2].description}</p>
                                <button onClick={() => handleBooking(place[2].key)} type="button" className="btn-booking">Booking <img src={arrow} alt="" /></button>
                            </Carousel.Caption>

                        </div>
                        <div className="col-md-6 photo">
                        <button  onClick={() => handleBooking(place[2].key)}>
                            <img
                                className="d-block w-100"
                                src={place[2].image}
                                alt={place[2].name}
                            />
                            <h4>{place[2].name}</h4>
                            </button>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row align-items-center">
                        <div className="col-md-6 places">
                            <Carousel.Caption>
                                <h3>{place[3].name}</h3>
                                <p>{place[3].description}</p>
                                <button onClick={() => handleBooking(place[3].key)} type="button" className="btn-booking">Booking <img src={arrow} alt="" /></button>
                            </Carousel.Caption>

                        </div>
                        <div className="col-md-6 photo">
                        <button  onClick={() => handleBooking(place[3].key)}>
                            <img
                                className="d-block w-100"
                                src={place[3].image}
                                alt={place[3].name}
                            />
                            <h4>{place[3].name}</h4>
                            </button>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row align-items-center">
                        <div className="col-md-6 places">
                            <Carousel.Caption>
                                <h3>{place[0].name}</h3>
                                <p>{place[0].description}</p>
                                <button onClick={() => handleBooking(place[0].key)} type="button" className="btn-booking">Booking <img src={arrow} alt="" /></button>
                            </Carousel.Caption>
                        </div>
                        <div className="col-md-6 photo">
                            <button  onClick={() => handleBooking(place[0].key)}>
                            <img
                                className="d-block w-100"
                                src={place[0].image}
                                alt={place[0].name}
                            />
                            <h4>{place[0].name}</h4>
                            </button>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Places;

