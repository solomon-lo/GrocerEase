import React, { Component } from 'react';
import './App.css';

export default class ChatItem extends Component {

  // Properties used by this component:
  // sender_username, message_body, timestamp

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

  render() {
    const value_text = this.props.sender_username;
    
    const style_elText = {
      color: '#8e37fe',
      textAlign: 'left',
     };
    
    const value_textCopy = this.props.message_body;
    
    const style_elTextCopy = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const value_textCopy2 = this.props.timestamp;
    
    const style_elTextCopy2 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    return (
      <div className="ChatItem appBg">
        <div className="layoutFlow">
          <div className="elText">
            <div className="baseFont" style={style_elText}>
              <div>{value_text !== undefined ? value_text : (<span className="propValueMissing">{this.props.locStrings.chatitem_text_744366}</span>)}</div>
            </div>
          </div>
          
          <div className="elTextCopy">
            <div className="baseFont" style={style_elTextCopy}>
              <div>{value_textCopy !== undefined ? value_textCopy : (<span className="propValueMissing">{this.props.locStrings.chatitem_textcopy_801576}</span>)}</div>
            </div>
          </div>
          
          <div className="elTextCopy2">
            <div className="baseFont" style={style_elTextCopy2}>
              <div>{value_textCopy2 !== undefined ? value_textCopy2 : (<span className="propValueMissing">{this.props.locStrings.chatitem_textcopy2_209838}</span>)}</div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
  
}
