import React, { Component } from 'react';
import './App.css';
import btn_icon_456038 from './images/btn_icon_456038.png';

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
    let newVal = this.props.document_key;
    this.props.appActions.updateDataSlot('ds_SlotSelectedChatroomKey', newVal);
  
    // Go to screen 'Messages'
    this.props.appActions.goToScreen('messages', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elIconButton = (ev) => {
    // Remove row from connected sheet
    this.props.appActions.removeFromDataSheet(this.props.dataSheetId, this.props.dataSheetRow);
  
  }
  
  
  render() {
    const value_text = this.props.chatroom_name;
    
    const style_elText = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    const style_elIconButton = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_456038+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '82.200%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
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
          
          <div className="elIconButton">
            <button className="actionFont" style={style_elIconButton} onClick={this.onClick_elIconButton}  />
          </div>
          
          <div className="elRectangle">
            <div style={style_elRectangle} />
          </div>
        </div>
        
      </div>
    )
  }
  
}
