import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Button from 'muicss/lib/react/button';

export default class AddChatroomComp extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
      name_field: '',
      general_location_field: '',
      store_field: '',
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

  textInputChanged_name_field = (event) => {
    this.setState({name_field: event.target.value});
  }
  
  textInputChanged_general_location_field = (event) => {
    this.setState({general_location_field: event.target.value});
  }
  
  textInputChanged_store_field = (event) => {
    this.setState({store_field: event.target.value});
  }
  
  onClick_elButton = (ev) => {
    this.sendData_button_to_shoppers();
  
    // Go to screen 'Chatrooms'
    this.props.appActions.goToScreen('chatrooms', { transitionId: 'fadeIn' });
  
  }
  
  
  sendData_button_to_shoppers = () => {
    const dataSheet = this.props.appActions.getDataSheet('shoppers');
  
    let row = this.props.dataSheetRow || {
    };
    row = { ...row, 
      name: this.state.name_field,
      store: this.state.store_field,
      area: this.state.general_location_field,
    };
    if (this.props.dataSheetId === dataSheet.id) {
      this.props.appActions.updateInDataSheet('shoppers', row);
    } else {
      this.props.appActions.addToDataSheet('shoppers', row);
    }
  }
  
  
  render() {
    const style_elText = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_elName_field = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      pointerEvents: 'auto',
     };
    
    const style_elGeneral_location_field = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      pointerEvents: 'auto',
     };
    
    const style_elStore_field = {
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
    
    return (
      <div className="AddChatroomComp appBg">
        <div className="layoutFlow">
          <div className="elText">
            <div className="baseFont" style={style_elText}>
              <div>{this.props.locStrings.addchatroomcomp_text_1046369}</div>
            </div>
          </div>
          
          <div className="elName_field">
            <input className="baseFont" style={style_elName_field} type="text" placeholder={this.props.locStrings.name_field} onChange={this.textInputChanged_name_field} value={this.state.name_field}  />
          </div>
          
          <div className="elGeneral_location_field">
            <input className="baseFont" style={style_elGeneral_location_field} type="text" placeholder={this.props.locStrings.general_location_field} onChange={this.textInputChanged_general_location_field} value={this.state.general_location_field}  />
          </div>
          
          <div className="elStore_field">
            <input className="baseFont" style={style_elStore_field} type="text" placeholder={this.props.locStrings.store_field} onChange={this.textInputChanged_store_field} value={this.state.store_field}  />
          </div>
          
          <div className="elButton">
            <Button className="actionFont" style={style_elButton}  color="accent" onClick={this.onClick_elButton} >
              {this.props.locStrings.addchatroomcomp_button_174973}
            </Button>
          </div>
        </div>
        
      </div>
    )
  }
  
}
