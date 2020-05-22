import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Button from 'muicss/lib/react/button';

export default class AddChatroomComp extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
      field_shopper_name: '',
      field_shopper_time: '',
      field_shopper_store: '',
      field_shopper_city: '',
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

  textInputChanged_field_shopper_name = (event) => {
    this.setState({field_shopper_name: event.target.value});
  }
  
  onClick_elButton = (ev) => {
    this.sendData_button_to_shoppers();
  
    this.sendData_button_to_chatroom();
  
    // Go to screen 'Chatrooms'
    this.props.appActions.goToScreen('chatrooms', { transitionId: 'fadeIn' });
  
  }
  
  
  textInputChanged_field_shopper_time = (event) => {
    this.setState({field_shopper_time: event.target.value});
  }
  
  textInputChanged_field_shopper_store = (event) => {
    this.setState({field_shopper_store: event.target.value});
  }
  
  textInputChanged_field_shopper_city = (event) => {
    this.setState({field_shopper_city: event.target.value});
  }
  
  sendData_button_to_shoppers = () => {
    const dataSheet = this.props.appActions.getDataSheet('shoppers');
  
    let row = this.props.dataSheetRow || {
    };
    row = { ...row, 
      store: this.state.field_shopper_store,
      area: this.state.field_shopper_city,
      name: this.state.field_shopper_name,
      time: this.state.field_shopper_time,
    };
    if (this.props.dataSheetId === dataSheet.id) {
      this.props.appActions.updateInDataSheet('shoppers', row);
    } else {
      this.props.appActions.addToDataSheet('shoppers', row);
    }
  }
  
  
  sendData_button_to_chatroom = () => {
    const dataSheet = this.props.appActions.getDataSheet('chatroom');
  
    let row = this.props.dataSheetRow || {
    };
    row = { ...row, 
      document_key: this.state.field_shopper_store,
      chatroom_name: this.state.field_shopper_name,
    };
    if (this.props.dataSheetId === dataSheet.id) {
      this.props.appActions.updateInDataSheet('chatroom', row);
    } else {
      this.props.appActions.addToDataSheet('chatroom', row);
    }
  }
  
  
  render() {
    const style_elIntro = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_elField_shopper_name = {
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
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    const style_elField_shopper_time = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      pointerEvents: 'auto',
     };
    
    const style_elField_shopper_store = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      pointerEvents: 'auto',
     };
    
    const style_elField_shopper_city = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      pointerEvents: 'auto',
     };
    
    return (
      <div className="AddChatroomComp appBg">
        <div className="layoutFlow">
          <div className="elIntro">
            <div className="baseFont" style={style_elIntro}>
              <div>{this.props.locStrings.addchatroomcomp_text_1046369}</div>
            </div>
          </div>
          
          <div className="elField_shopper_name">
            <input className="baseFont" style={style_elField_shopper_name} type="text" placeholder={this.props.locStrings.shopper_name_field} onChange={this.textInputChanged_field_shopper_name} value={this.state.field_shopper_name}  />
          </div>
          
          <div className="elButton">
            <Button className="actionFont" style={style_elButton}  color="accent" onClick={this.onClick_elButton} >
              {this.props.locStrings.addchatroomcomp_button_174973}
            </Button>
          </div>
          
          <div className="elField_shopper_time">
            <input className="baseFont" style={style_elField_shopper_time} type="text" placeholder={this.props.locStrings.shopper_time_field} onChange={this.textInputChanged_field_shopper_time} value={this.state.field_shopper_time}  />
          </div>
          
          <div className="elField_shopper_store">
            <input className="baseFont" style={style_elField_shopper_store} type="text" placeholder={this.props.locStrings.shopper_store_field} onChange={this.textInputChanged_field_shopper_store} value={this.state.field_shopper_store}  />
          </div>
          
          <div className="elField_shopper_city">
            <input className="baseFont" style={style_elField_shopper_city} type="text" placeholder={this.props.locStrings.shopper_city_field} onChange={this.textInputChanged_field_shopper_city} value={this.state.field_shopper_city}  />
          </div>
        </div>
        
      </div>
    )
  }
  
}
