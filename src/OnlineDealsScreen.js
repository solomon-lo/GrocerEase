import React, { Component } from 'react';
import './App.css';
import DealItem from './DealItem';
import btn_icon_back_onlinedeals from './images/btn_icon_back_onlinedeals.png';

// UI framework component imports
import Appbar from 'muicss/lib/react/appbar';

export default class OnlineDealsScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
    };
  }

  componentDidMount() {
    {
      let dataSheet = this.props.appActions.dataSheets['deals'];
      let serviceOptions = this.props.appActions.serviceOptions_deals;
      if ( !this.props.appActions.dataSheetLoaded['deals']) {
        serviceOptions.servicePath = dataSheet.expandSlotTemplateString("shoppingDeals", this.props.appActions.dataSlots);
        this.props.appActions.loadData_firebaseConnection(dataSheet, serviceOptions, true);
        this.props.appActions.dataSheetLoaded['deals'] = true;
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
    
    const dataSheet_deals = this.props.dataSheets['deals'];
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
    items_list = items_list.concat(this.props.appActions.getDataSheet('deals').items);
    
    const style_elList = {
      height: 'auto',  // This element is in scroll flow
     };
    
    return (
      <div className="AppScreen OnlineDealsScreen" style={baseStyle}>
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
                    : <DealItem appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} dataSheetId={'deals'} dataSheetRow={row} {...{ 'DescriptionOfDeal': row['DescriptionOfDeal'], 'Name': row['Name'], 'URL': row['URL'], }} />;
                return (<li key={row.key}>
                    {itemComp}
                  </li>);
              })}
              <div className="marker" ref={(el)=> this._elList_endMarker = el} />
            </ul>
          </div>
        </div>
        <Appbar className="navBar">
          <div className="title">Online Deals</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_onlinedeals} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
      </div>
    )
  }
  
}
