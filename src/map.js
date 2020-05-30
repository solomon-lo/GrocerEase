//map.js
import React from 'react';
import mapboxgl from 'mapbox-gl';
//import Geocoder from 'react-map-gl-geocoder';
//import MapboxGeocoder from 'mapbox-gl';
import './map.css';


mapboxgl.accessToken = 'pk.eyJ1IjoiZ3JvY2VyZWFzZSIsImEiOiJja2FrZTl4YWgwbzhjMnlwZHh0bG9tb2FxIn0.24dvEshJiFjdusaNZYAP5A';
var MapboxGeocoder = require('@mapbox/mapbox-gl-geocoder');
export default class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: -118,
            lat: 34,
            zoom: 8,
            location: '',
        };
    }

    
    componentDidMount() {
        var map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });

        var geocoder = new MapboxGeocoder({
            container: this.geoContainer,
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl,
            flyTo: {
                bearing: 0,
                speed: 0.5,
                curve: 0.5,
            },
        });

        map.addControl(geocoder);
/*
        map.addControl( () => {
            new MapboxGeocoder({
                container: this.mapContainer,
                accessToken: mapboxgl.accessToken,
                mapboxgl: mapboxgl,
            })}
        ); */
        
        map.on('move', () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });

        geocoder.on('result', (result) => {
            this.props.setLocation(result.result["place_name_en-US"]);
            console.log(this.props.location);
         });

 
    }



    render() {

        return (
            <div>
                <div className='sidebarStyle'>
                    <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
                </div>
                <div ref={el => this.mapContainer = el} className='mapContainer' />
                <div ref={el => this.geoContainer = el} className='geoContainer' />
            </div>
        )
    }
}



