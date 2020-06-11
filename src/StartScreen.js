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
    let dataSheet = this.props.appActions.dataSheets['authentication'];
    let serviceOptions = this.props.appActions.serviceOptions_authentication;
    if ( !this.props.appActions.dataSheetLoaded['authentication']) {
      serviceOptions.servicePath = dataSheet.expandSlotTemplateString("authentication", this.props.appActions.dataSlots);
      this.props.appActions.loadData_firebaseConnection(dataSheet, serviceOptions, true);
      this.props.appActions.dataSheetLoaded['authentication'] = true;
    }

  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  componentWillReceiveProps(nextProps) {
  }

  onClick_elButton = (ev) => {
    
    let newVal = this.state.fieldUsername;
    this.props.appActions.updateDataSlot('ds_SlotUsername', newVal);
    // Go to screen 'Shopping Options'
    this.sendData_button_to_shoppers();
    this.props.appActions.goToScreen('shoppingoptions', { transitionId: 'fadeIn' });
  
  }
  
  sendData_button_to_shoppers = () => {
    const dataSheet = this.props.appActions.getDataSheet('authentication');
    let row = this.props.dataSheetRow || {};
      row = { ...row, 
        document_key: (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_UniqueUserID'] : ''),
        name: (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_LoginUserName'] : ''),
        gmailUniqueUserID: (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_UniqueUserID'] : ''),
        gmailAddress:(this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_userEmailAddress'] : ''),
        
      };
    console.log(row);
    this.props.appActions.addToDataSheet('authentication', row);
	}


  
  textInputChanged_fieldUsername = (event) => {
    this.setState({fieldUsername: event.target.value});
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
    
    const style_elButton = {
      display: 'block',
      color: 'white',
      textAlign: 'center',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_elFirebaseLogin = {
      pointerEvents: 'auto',
     };
    
    const value_fieldUsername = this.state.fieldUsername;
    
    const style_elFieldUsername = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      pointerEvents: 'auto',
     };
    const style_elText = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    if (this.props.appActions.dataSlots['ds_UniqueUserID'] === "") {
      return (
        <div className="AppScreen StartScreen" style={baseStyle}>
          <div className="background">
            <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
              <div className="appBg" style={style_elBackground} />
            </div>
          </div>
          
          <div className="layoutFlow" style={layoutFlowStyle}>
            <div className="elButton">
              
            </div>
            
            <div className="elFirebaseLogin">
              <div style={style_elFirebaseLogin}>
                <FirebaseLogin ref={(el)=> this._elFirebaseLogin = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
              </div>
            </div>
            
            <div className="elFieldUsername">
              <input className="baseFont" style={style_elFieldUsername} type="text" placeholder={"Enter " + this.props.locStrings.start_field_378871} onChange={this.textInputChanged_fieldUsername} value={value_fieldUsername !== undefined ? value_fieldUsername : ''}  />
            </div>
            
            <div className="elText">
              <div className="headlineFont" style={style_elText}>
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
    
    
    return (
      <div className="AppScreen StartScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div className="appBg" style={style_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="elButton">
            <Button className="actionFont" style={style_elButton}  color="accent" onClick={this.onClick_elButton} >
              {this.props.locStrings.start_button_55566}
            </Button>
          </div>

          <div className="elFirebaseLogin">
            <div style={style_elFirebaseLogin}>
              <FirebaseLogin ref={(el)=> this._elFirebaseLogin = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>

          <div className="elFieldUsername">
              <input className="baseFont" style={style_elFieldUsername} type="text" placeholder={"Enter " + this.props.locStrings.start_field_378871} onChange={this.textInputChanged_fieldUsername} value={value_fieldUsername !== undefined ? value_fieldUsername : ''}  />
            </div>

          <div className="elText" style={style_elText}>
          <p> Currently Logged in as: {this.props.appActions.dataSlots['ds_userEmailAddress']}</p>
          </div>
          
          <div className="elText">
            <div className="headlineFont" style={style_elText}>
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
  
}
