//map.js
import React from 'react';
import mapboxgl from 'mapbox-gl';
//import Geocoder from 'react-map-gl-geocoder';
//import MapboxGeocoder from 'mapbox-gl';
import './mapPost.css';


mapboxgl.accessToken = 'pk.eyJ1IjoiZ3JvY2VyZWFzZSIsImEiOiJja2FrZTl4YWgwbzhjMnlwZHh0bG9tb2FxIn0.24dvEshJiFjdusaNZYAP5A';
var MapboxGeocoder = require('@mapbox/mapbox-gl-geocoder');

export default class Map2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: -118,
            lat: 34,
            zoom: 8,
            location: '',
            mounted: false,
        };
    }

    
    componentDidMount() {
        var map2 = new mapboxgl.Map({
            container: this.mapContainer2,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });

        var geocoder = new MapboxGeocoder({
            container: this.geoContainer2,
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl,
            placeholder: 'Enter store address',
            flyTo: {
                bearing: 0,
                speed: 0.5,
                curve: 0.5,
            },
        });

        map2.addControl(geocoder);
/*
        map.addControl( () => {
            new MapboxGeocoder({
                container: this.mapContainer,
                accessToken: mapboxgl.accessToken,
                mapboxgl: mapboxgl,
            })}
        ); */
        
        map2.on('move', () => {
            this.setState({
                lng: map2.getCenter().lng.toFixed(4),
                lat: map2.getCenter().lat.toFixed(4),
                zoom: map2.getZoom().toFixed(2)
            });
        });
        if (this.state.mounted) {
        geocoder.on('result', (result) => {
            this.props.setLocation(result.result); //push JSON object onto database
            console.log(this.props.location);
         });
         this.setState({mounted: true});
        }
    }     

    componentWillUnmount() {
        var map2 = this.mapContainer2;
        this.setState({mounted: false});
        map2.remove();
    }

    render() {

        return (
            <div>
                <div ref={el => this.mapContainer2 = el} className='mapContainer2' />
                <div ref={el => this.geoContainer2 = el} className='geoContainer' />
            </div>
        )
    }
}



