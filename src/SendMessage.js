import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Button from 'muicss/lib/react/button';

export default class SendMessage extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
      textareaMessage: '',
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

  textAreaChanged_textareaMessage = (event) => {
    this.setState({textareaMessage: event.target.value});
  }
  
  onClick_elButton = (ev) => {
    this.sendData_button_to_chatmessages();
  
    // Clear internal state for data-providing elements in this component
    this.setState({
      textareaMessage: "",
    });
  
  }
  
  
  sendData_button_to_chatmessages = () => {
    const dataSheet = this.props.appActions.getDataSheet('chatmessages');
  
    let row = this.props.dataSheetRow || {
    };
    row = { ...row, 
      sender_username: (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_SlotUsername'] : ''),
      message_body: this.state.textareaMessage,
    };
  
    const transformData = (input) => {
        // This function modifies the value saved to the data sheet.
      // There is a variable named 'input' that provides the input values:
      // it's a JavaScript object with properties that contain all the
      // values collected from the UI.
      
      var currentDate = new Date();
      input.timestamp=currentDate.getTime();
      return input;
    }
    row = transformData(row);
  
    if (this.props.dataSheetId === dataSheet.id) {
      this.props.appActions.updateInDataSheet('chatmessages', row);
    } else {
      this.props.appActions.addToDataSheet('chatmessages', row);
    }
  }
  
  
  render() {
    
    const style_elTextareaMessage = {
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
      <div className="SendMessage appBg">
        <div className="layoutFlow">
          <div className="elTextareaMessage">
            <textarea className="baseFont" style={style_elTextareaMessage}  placeholder={this.props.locStrings.sendmessage_textarea_37237} onChange={this.textAreaChanged_textareaMessage} value={this.state.textareaMessage}  />
          </div>
          
          <div className="elButton">
            <Button className="actionFont" style={style_elButton}  color="accent" onClick={this.onClick_elButton} >
              {this.props.locStrings.sendmessage_button_939786}
            </Button>
          </div>
        </div>
        
      </div>
    )
  }
  
}
