import React, { Component } from 'react';
import './App.css';
import btn_icon_back_faqs from './images/btn_icon_back_faqs.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';

export default class FAQsScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      field_name_element_faq: '',
      field_email_element_faq: '',
      field_question_element_faq: '',
    };
  }

  componentDidMount() {
    {
      let dataSheet = this.props.appActions.dataSheets['faqDataSheet'];
      let serviceOptions = this.props.appActions.serviceOptions_faqDataSheet;
      if ( !this.props.appActions.dataSheetLoaded['faqDataSheet']) {
        serviceOptions.servicePath = dataSheet.expandSlotTemplateString("faqUserDatabase", this.props.appActions.dataSlots);
        this.props.appActions.loadData_firebaseConnection(dataSheet, serviceOptions, true);
        this.props.appActions.dataSheetLoaded['faqDataSheet'] = true;
      }
    }
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  componentWillReceiveProps(nextProps) {
  }

  textAreaChanged_field_name_element_faq = (event) => {
    this.setState({field_name_element_faq: event.target.value});
  }
  
  textAreaChanged_field_email_element_faq = (event) => {
    this.setState({field_email_element_faq: event.target.value});
  }
  
  textAreaChanged_field_question_element_faq = (event) => {
    this.setState({field_question_element_faq: event.target.value});
  }
  
  onClick_elButton = (ev) => {
    this.sendData_button_to_faqDataSheet();
  
    // Go to screen 'Thanks!'
    this.props.appActions.goToScreen('thanks', { transitionId: 'fadeIn' });
  
  }
  
  
  sendData_button_to_faqDataSheet = () => {
    const dataSheet = this.props.appActions.getDataSheet('faqDataSheet');
  
    let row = this.props.dataSheetRow || {
    };
    row = { ...row, 
      email: this.state.field_email_element_faq,
      question: this.state.field_question_element_faq,
      name: this.state.field_name_element_faq,
    };
    this.props.appActions.addToDataSheet('faqDataSheet', row);
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
      fontSize: 20.0,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    const style_elText2 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    const style_elText3 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    const style_elText4 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    const style_elText5 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    const style_elText6 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    const style_elText7 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    
    const style_elField_name_element_faq = {
      display: 'block',
      backgroundColor: 'white',
      borderColor: 'lightGray',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      pointerEvents: 'auto',
     };
    
    const style_elField_email_element_faq = {
      display: 'block',
      backgroundColor: 'white',
      borderColor: 'lightGray',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      pointerEvents: 'auto',
     };
    
    const style_elField_question_element_faq = {
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
      <div className="AppScreen FAQsScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div className="appBg" style={style_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="elText">
            <div className="systemFontBold" style={style_elText}>
              <div>{this.props.locStrings.faqs2_text_810573}</div>
            </div>
          </div>
          
          <div className="elText2">
            <div className="baseFont" style={style_elText2}>
              <div>{this.props.locStrings.faqs_text2_456705}</div>
            </div>
          </div>
          
          <div className="elText3">
            <div className="headlineFont" style={style_elText3}>
              <div>{this.props.locStrings.faqs_text3_873299}</div>
            </div>
          </div>
          
          <div className="elText4">
            <div className="baseFont" style={style_elText4}>
              <div>{this.props.locStrings.faqs_text4_210132}</div>
            </div>
          </div>
          
          <div className="elText5">
            <div className="headlineFont" style={style_elText5}>
              <div>{this.props.locStrings.faqs_text5_593140}</div>
            </div>
          </div>
          
          <div className="elText6">
            <div className="baseFont" style={style_elText6}>
              <div>{this.props.locStrings.faqs_text6_621354}</div>
            </div>
          </div>
          
          <div className="elText7">
            <div className="headlineFont" style={style_elText7}>
              <div>{this.props.locStrings.faqs_text7_630743}</div>
            </div>
          </div>
          
          <div className="elField_name_element_faq">
            <textarea className="baseFont" style={style_elField_name_element_faq}  placeholder={this.props.locStrings.faqs_textarea_524702} onChange={this.textAreaChanged_field_name_element_faq} value={this.state.field_name_element_faq}  />
          </div>
          
          <div className="elField_email_element_faq">
            <textarea className="baseFont" style={style_elField_email_element_faq}  placeholder={this.props.locStrings.faqs_textarea_768349} onChange={this.textAreaChanged_field_email_element_faq} value={this.state.field_email_element_faq}  />
          </div>
          
          <div className="elField_question_element_faq">
            <textarea className="baseFont" style={style_elField_question_element_faq}  placeholder={this.props.locStrings.faqs_textarea_142756} onChange={this.textAreaChanged_field_question_element_faq} value={this.state.field_question_element_faq}  />
          </div>
          
          <div className="elButton">
            <Button className="actionFont" style={style_elButton}  color="accent" onClick={this.onClick_elButton} >
              {this.props.locStrings.faqs_button_941431}
            </Button>
          </div>
        </div>
        <Appbar className="navBar">
          <div className="title">FAQs</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_faqs} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
      </div>
    )
  }
  
}
