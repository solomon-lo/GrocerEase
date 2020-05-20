import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Button from 'muicss/lib/react/button';

export default class Screen2 extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      field4: '',
      field: '',
      field2: '',
      field3: '',
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

  textInputChanged_field4 = (event) => {
    this.setState({field4: event.target.value});
  }
  
  textInputChanged_field = (event) => {
    this.setState({field: event.target.value});
  }
  
  textInputChanged_field2 = (event) => {
    this.setState({field2: event.target.value});
  }
  
  textInputChanged_field3 = (event) => {
    this.setState({field3: event.target.value});
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
    const style_elText = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    
    const style_elField4 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      pointerEvents: 'auto',
     };
    
    const style_elField = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      pointerEvents: 'auto',
     };
    
    const style_elField2 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      pointerEvents: 'auto',
     };
    
    const style_elField3 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      pointerEvents: 'auto',
     };
    
    const style_elButton = {
      display: 'block',
      color: 'white',
      textAlign: 'center',
     };
    
    return (
      <div className="AppScreen Screen2" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div className="appBg" style={style_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="elText">
            <div className="baseFont" style={style_elText}>
              <div>{this.props.locStrings.screen2_text_52710}</div>
            </div>
          </div>
          
          <div className="elField4">
            <input className="baseFont" style={style_elField4} type="text" placeholder={this.props.locStrings.screen2_field4_200270} onChange={this.textInputChanged_field4} value={this.state.field4}  />
          </div>
          
          <div className="elField">
            <input className="baseFont" style={style_elField} type="text" placeholder={this.props.locStrings.screen2_field_127189} onChange={this.textInputChanged_field} value={this.state.field}  />
          </div>
          
          <div className="elField2">
            <input className="baseFont" style={style_elField2} type="text" placeholder={this.props.locStrings.screen2_field2_90146} onChange={this.textInputChanged_field2} value={this.state.field2}  />
          </div>
          
          <div className="elField3">
            <input className="baseFont" style={style_elField3} type="text" placeholder={this.props.locStrings.screen2_field3_124478} onChange={this.textInputChanged_field3} value={this.state.field3}  />
          </div>
          
          <div className="elButton">
            <Button className="actionFont" style={style_elButton}  color="accent" >
              {this.props.locStrings.screen2_button_890365}
            </Button>
          </div>
        </div>
        
      </div>
    )
  }
  
}

