import React, { useState } from 'react';
import './Home.css';
import destinationData from '../destinationData/destinationData'
import Places from '../Places/Places';
import { useHistory } from 'react-router-dom';
const Home = () => {
    const [place,setPlace]=useState(destinationData);
    const history = useHistory();
    const handleBooking = (key) => {
        history.push(`/place/${key}`);
    }
    return (
        <div>          
            <Places handleBooking={handleBooking} key={place.key} place={place}></Places>  
        </div>
    );
};

export default Home;