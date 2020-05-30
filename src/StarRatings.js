import React, { Component } from 'react';
import './App.css';

export default class StarRatings extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    const style_elText = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    
    return (
      <div className="StarRatings appBg">
        <div className="layoutFlow">
          <div className="elRating">
            <div />
          </div>
          
          <div className="elText">
            <div className="headlineFont" style={style_elText}>
              <div>{this.props.locStrings.starratings_text_247528}</div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
  
}
