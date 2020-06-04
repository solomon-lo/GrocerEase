//map.js
import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
//import Geocoder from 'react-map-gl-geocoder';
//import MapboxGeocoder from 'mapbox-gl';
import './map.css';
import fetchData from "./fetchData.js"
import icon from './images/apple.png'
import icon2 from './images/apple2.png'


mapboxgl.accessToken = 'pk.eyJ1IjoiZ3JvY2VyZWFzZSIsImEiOiJja2FrZTl4YWgwbzhjMnlwZHh0bG9tb2FxIn0.24dvEshJiFjdusaNZYAP5A';
var MapboxGeocoder = require('@mapbox/mapbox-gl-geocoder');

export default class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: -118.4,
            lat: 34.0,
            zoom: 8,
            location: '',
            data: {},
            first_renders: 0,
        };
        this.mounted = false;
    }

    
    componentDidMount() {
        console.log(this.props)
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
                        },
                        //cluster: true,
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
                }
            );

            

        });

        map.on('render', () => {
            //const places1 = await fetchData({longitude: this.state.lng, latitude: this.state.lat}); //?
            if (this.state.first_renders <= 0) {
                this.setState({first_renders: this.state.first_renders +=1});
                var feats = [];
                var existing = [];
                var places = {type: 'FeatureCollection', features: feats}
                var i;
                var j = 0;
                for (i = 0; i < this.props.items.length; i++) {
                    var temp = this.props.items[i].store_address.center;
                    var ind = existing.indexOf(String(temp));
                    console.log(i)
                    if (ind == -1) {
                        existing.push(String(temp));
                        feats.push(this.props.items[i].store_address);
                        feats[j].properties.title = this.props.items[i].store_address.text;
                        feats[j].properties.shoppers = []
                        feats[j].properties.shoppers.push(this.props.items[i].chatroom_name);
                        feats[j].properties.metadata = []
                        feats[j].properties.metadata.push(this.props.items[i].document_key);
                        j++;
                    }
                    else {
                        feats[ind].properties.shoppers.push(this.props.items[i].chatroom_name);
                        feats[ind].properties.metadata.push(this.props.items[i].document_key);
                        console.log("hello")
                    }
                }
                
                var temp = map.getSource("points");
                if (temp) {
                    map.getSource("points").setData(places);
                }
            }
        });


        map.on('moveend', () => {
                //const places1 = await fetchData({longitude: this.state.lng, latitude: this.state.lat}); //?
                var feats = [];
                var existing = [];
                var places = {type: 'FeatureCollection', features: feats}
                var i;
                var j = 0;
                for (i = 0; i < this.props.items.length; i++) {
                    var temp = this.props.items[i].store_address.center;
                    var ind = existing.indexOf(String(temp));
                    console.log(i)
                    if (ind == -1) {
                        existing.push(String(temp));
                        feats.push(this.props.items[i].store_address);
                        feats[j].properties.title = this.props.items[i].store_address.text;
                        feats[j].properties.shoppers = []
                        feats[j].properties.shoppers.push(this.props.items[i].chatroom_name);
                        feats[j].properties.metadata = []
                        feats[j].properties.metadata.push(this.props.items[i].document_key);
                        j++;
                    }
                    else {
                        feats[ind].properties.shoppers.push(this.props.items[i].chatroom_name);
                        feats[ind].properties.metadata.push(this.props.items[i].document_key);
                        console.log("hello")
                    }
                }
                
                var temp = map.getSource("points");
                if (temp) {
                    map.getSource("points").setData(places);
                }
        });
        

        map.on("mouseenter", "pointsLayer", () => {

            map.getCanvas().style.cursor = "crosshair";  
        });

        map.on("mouseleave", "pointsLayer", () => {
            map.getCanvas().style.cursor = "";
        })


        map.on("click", "pointsLayer", val => {
            if (val.features.length) {
                var popUp = document.createElement("div");
                var doc_keys = val.features[0].properties.metadata;
                ReactDOM.render(<Popup feature={val.features[0]} 
                    onClick={() => this.props.popupClick(doc_keys)}/>, popUp);

                var pop = new mapboxgl.Popup({});
                console.log(typeof(val.features[0].properties.metadata))
                pop.setLngLat(val.features[0].geometry.coordinates)
                pop.setDOMContent(popUp)
                pop.addTo(map); 
            }           
        });

    }

    componentDidUpdate() {

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


const Popup = (props) => {
    //const name = feature.properties.description;
    var shoppers = [];
    shoppers = shoppers.concat(props.feature.properties.shoppers);
    console.log(typeof(shoppers))
    const store = props.feature.properties.title;
    /*
    const listItems = shoppers.map((shoppers) =>
        <li>{shoppers}</li>
    );*/
    return (
        <div>
            <p>{store}</p>
            <ul>{shoppers}</ul>
            <button onClick={props.onClick}>See Shoppers</button> {/* doesn't do anything yet */}
        </div>
    )
}


