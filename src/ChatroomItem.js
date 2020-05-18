import React, { Component } from 'react';
import './App.css';

export default class ChatroomItem extends Component {

  // Properties used by this component:
  // chatroom_name, document_key

  constructor(props) {
    super(props);
    
    this.state = {
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

  onClick_elText = (ev) => {
    // Go back in screen navigation history
    this.props.appActions.goBack();
  
    // Go to screen 'Messages'
    this.props.appActions.goToScreen('messages', { transitionId: 'fadeIn' });
  
  }
  
  
  render() {
    const value_text = this.props.chatroom_name;
    
    const style_elText = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    const style_elRectangle = {
      background: 'rgba(0, 0, 0, 0.475)',
     };
    
    return (
      <div className="ChatroomItem appBg">
        <div className="layoutFlow">
          <div className="elText">
            <div className="headlineFont" style={style_elText} onClick={this.onClick_elText} >
              <div>{value_text !== undefined ? value_text : (<span className="propValueMissing">{this.props.locStrings.chatroomitem_text_699949}</span>)}</div>
            </div>
          </div>
          
          <div className="elRectangle">
            <div style={style_elRectangle} />
          </div>
        </div>
        
      </div>
    )
  }
  
}
