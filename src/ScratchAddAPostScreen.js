import React, { Component } from 'react';
import './App.css';
import btn_icon_back_scratchaddapost from './images/btn_icon_back_scratchaddapost.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';
import Map2 from './map_for_post.js';

export default class ScratchAddAPostScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      input_name_post_screen: '',
      input_store_post_screen: '',
      input_time_post_screen: '',
      input_address_post_screen: {},

    };
  }

  componentDidMount() {
    {
      let dataSheet = this.props.appActions.dataSheets['chatroom'];
      let serviceOptions = this.props.appActions.serviceOptions_chatroom;
      if ( !this.props.appActions.dataSheetLoaded['chatroom']) {
        serviceOptions.servicePath = dataSheet.expandSlotTemplateString("messaging", this.props.appActions.dataSlots);
        this.props.appActions.loadData_firebaseConnection(dataSheet, serviceOptions, true);
        this.props.appActions.dataSheetLoaded['chatroom'] = true;
      }
    }
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  componentWillReceiveProps(nextProps) {
  }

  textInputChanged_input_name_post_screen = (event) => {
    this.setState({input_name_post_screen: event.target.value});
  }
  
  textInputChanged_input_store_post_screen = (event) => {
    this.setState({input_store_post_screen: event.target.value});
  }
  
  textInputChanged_input_time_post_screen = (event) => {
    this.setState({input_time_post_screen: event.target.value});
  }
  
  textInputChanged_field_shopper_city = (value) => {
    this.setState({input_address_post_screen: value});
  }

  onClick_elSubmit_post_button = (ev) => {
    this.sendData_submit_post_button_to_chatroom();
  
    // Go to screen 'Shopping Options'
    this.props.appActions.goToScreen('shoppingoptions', { transitionId: 'fadeIn' });
  
  }
  
  
  sendData_submit_post_button_to_chatroom = () => {
    const dataSheet = this.props.appActions.getDataSheet('chatroom');
  
    let row = this.props.dataSheetRow || {
    };
    row = { ...row, 
      store_name: this.state.input_store_post_screen,
      chatroom_time: this.state.input_time_post_screen,
      chatroom_name: this.state.input_name_post_screen,
      store_address: this.state.input_address_post_screen,
    };
    this.props.appActions.addToDataSheet('chatroom', row);
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
    
    const style_elInput_name_post_screen = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      pointerEvents: 'auto',
     };
    
    const style_elInput_store_post_screen = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      pointerEvents: 'auto',
     };
    
    const style_elInput_time_post_screen = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      pointerEvents: 'auto',
     };
    
    const style_elSubmit_post_button = {
      display: 'block',
      color: 'white',
      textAlign: 'center',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen ScratchAddAPostScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div className="appBg" style={style_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="elInput_name_post_screen">
            <input className="baseFont" style={style_elInput_name_post_screen} type="text" placeholder={this.props.locStrings.scratchaddapost_field_720820} onChange={this.textInputChanged_input_name_post_screen} value={this.state.input_name_post_screen}  />
          </div>
          
          <div className="elSpacer">
            <div />
          </div>
          
          <div className="elInput_store_post_screen">
            <input className="baseFont" style={style_elInput_store_post_screen} type="text" placeholder={this.props.locStrings.scratchaddapost_field2_623918} onChange={this.textInputChanged_input_store_post_screen} value={this.state.input_store_post_screen}  />
          </div>
          
          <div className="elInput_time_post_screen">
            <input className="baseFont" style={style_elInput_time_post_screen} type="text" placeholder={this.props.locStrings.scratchaddapost_field_871151} onChange={this.textInputChanged_input_time_post_screen} value={this.state.input_time_post_screen}  />
          </div>

          <div className="mapstyle">
            <Map2 setLocation = {this.textInputChanged_field_shopper_city}> </Map2>
          </div>
          
          <div className="elSubmit_post_button">
            <Button className="actionFont" style={style_elSubmit_post_button}  color="accent" onClick={this.onClick_elSubmit_post_button} >
              {this.props.locStrings.scratchaddapost_button_719406}
            </Button>
          </div>
        </div>
        <Appbar className="navBar">
          <div className="title">Add A Shopper Post</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_scratchaddapost} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
      </div>
    )
  }
  
}
