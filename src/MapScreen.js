import React, { Component } from 'react';
import './App.css';
import Map from './map.js'
import btn_icon_back_map from './images/btn_icon_back_map.png';

// UI framework component imports
import Appbar from 'muicss/lib/react/appbar';

export default class MapScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      filterData: '',
      loaded: false,
    };

    this.mapPopupClick = this.mapPopupClick.bind(this);
  }

  componentDidMount() {
    let dataSheet = this.props.appActions.dataSheets['chatroom'];
    let serviceOptions = this.props.appActions.serviceOptions_chatroom;
    if ( !this.props.appActions.dataSheetLoaded['chatroom']) {
      serviceOptions.servicePath = dataSheet.expandSlotTemplateString("messaging", this.props.appActions.dataSlots);
      this.props.appActions.loadData_firebaseConnection(dataSheet, serviceOptions, true);
      this.props.appActions.dataSheetLoaded['chatroom'] = true;
      this.setState({loaded: true});
    }
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  componentWillReceiveProps(nextProps) {
  }

  mapPopupClick(val) {
    var filter = val;
    console.log(val)
    this.props.appActions.goToScreen('shoppingoptions', { transitionId: 'fadeIn' });
  }

  render() {
    const dataSheet_shoppers = this.props.dataSheets['chatroom'];
    let items_list = []
    items_list = items_list.concat(this.props.appActions.getDataSheet('chatroom').items);
    let layoutFlowStyle = {};
    let baseStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_elBackground = {
      width: '100%',
      height: '100%',
     };
    const style_elBackground_outer = {
      backgroundColor: '#f6f6f6',
     };
     console.log(items_list);
    return (
      <div className="AppScreen MapScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div className="appBg" style={style_elBackground} />
          </div>
        </div>
        <Appbar className="navBar">
          <div className="title">Map</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_map} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        <Map items = {items_list} popupClick={this.mapPopupClick}></Map>
        
      </div>
    )
    
  }
}
