import React, { Component } from 'react';
import './App.css';

export default class SearchBar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        search_field: '',
      };
      
      this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
      this.props.onFilterChange(event.target.value); 
    }
    
    render () {
      return (
        <div>
        <form>
          <label htmlFor = "search_in"> Search for a store </label>
          <input type="text" placeholder="type here" value= {this.props.search_field} onChange={this.handleChange} />
        </form>
        </div>
      )
    }
  }