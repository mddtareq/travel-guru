import React from 'react';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Map = ({name}) => {
    const selectedPlace = name;
    const property = {
        placeOne: {
            lat: 21.433920,
            lng: 91.987030
        },
        placeTwo: {
            lat: 24.310577,
            lng: 91.725136
        },
        placeThree: {
            lat: 23.381993, 
            lng: 92.293823
        },
        placeFour: {
            lat: 22.841930,
            lng: 89.558060
        },
        zoom: 13
    };
    return (
        <div>
            <div style={{ height: '69vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBpzntSpokwa0V5wQ5HaV-nLCORWgdMX7g' }}
                defaultCenter={
                    selectedPlace === "COX'S BAZAR" ? property.placeOne 
                    : selectedPlace === "SREEMANGAL" ? property.placeTwo
                    : selectedPlace === "SAJEK" ? property.placeThree
                    : property.placeFour
                }
                defaultZoom={property.zoom}
            >
                <AnyReactComponent
                    lat={23.810331}
                    lng={23.810331}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
        </div>
    );
};

export default Map;