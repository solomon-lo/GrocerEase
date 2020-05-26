import React, { Component } from 'react';
import './App.css';
import SearchBar from './searchBar.js'
import Map from './map.js'

export default class MapScreen extends Component {
    constructor(props) {
        super(props);        
        this.state = {
          search_field: '',
        };
    
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }
    
      handleSearchChange(search_field) {
        this.setState({
          search_field: search_field,
        })
      }

    render() {
        return (
            <div>
              <Map></Map>
            </div>
        )
    }
}