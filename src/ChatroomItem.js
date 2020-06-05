import React, { Component } from 'react';
import './App.css';
import btn_icon_456038 from './images/btn_icon_456038.png';

export default class ChatroomItem extends Component {

  // Properties used by this component:
  // document_key, chatroom_name, chatroom_time

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

  onClick_elChatname = (ev) => {
    let newVal = this.props.document_key;
    this.props.appActions.updateDataSlot('ds_SlotSelectedChatroomKey', newVal);
  
    // Go to screen 'Messages'
    this.props.appActions.goToScreen('messages', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elChatstore = (ev) => {
    let newVal = this.props.document_key;
    this.props.appActions.updateDataSlot('ds_SlotSelectedChatroomKey', newVal);
  
    // Go to screen 'Messages'
    this.props.appActions.goToScreen('messages', { transitionId: 'fadeIn' });
  
  
  }
  
  
  // onClick_elIconButton = (ev) => {
  //   // Remove row from connected sheet
  //   this.props.appActions.removeFromDataSheet(this.props.dataSheetId, this.props.dataSheetRow);
  
  // }
  
  
  render() {
    const value_chatname = this.props.chatroom_name;
    
    const style_elChatname = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };

     const style_elChatname_filterOn = {
      color: 'rgba(0, 0, 0, 0.5)',
      textAlign: 'left',
      cursor: 'pointer',
      pointerEvents: 'auto',
      opacity: '0.5'
     }
    console.log(this.props)
    const value_chatstore = this.props.dataSheetRow.store_address.place_name;
    const style_elChatstore = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };

    const style_elChatstore_filterOn = {
      color: 'rgba(0, 0, 0, 0.5)',
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
    
    const value_text3 = this.props.chatroom_time;
    
    const style_elText3 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
     const style_elText3_filterOn = {
      color: 'rgba(0, 0, 0, 0.500)',
      textAlign: 'left',
     };
    
    const style_elRectangle = {
      background: 'rgba(0, 0, 0, 0.475)',
    };

    const style_elRectangle_filterOn = {
      background: 'rgba(0, 0, 0, 0.475)',
      opacity: '0.6',
    }
      return (
      <div className="ChatroomItem appBg">
        <div className="layoutFlow">
          <div className="elChatname">
            <div className="headlineFont" style={style_elChatname} onClick={this.onClick_elChatname} >
              <div>{value_chatname !== undefined ? value_chatname : (<span className="propValueMissing">{this.props.locStrings.chatroomitem_text_699949}</span>)}</div>
            </div>
          </div>
          
          <div className="elChatstore">
            <div className="baseFont" style={style_elChatstore} onClick={this.onClick_elChatstore} >
              <div>{value_chatstore !== undefined ? value_chatstore : (<span className="propValueMissing">{this.props.locStrings.chatroomitem_text2_809202}</span>)}</div>
            </div>
          </div>
          
          
          <div className="elText3">
            <div className="baseFont" style={style_elText3}>
              <div>{value_text3 !== undefined ? value_text3 : (<span className="propValueMissing">{this.props.locStrings.chatroomitem_text3_643611}</span>)}</div>
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
