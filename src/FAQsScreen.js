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
      field_faq_name: '',
      field_faq_email: '',
      field_faq_question: '',
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

  textInputChanged_field_faq_name = (event) => {
    this.setState({field_faq_name: event.target.value});
  }
  
  textInputChanged_field_faq_email = (event) => {
    this.setState({field_faq_email: event.target.value});
  }
  
  textAreaChanged_field_faq_question = (event) => {
    this.setState({field_faq_question: event.target.value});
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
      email: this.state.field_faq_email,
      name: this.state.field_faq_name,
      question: this.state.field_faq_question,
      quesiton: this.state.field_faq_question,
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
      textAlign: 'left',
     };
    const style_elText2 = {
      fontSize: 20.0,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    const style_elTextCopy = {
      fontSize: 20.0,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    const style_elText3 = {
      fontSize: 20.0,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    const style_elTextCopy2 = {
      fontSize: 20.0,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    const style_elTextCopy3 = {
      fontSize: 20.0,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    const style_elTextCopy4 = {
      fontSize: 20.0,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_elField_faq_name = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      pointerEvents: 'auto',
     };
    
    const style_elField_faq_email = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      pointerEvents: 'auto',
     };
    
    const style_elField_faq_question = {
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
            <div className="systemFontRegular" style={style_elText2}>
              <div>{this.props.locStrings.faqs2_text2_505139}</div>
            </div>
          </div>
          
          <div className="elTextCopy">
            <div className="systemFontBold" style={style_elTextCopy}>
              <div>{this.props.locStrings.faqs2_textcopy_271142}</div>
            </div>
          </div>
          
          <div className="elText3">
            <div className="systemFontRegular" style={style_elText3}>
              <div>{this.props.locStrings.faqs2_text3_482212}</div>
            </div>
          </div>
          
          <div className="elTextCopy2">
            <div className="systemFontBold" style={style_elTextCopy2}>
              <div>{this.props.locStrings.faqs2_textcopy2_771705}</div>
            </div>
          </div>
          
          <div className="elTextCopy3">
            <div className="systemFontRegular" style={style_elTextCopy3}>
              <div>{this.props.locStrings.faqs2_textcopy3_632013}</div>
            </div>
          </div>
          
          <div className="elTextCopy4">
            <div className="systemFontBold" style={style_elTextCopy4}>
              <div>{this.props.locStrings.faqs2_textcopy4_238296}</div>
            </div>
          </div>
          
          <div className="elField_faq_name">
            <input className="baseFont" style={style_elField_faq_name} type="text" placeholder={this.props.locStrings.faqs2_field_839389} onChange={this.textInputChanged_field_faq_name} value={this.state.field_faq_name}  />
          </div>
          
          <div className="elField_faq_email">
            <input className="baseFont" style={style_elField_faq_email} type="text" placeholder={this.props.locStrings.faqs2_fieldcopy_996336} onChange={this.textInputChanged_field_faq_email} value={this.state.field_faq_email}  />
          </div>
          
          <div className="elField_faq_question">
            <textarea className="baseFont" style={style_elField_faq_question}  placeholder={this.props.locStrings.faqs2_textarea_47076} onChange={this.textAreaChanged_field_faq_question} value={this.state.field_faq_question}  />
          </div>
          
          <div className="elButton">
            <Button className="actionFont" style={style_elButton}  color="accent" onClick={this.onClick_elButton} >
              {this.props.locStrings.faqs2_button_644240}
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
