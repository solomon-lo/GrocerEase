import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Button from 'muicss/lib/react/button';

export default class SendMessage extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
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

  textAreaChanged_textarea = (event) => {
    this.setState({textarea: event.target.value});
  }
  
  onClick_elButton = (ev) => {
    // Clear internal state for data-providing elements in this component
    this.setState({
      textarea: "",
    });
  
    // Go back in screen navigation history
    this.props.appActions.goBack();
  
  }
  
  
  render() {
    
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
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    return (
      <div className="SendMessage appBg">
        <div className="layoutFlow">
          <div className="elTextarea">
            <textarea className="baseFont" style={style_elTextarea}  placeholder={this.props.locStrings.sendmessage_textarea_37237} onChange={this.textAreaChanged_textarea} value={this.state.textarea}  />
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
