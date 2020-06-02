import React, { Component } from 'react';
import './App.css';
import AddChatroomComp from './AddChatroomComp';
import btn_icon_back_addachatroom from './images/btn_icon_back_addachatroom.png';

// UI framework component imports
import Appbar from 'muicss/lib/react/appbar';

export default class AddAChatroomScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
    };
  }

  componentDidMount() {
    {
      let dataSheet = this.props.appActions.dataSheets['shoppers'];
      let serviceOptions = this.props.appActions.serviceOptions_shoppers;
      if ( !this.props.appActions.dataSheetLoaded['shoppers']) {
        serviceOptions.servicePath = dataSheet.expandSlotTemplateString("shoppers", this.props.appActions.dataSlots);
        this.props.appActions.loadData_firebaseConnection(dataSheet, serviceOptions, true);
        this.props.appActions.dataSheetLoaded['shoppers'] = true;
      }
    }
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
    
    
    return (
      <div className="AppScreen AddAChatroomScreen" style={baseStyle}>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="hasNestedComps elAddChatroomComp">
            <div>
              <AddChatroomComp ref={(el)=> this._elAddChatroomComp = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
        </div>
        <Appbar className="navBar">
          <div className="title">Add a chatroom</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_addachatroom} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
      </div>
    )
  }
  
}
