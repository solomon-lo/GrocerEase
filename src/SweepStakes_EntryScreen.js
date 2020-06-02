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
      field: '',
      field2: '',
      field3: '',
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
  
  textInputChanged_field2 = (event) => {
    this.setState({field2: event.target.value});
  }
  
  textInputChanged_field3 = (event) => {
    this.setState({field3: event.target.value});
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
      fontSize: 15.3,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
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
      <div className="AppScreen SweepStakes_EntryScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div className="appBg" style={style_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="elText">
            <div className="systemFontBold" style={style_elText}>
              <div>{this.props.locStrings.deals_text_586811}</div>
            </div>
          </div>
          
          <div className="elField">
            <input className="baseFont" style={style_elField} type="text" placeholder={this.props.locStrings.deals_field_956962} onChange={this.textInputChanged_field} value={this.state.field}  />
          </div>
          
          <div className="elField2">
            <input className="baseFont" style={style_elField2} type="text" placeholder={this.props.locStrings.deals_field2_817958} onChange={this.textInputChanged_field2} value={this.state.field2}  />
          </div>
          
          <div className="elField3">
            <input className="baseFont" style={style_elField3} type="text" placeholder={this.props.locStrings.deals_field3_209602} onChange={this.textInputChanged_field3} value={this.state.field3}  />
          </div>
          
          <div className="elTextarea">
            <textarea className="baseFont" style={style_elTextarea}  placeholder={this.props.locStrings.deals_textarea_898877} onChange={this.textAreaChanged_textarea} value={this.state.textarea}  />
          </div>
          
          <div className="elButton">
            <Button className="actionFont" style={style_elButton}  color="accent" >
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
