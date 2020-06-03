import React, { Component } from 'react';
import './App.css';
import btn_icon_back_sweepstakes_entry from './images/btn_icon_back_sweepstakes_entry.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';

export default class SweepStakes_EntryScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      deal_name_field: '',
      deal_email_field: '',
      deal_URL_field: '',
      deal_description_field: '',
    };
  }

  componentDidMount() {
    {
      let dataSheet = this.props.appActions.dataSheets['deals'];
      let serviceOptions = this.props.appActions.serviceOptions_deals;
      if ( !this.props.appActions.dataSheetLoaded['deals']) {
        serviceOptions.servicePath = dataSheet.expandSlotTemplateString("shoppingDeals", this.props.appActions.dataSlots);
        this.props.appActions.loadData_firebaseConnection(dataSheet, serviceOptions, true);
        this.props.appActions.dataSheetLoaded['deals'] = true;
      }
    }
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  componentWillReceiveProps(nextProps) {
  }

  textInputChanged_deal_name_field = (event) => {
    this.setState({deal_name_field: event.target.value});
  }
  
  textInputChanged_deal_email_field = (event) => {
    this.setState({deal_email_field: event.target.value});
  }
  
  textInputChanged_deal_URL_field = (event) => {
    this.setState({deal_URL_field: event.target.value});
  }
  
  textAreaChanged_deal_description_field = (event) => {
    this.setState({deal_description_field: event.target.value});
  }
  
  onClick_elButton = (ev) => {
    this.sendData_button_to_deals();
  
    // Go to screen 'Thank You!'
    this.props.appActions.goToScreen('thankyou', { transitionId: 'fadeIn' });
  
  }
  
  
  sendData_button_to_deals = () => {
    const dataSheet = this.props.appActions.getDataSheet('deals');
  
    let row = this.props.dataSheetRow || {
    };
    row = { ...row, 
      URL: this.state.deal_URL_field,
      Email: this.state.deal_email_field,
      Name: this.state.deal_name_field,
      DescriptionOfDeal: this.state.deal_description_field,
    };
    this.props.appActions.addToDataSheet('deals', row);
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
    const style_elDeal_instructions_text_area = {
      fontSize: 15.3,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    
    const style_elDeal_name_field = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      pointerEvents: 'auto',
     };
    
    const style_elDeal_email_field = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      pointerEvents: 'auto',
     };
    
    const style_elDeal_URL_field = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      pointerEvents: 'auto',
     };
    
    const style_elDeal_description_field = {
      display: 'block',
      backgroundColor: 'white',
      borderColor: 'lightGray',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      pointerEvents: 'auto',
     };
    
    const style_elButton = {
      display: 'block',
      color: 'white',
      textAlign: 'center',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen SweepStakes_EntryScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div className="appBg" style={style_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="elDeal_instructions_text_area">
            <div className="systemFontBold" style={style_elDeal_instructions_text_area}>
              <div>{this.props.locStrings.deals_text_586811}</div>
            </div>
          </div>
          
          <div className="elDeal_name_field">
            <input className="baseFont" style={style_elDeal_name_field} type="text" placeholder={this.props.locStrings.deals_field_956962} onChange={this.textInputChanged_deal_name_field} value={this.state.deal_name_field}  />
          </div>
          
          <div className="elDeal_email_field">
            <input className="baseFont" style={style_elDeal_email_field} type="text" placeholder={this.props.locStrings.deals_field2_817958} onChange={this.textInputChanged_deal_email_field} value={this.state.deal_email_field}  />
          </div>
          
          <div className="elDeal_URL_field">
            <input className="baseFont" style={style_elDeal_URL_field} type="text" placeholder={this.props.locStrings.deals_field3_209602} onChange={this.textInputChanged_deal_URL_field} value={this.state.deal_URL_field}  />
          </div>
          
          <div className="elDeal_description_field">
            <textarea className="baseFont" style={style_elDeal_description_field}  placeholder={this.props.locStrings.deals_textarea_898877} onChange={this.textAreaChanged_deal_description_field} value={this.state.deal_description_field}  />
          </div>
          
          <div className="elButton">
            <Button className="actionFont" style={style_elButton}  color="accent" onClick={this.onClick_elButton} >
              {this.props.locStrings.deals_button_382649}
            </Button>
          </div>
        </div>
        <Appbar className="navBar">
          <div className="title">Enter Into Sweepstakes</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_sweepstakes_entry} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
      </div>
    )
  }
  
}
