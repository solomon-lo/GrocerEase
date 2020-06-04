import React, { Component } from 'react';
import './App.css';
import ChatroomItem from './ChatroomItem';
import btn_icon_13220 from './images/btn_icon_13220.png';
import btn_icon_15522 from './images/btn_icon_15522.png';
import btn_icon_723827 from './images/btn_icon_723827.png';
import btn_icon_back_shoppingoptions from './images/btn_icon_back_shoppingoptions.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';

export default class ShoppingOptionsScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      field: '',
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


  onClick_elButton = (ev) => {
    // Go to screen 'SweepStakes_Entry'
    this.props.appActions.goToScreen('sweepstakes_entry', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elButton2 = (ev) => {
    // Go to screen 'Online Deals'
    this.props.appActions.goToScreen('onlinedeals', { transitionId: 'fadeIn' });
  
  }
  
  
  textInputChanged_field = (event) => {
    this.setState({field: event.target.value});
  }
  
  onClick_elIconButton3 = (ev) => {
    // Go to screen 'Map'
    this.props.appActions.goToScreen('map', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elIconButton2 = (ev) => {
    // Go to screen 'FAQs'
    this.props.appActions.goToScreen('faqs', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elIconButton = (ev) => {
    // Go to screen 'Scratch Add A Post'
    this.props.appActions.goToScreen('scratchaddapost');
  
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
    
    const style_elButton = {
      display: 'block',
      color: 'white',
      textAlign: 'center',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    const style_elButton2 = {
      display: 'block',
      color: 'white',
      textAlign: 'center',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    const style_elField = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      pointerEvents: 'auto',
     };
    
    // Source items and any special components used for list/grid element 'list'.
    let items_list = [];
    let listComps_list = {};
    items_list = items_list.concat(this.props.appActions.getDataSheet('chatroom').items);
    console.log(items_list)
    if (this.state.field !== "") {
      for (var i=0; i < items_list.length; i++) {
        if (!items_list[i].chatroom_name.replace(/[^A-Za-z0-9]/g,'').toLowerCase().includes(this.state.field.replace(/[^A-Za-z0-9]/g,'').toLowerCase()) &&
            !items_list[i].store_address.text.replace(/[^A-Za-z0-9]/g,'').toLowerCase().includes(this.state.field.replace(/[^A-Za-z0-9]/g,'').toLowerCase())) {
          items_list.splice(i,1);
          i--;
        }
      }
    };



    const style_elList = {
      height: 'auto',  // This element is in scroll flow
     };
    
    const style_elRectangle = {
      background: 'rgba(246, 247, 246, 1.000)',
     };
    
    const style_elIconButton3 = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_13220+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '89.562%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    const style_elIconButton2 = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_15522+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '89.562%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
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
      <div className="AppScreen ShoppingOptionsScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div className="appBg" style={style_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="elButton">
            <Button className="actionFont" style={style_elButton}  color="accent" onClick={this.onClick_elButton} >
              {this.props.locStrings.shoppingoptions_button_581207}
            </Button>
          </div>
          
          <div className="elButton2">
            <Button className="actionFont" style={style_elButton2}  color="accent" onClick={this.onClick_elButton2} >
              {this.props.locStrings.shoppingoptions_button2_268304}
            </Button>
          </div>
          
          <div className="elField">
            <input className="baseFont" style={style_elField} type="text" placeholder={this.props.locStrings.shoppingoptions_field_109207} onChange={this.textInputChanged_field} value={this.state.field}  />
          </div>
          
          <div className="hasNestedComps elList">
            <ul style={style_elList}>
              {items_list.map((row, index) => {
                let itemComp = (row._componentId)
                    ? listComps_list[row._componentId]
                    : <ChatroomItem filter={this.state.field} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} 
                              dataSheetId={'chatroom'} dataSheetRow={row} 
                              {...{ 'document_key': row['document_key'], 'store_name': row['store_name'],'chatroom_name': row['chatroom_name'], 'chatroom_time': row['chatroom_time'], 'filteredAway': row['filteredAway'],location: row['store_address']}} />;
                return (<li key={row.key}>
                    {itemComp}
                  </li>);
              })}
              <div className="marker" ref={(el)=> this._elList_endMarker = el} />
            </ul>
          </div>
          
          <div className="elIconButton3">
            <button className="actionFont" style={style_elIconButton3} onClick={this.onClick_elIconButton3}  />
          </div>
          
          <div className="elIconButton2">
            <button className="actionFont" style={style_elIconButton2} onClick={this.onClick_elIconButton2}  />
          </div>
        </div>
        <Appbar className="navBar">
          <div className="title">Shopping Options</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_shoppingoptions} alt="" style={{width: '50%'}} /></div>
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
