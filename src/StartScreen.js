import React, { Component } from 'react';
import './App.css';
import FirebaseLogin from './FirebaseLogin';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';

export default class StartScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo, sender_username

  constructor(props) {
    super(props);
    
    this.state = {
      fieldUsername: this.props.sender_username || '',
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

  // --- Functions for component state index 0 (1 of 2) --- 
  
  onClick_state0_elButton = (ev) => {
    let newVal = "button";
    this.props.appActions.updateDataSlot('(null)', newVal);
  
    // Go to screen 'Shopping Options'
    this.props.appActions.goToScreen('shoppingoptions', { transitionId: 'fadeIn' });
  
  }
  
  
  textInputChanged_fieldUsername = (event) => {
    this.setState({fieldUsername: event.target.value});
    this.props.appActions.updateDataSlot("ds_SlotUsername", event.target.value);
  }
  
  renderState0() {
    let layoutFlowStyle = {};
    let baseStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_state0_elBackground = {
      width: '100%',
      height: '100%',
     };
    const style_state0_elBackground_outer = {
      backgroundColor: '#f6f6f6',
     };
    
    const style_state0_elButton = {
      display: 'block',
      color: 'white',
      textAlign: 'center',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_state0_elFirebaseLogin618129 = {
      pointerEvents: 'auto',
     };
    
    const value_fieldUsername = this.state.fieldUsername;
    
    const style_state0_elFieldUsername = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      pointerEvents: 'auto',
     };
    const style_state0_elText = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    
    return (
      <div className="AppScreen StartScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight state0_elBackground" style={style_state0_elBackground_outer}>
            <div className="appBg" style={style_state0_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="state0_elButton">
            <Button className="actionFont" style={style_state0_elButton}  color="accent" onClick={this.onClick_state0_elButton} >
              {this.props.locStrings.start_button_55566}
            </Button>
          </div>
          
          <div className="state0_elFirebaseLogin618129">
            <div style={style_state0_elFirebaseLogin618129}>
              <FirebaseLogin ref={(el)=> this._state0_elFirebaseLogin618129 = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
          
          <div className="state0_elFieldUsername">
            <input className="baseFont" style={style_state0_elFieldUsername} type="text" placeholder={this.props.locStrings.start_field_378871} onChange={this.textInputChanged_fieldUsername} value={value_fieldUsername !== undefined ? value_fieldUsername : ''}  />
          </div>
          
          <div className="state0_elText">
            <div className="headlineFont" style={style_state0_elText}>
              <div>{this.props.locStrings.start_text_885201}</div>
            </div>
          </div>
        </div>
        <Appbar className="navBar">
          <div className="title">Start</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }></div>
        </Appbar>
        
      </div>
    )
  }
  
  // --- Functions for component state index 1 (2 of 2) --- 
  
  renderState1() {
    let layoutFlowStyle = {};
    let baseStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_state1_elFirebaseLogin618129 = {
      pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen StartScreen" style={baseStyle}>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="state1_elFirebaseLogin618129">
            <div style={style_state1_elFirebaseLogin618129}>
              <FirebaseLogin ref={(el)=> this._state1_elFirebaseLogin618129 = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
        </div>
        <Appbar className="navBar">
          <div className="title">Start</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }></div>
        </Appbar>
        
      </div>
    )
  }
  
  
  render() {
    switch (0) {
      default:
      case 0:
        return this.renderState0();
      case 1:
        return this.renderState1();
    }
  }
  
}
