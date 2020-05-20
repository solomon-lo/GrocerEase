import React, { Component } from 'react';
import './App.css';
import ChatroomItem from './ChatroomItem';
import btn_icon_723827 from './images/btn_icon_723827.png';
import btn_icon_back_chatrooms from './images/btn_icon_back_chatrooms.png';

// UI framework component imports
import Appbar from 'muicss/lib/react/appbar';

export default class ChatroomsScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
    };
  }

  componentDidMount() {
    {
      let dataSheet = this.props.appActions.dataSheets['chatroom'];
      let serviceOptions = this.props.appActions.serviceOptions_chatroom;
      if ( !this.props.appActions.dataSheetLoaded['chatroom']) {
        serviceOptions.servicePath = dataSheet.expandSlotTemplateString("messaging", this.props.appActions.dataSlots);
        this.props.appActions.loadData_firebaseConnection(dataSheet, serviceOptions, true);
        this.props.appActions.dataSheetLoaded['chatroom'] = true;
      }
    }
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  componentWillReceiveProps(nextProps) {
  }

  onClick_elIconButton = (ev) => {
    // Go to screen 'Add a chatroom'
    this.props.appActions.goToScreen('addachatroom');
  
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
    
    const dataSheet_chatroom = this.props.dataSheets['chatroom'];
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
    items_list = items_list.concat(this.props.appActions.getDataSheet('chatroom').items);
    
    const style_elList = {
      height: 'auto',  // This element is in scroll flow
     };
    
    const style_elIconButton = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_723827+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '89.562%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen ChatroomsScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div className="appBg" style={style_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="hasNestedComps elList">
            <ul style={style_elList}>
              {items_list.map((row, index) => {
                let itemComp = (row._componentId)
                    ? listComps_list[row._componentId]
                    : <ChatroomItem appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} dataSheetId={'chatroom'} dataSheetRow={row} {...{ 'chatroom_name': row['chatroom_name'], 'document_key': row['document_key'], }} />;
                return (<li key={row.key}>
                    {itemComp}
                  </li>);
              })}
              <div className="marker" ref={(el)=> this._elList_endMarker = el} />
            </ul>
          </div>
        </div>
        <Appbar className="navBar">
          <div className="title">Chatrooms</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_chatrooms} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <button className="actionFont elIconButton" style={style_elIconButton} onClick={this.onClick_elIconButton}  />
          </div>
        </div>
      </div>
    )
  }
  
}
