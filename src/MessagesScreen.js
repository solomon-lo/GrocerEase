import React, { Component } from 'react';
import './App.css';
import ChatItem from './ChatItem';
import SendMessage from './SendMessage';
import btn_icon_back_messages from './images/btn_icon_back_messages.png';

// UI framework component imports
import Appbar from 'muicss/lib/react/appbar';

export default class MessagesScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
    };
  }

  componentDidMount() {
    this._elList_endMarker.scrollIntoView({ behavior: 'auto' });
    {
      let dataSheet = this.props.appActions.dataSheets['chatmessages'];
      let serviceOptions = this.props.appActions.serviceOptions_chatmessages;
      if ( !this.props.appActions.dataSheetLoaded['chatmessages']) {
        serviceOptions.servicePath = dataSheet.expandSlotTemplateString("messaging/$slot('ds_SlotSelectedChatroomKey')/messages", this.props.appActions.dataSlots);
        this.props.appActions.loadData_firebaseConnection(dataSheet, serviceOptions, true);
        this.props.appActions.dataSheetLoaded['chatmessages'] = true;
      }
    }
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
    this._elList_endMarker.scrollIntoView({ behavior: 'auto' });
  }

  componentWillReceiveProps(nextProps) {
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
    
    const dataSheet_chatmessages = this.props.dataSheets['chatmessages'];
    const style_elBackground = {
      width: '100%',
      height: '100%',
     };
    const style_elBackground_outer = {
      backgroundColor: '#f6f6f6',
     };
    
    // Source items and any special components used for list/grid element 'list'.
    let items_list = [];
    let listComps_list = {};
    items_list = items_list.concat(this.props.appActions.getDataSheet('chatmessages').items);
    
    const style_elList = {
      height: 'auto',  // This element is in scroll flow
     };
    
    return (
      <div className="AppScreen MessagesScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div className="appBg" style={style_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="hasNestedComps elList">
            <div style={style_elList}>
              {items_list.map((row, index) => {
                let itemComp = (row._componentId)
                    ? listComps_list[row._componentId]
                    : <ChatItem appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} dataSheetId={'chatmessages'} dataSheetRow={row} {...{ 'sender_username': row['sender_username'], 'message_body': row['message_body'], 'timestamp': row['timestamp'], }} />;
                return (<div key={row.key}>
                    {itemComp}
                  </div>);
              })}
              <div className="marker" ref={(el)=> this._elList_endMarker = el} />
            </div>
          </div>
        </div>
        <Appbar className="navBar">
          <div className="title">Messages</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_messages} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <div className="hasNestedComps elSendMessage">
              <SendMessage ref={(el)=> this._elSendMessage = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
}
