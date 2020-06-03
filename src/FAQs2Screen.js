import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';

export default class FAQs2Screen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      field: '',
      fieldCopy: '',
      textarea: '',
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
  
  textInputChanged_fieldCopy = (event) => {
    this.setState({fieldCopy: event.target.value});
  }
  
  textAreaChanged_textarea = (event) => {
    this.setState({textarea: event.target.value});
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
    
    const style_elField = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      pointerEvents: 'auto',
     };
    
    const style_elFieldCopy = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      pointerEvents: 'auto',
     };
    
    const style_elTextarea = {
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
     };
    
    return (
      <div className="AppScreen FAQs2Screen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div className="appBg" style={style_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="elText">
            <div className="systemFontBold" style={style_elText}>
              <div>{this.props.locStrings.faqs_text_357370}</div>
            </div>
          </div>
          
          <div className="elText2">
            <div className="systemFontRegular" style={style_elText2}>
              <div>{this.props.locStrings.faqs_text2_857454}</div>
            </div>
          </div>
          
          <div className="elTextCopy">
            <div className="systemFontBold" style={style_elTextCopy}>
              <div>{this.props.locStrings.faqs_textcopy_939571}</div>
            </div>
          </div>
          
          <div className="elText3">
            <div className="systemFontRegular" style={style_elText3}>
              <div>{this.props.locStrings.faqs_text3_551350}</div>
            </div>
          </div>
          
          <div className="elTextCopy2">
            <div className="systemFontBold" style={style_elTextCopy2}>
              <div>{this.props.locStrings.faqs_textcopy2_1009273}</div>
            </div>
          </div>
          
          <div className="elTextCopy3">
            <div className="systemFontRegular" style={style_elTextCopy3}>
              <div>{this.props.locStrings.faqs_textcopy3_790990}</div>
            </div>
          </div>
          
          <div className="elTextCopy4">
            <div className="systemFontBold" style={style_elTextCopy4}>
              <div>{this.props.locStrings.faqs_textcopy4_56526}</div>
            </div>
          </div>
          
          <div className="elField">
            <input className="baseFont" style={style_elField} type="text" placeholder={this.props.locStrings.faqs_field_223194} onChange={this.textInputChanged_field} value={this.state.field}  />
          </div>
          
          <div className="elFieldCopy">
            <input className="baseFont" style={style_elFieldCopy} type="text" placeholder={this.props.locStrings.faqs_fieldcopy_505483} onChange={this.textInputChanged_fieldCopy} value={this.state.fieldCopy}  />
          </div>
          
          <div className="elTextarea">
            <textarea className="baseFont" style={style_elTextarea}  placeholder={this.props.locStrings.faqs_textarea_804992} onChange={this.textAreaChanged_textarea} value={this.state.textarea}  />
          </div>
          
          <div className="elButton">
            <Button className="actionFont" style={style_elButton}  color="accent" >
              {this.props.locStrings.faqs_button_1031721}
            </Button>
          </div>
        </div>
        <Appbar className="navBar">
          <div className="title">FAQs 2</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }></div>
        </Appbar>
        
      </div>
    )
  }
  
}
