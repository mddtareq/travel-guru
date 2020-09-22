import React, { useState } from 'react';
import './PlaceDetail.css';
import {useHistory, useParams } from 'react-router-dom';
import destinationData from '../destinationData/destinationData';

const PlaceDetail = () => {
    const { key } = useParams();
    const { name, details,hotels } = destinationData.find(place => place.key === key);
    const history = useHistory();
    const [start,setStart]=useState({
        start:''
    });
    const [end,setEnd]=useState({
        end:''
    });
    const submit=() => {
        history.push(`/booking/${key}/${start}/${end}`);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="detail col-md-6">
                    <h1>{name}</h1>
                    <p>{details}</p>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-5">
                <form onSubmit={submit} action="">
                <div className="booking-details row">
                    <label htmlFor="origin">Origin</label><br/>
                                <input id="origin" type="text"  required/>
                                <label htmlFor="destination">Destination</label><br/>
                                <input id="destination" type="text" value={name} />
                                <div className="col-12 col-sm-12 col-md-6">
                                <label htmlFor="end-date">To</label><br/>
                                <input onChange={event => setStart(event.target.value)} id="end-date" type="date" required/>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6">
                                <label htmlFor="end-date">To</label><br/>
                                <input onChange={event => setEnd(event.target.value)} id="end-date" type="date" required/>
                                </div>
                        <input className="btn-create" type="submit" value="Start Booking"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PlaceDetail;