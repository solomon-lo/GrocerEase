import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Button from 'muicss/lib/react/button';

export default class AddChatroomComp extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
      fieldChatroomName: '',
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

  textInputChanged_fieldChatroomName = (event) => {
    this.setState({fieldChatroomName: event.target.value});
  }
  
  onClick_elButton = (ev) => {
    this.sendData_button_to_chatroom();
  
    // Go to screen 'Chatrooms'
    this.props.appActions.goToScreen('chatrooms', { transitionId: 'fadeIn' });
  
  }
  
  
  sendData_button_to_chatroom = () => {
    const dataSheet = this.props.appActions.getDataSheet('chatroom');
  
    let row = this.props.dataSheetRow || {
    };
    row = { ...row, 
      chatroom_name: this.state.fieldChatroomName,
    };
    if (this.props.dataSheetId === dataSheet.id) {
      this.props.appActions.updateInDataSheet('chatroom', row);
    } else {
      this.props.appActions.addToDataSheet('chatroom', row);
    }
  }
  
  
  render() {
    const style_elText = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_elFieldChatroomName = {
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
          
          <div className="elFieldChatroomName">
            <input className="baseFont" style={style_elFieldChatroomName} type="text" placeholder={this.props.locStrings.addchatroomcomp_field_1030274} onChange={this.textInputChanged_fieldChatroomName} value={this.state.fieldChatroomName}  />
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
