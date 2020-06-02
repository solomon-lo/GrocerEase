//map.js
import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
//import Geocoder from 'react-map-gl-geocoder';
//import MapboxGeocoder from 'mapbox-gl';
import './map.css';
import fetchData from "./fetchData.js"
import icon from './images/apple.png'


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
        this.mounted = false;
    }

    
    componentDidMount() {
        this.mounted = true;
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
        
        map.on('move', () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });

        map.on("load", () => {
            map.loadImage(icon,
                function(error, image) {
                    if (error) throw error;
                    map.addImage('pt', image);

                    map.addSource("points", {
                        type: "geojson",
                        data: {
                            type:"FeatureCollection",
                            features: []
                        }
                    });

                    map.addLayer({
                        type: "symbol",
                        id: "pointsLayer",
                        source: "points",
                        layout: {
                            "icon-allow-overlap": true,
                            "icon-image": 'pt',
                            "icon-size": 0.2,
                        }
                    })
                });
                if (this.mounted) {
                map.on('moveend', async() => {
                    const places = await fetchData({longitude: this.state.lng, latitude: this.state.lat}); //?
                    var temp = map.getSource("points");
                    if (temp) {
                        map.getSource("points").setData(places);
                    }
                    
                });
                };
        });

        map.on("mouseenter", "pointsLayer", () => {
            /*
            if (val.features.length) {
                console.log(val.features[0]);
                var popUp = document.createElement("div");
                ReactDOM.render(<Popup feature={val.features[0]} />, popUp);

                var pop = new mapboxgl.Popup();
                pop.setLngLat(val.features[0].geometry.coordinates)
                pop.setDOMContent(popUp)
                pop.addTo(map); 
            } 
            */
           map.getCanvas().style.cursor = "crosshair";  
        });

        map.on("mouseleave", "pointsLayer", () => {
            map.getCanvas().style.cursor = "";
        })


        map.on("click", "pointsLayer", val => {
            if (val.features.length) {
                console.log(val.features[0]);
                var popUp = document.createElement("div");
                ReactDOM.render(<Popup feature={val.features[0]} />, popUp);

                var pop = new mapboxgl.Popup({});
                pop.setLngLat(val.features[0].geometry.coordinates)
                pop.setDOMContent(popUp)
                pop.addTo(map); 
            }           
        });

    }

    componentWillUnmount() {
        this.mounted=false;
        var map = this.mapContainer;
        map.remove(); 
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


const Popup = ({feature}) => {
    const name = feature.properties.title;
    const des = feature.properties.description;
    return (
        <div>
            <h3>{name}</h3>
            {des}
        </div>
    )
}


