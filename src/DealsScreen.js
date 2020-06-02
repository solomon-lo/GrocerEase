import React, { Component } from 'react';
import './App.css';
import btn_icon_back_deals from './images/btn_icon_back_deals.png';

// UI framework component imports
import Appbar from 'muicss/lib/react/appbar';

export default class DealsScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      field: '',
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

  textInputChanged_field = (event) => {
    this.setState({field: event.target.value});
  }
  
  render() {
    let layoutFlowStyle = {};
    let baseStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_elBackground = {
      width: '100%',
      height: '100%',
     };
    const style_elBackground_outer = {
      backgroundColor: '#f6f6f6',
     };
    
    const style_elField = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen DealsScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div className="appBg" style={style_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="elField">
            <input className="baseFont" style={style_elField} type="text" placeholder={this.props.locStrings.deals_field_956962} onChange={this.textInputChanged_field} value={this.state.field}  />
          </div>
        </div>
        <Appbar className="navBar">
          <div className="title">Deals</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_deals} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
      </div>
    )
  }
  
}
