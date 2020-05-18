import React, { Component } from 'react';
import LocalizedStrings from 'react-localization';
import './App.css';
import MessagesScreen from './MessagesScreen.js';
import AddAChatroomScreen from './AddAChatroomScreen.js';
import ChatroomsScreen from './ChatroomsScreen.js';
import StartScreen from './StartScreen.js';
import DataSheet_chatroom from './DataSheet_chatroom.js';
import DataSheet_chatmessages from './DataSheet_chatmessages.js';
import DataSheet_localizationSheet from './DataSheet_localizationSheet.js';
import firebase from 'firebase';
import firestore from 'firebase/firestore';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.dataSheets = {};
    this.dataSheets['chatroom'] = new DataSheet_chatroom('chatroom', this.dataSheetDidUpdate);
    this.dataSheets['chatmessages'] = new DataSheet_chatmessages('chatmessages', this.dataSheetDidUpdate);
    this.dataSheets['localizationSheet'] = new DataSheet_localizationSheet('localizationSheet', this.dataSheetDidUpdate);
    this.dataSheetLoaded = {};

    this.dataSlots = {};
    this.dataSlots['ds_activeLang'] = "en";
    this.dataSlots['ds_SlotUsername'] = "";
    this.dataSlots['ds_SlotSelectedChatroomKey'] = "Iqdg9DdVEnnLfMgQzvm2";

    this.updateLocalizationFromDataSheet(this.dataSheets['localizationSheet']);


    // Initialize web service plugin 'firebaseConnection'
    firebase.initializeApp({
    apiKey: "AIzaSyC_LUllI1wsem20HtbU0DXCUMT9ynkLyeA",
        authDomain: "grocerease-2192c.firebaseapp.com",
        databaseURL: "https://grocerease-2192c.firebaseio.com",
        projectId: "grocerease-2192c",
        storageBucket: "grocerease-2192c.appspot.com",
        messagingSenderId: "728027069911",
        appId: "1:728027069911:web:0c243e355208bf84f4df92",
        measurementId: "G-DR61T2LKZP"
    });
    firebase.firestore().settings({});
    
    this.serviceOptions_chatroom = {
      dataSlots: this.dataSlots,
      servicePath: "messaging",
      query: "orderBy(\"chatroom_name\",\"asc\")",
    };
    this.dataSheets['chatroom'].appActions = this;
    this.dataSheets['chatroom'].firebase = firebase;
    
    this.serviceOptions_chatmessages = {
      dataSlots: this.dataSlots,
      servicePath: "messaging/$slot('ds_SlotSelectedChatroomKey')/messages",
      query: "orderBy(\"timestamp\",\"asc\")",
    };
    this.dataSheets['chatmessages'].appActions = this;
    this.dataSheets['chatmessages'].firebase = firebase;
    

    this.state = {
      currentScreen: 'start',
      currentScreenProps: {},
      screenTransitionForward: true,
    }
    this.screenHistory = [ {...this.state} ];

  }

  windowDidResize = () => {
    let w = window.innerWidth;
    let formatId;
    if (w < 576) formatId = 'narrow-phone';
    else if (w < 768) formatId = 'wide-phone';
    else if (w < 1024) formatId = 'narrow-tablet';
    else formatId = 'wide-tablet';
    if (formatId !== this.state.screenFormatId) {
      this.setState({screenFormatId: formatId});
    }
  }

  componentDidMount() {
    this.windowDidResize();
    window.addEventListener('resize', this.windowDidResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.windowDidResize);
  }

  isLoading() {
    return this.state.loading;
  }

  goToScreen = (screenId, props) => {
    // This method is the default implementation and could be customized by a navigation plugin.

    let screenIdx = -1;  // Check if the screen is already in the history stack, and pop back if so
    for (let i = 0; i < this.screenHistory.length; i++) {
      if (this.screenHistory[i].currentScreen === screenId) {
        screenIdx = i;
        break;
      }
    }
    if (screenIdx > -1) {
      this.screenHistory.splice(screenIdx + 1, this.screenHistory.length - screenIdx - 1);
      let prevScreenState = this.screenHistory[screenIdx];
      this.setState({...prevScreenState, screenTransitionForward: false});
    }
    else {
      props = props || {};
      let screenState = {currentScreen: screenId, currentScreenProps: props};
      this.screenHistory.push(screenState);
      this.setState({...screenState, screenTransitionForward: true});
    }
    window.scrollTo(0, 0);
  }

  goBack = () => {
    // This method is the default implementation and could be customized by a navigation plugin.
    if (this.screenHistory.length < 2)
      return;

    this.screenHistory.splice(this.screenHistory.length - 1, 1);
    let prevScreenState = this.screenHistory[this.screenHistory.length - 1];
    this.setState({...prevScreenState, screenTransitionForward: false});
    window.scrollTo(0, 0);
  }

  getDataSheet = (sheetId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    return this.dataSheets[sheetId];
  }

  addToDataSheet = (sheetId, newRow, actionId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    let sheet = this.dataSheets[sheetId];
    if (sheet && newRow) {
      sheet.addItem(newRow, this['serviceOptions_'+sheetId] || {});
    }
    this.setState({});
  }

  updateInDataSheet = (sheetId, row, actionId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    let sheet = this.dataSheets[sheetId];
    if (sheet && row) {
      sheet.replaceItemByKey(row.key, row, this['serviceOptions_'+sheetId] || {});

      if (this.state.currentScreenProps.dataSheetRow) {
        let screenProps = {...this.state.currentScreenProps};
        screenProps.dataSheetRow = row;

        // Also update any props that were carried into a detail view
        for (let prop in screenProps) {
          if (row[prop] !== undefined) {
            screenProps[prop] = row[prop];
          }
        }
        this.setState({currentScreenProps: screenProps});
      } else {
        this.setState({});
      }
    }
  }

  removeFromDataSheet = (sheetId, row) => {
    let sheet = this.dataSheets[sheetId];
    if (sheet && row) {
      sheet.removeItem(row, this['serviceOptions_'+sheetId] || {});
    }
    this.setState({});
  }

  updateDataSlot = (slotId, value, actionId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    this.dataSlots[slotId] = value;
    if (slotId === 'ds_activeLang') {
      this.locStrings.setLanguage(value);
    }

    if (this.serviceOptions_chatroom.query.length > 0) {
      let usedSlots = [];
      this.dataSheets['chatroom'].expandSlotTemplateString(this.serviceOptions_chatroom.query, {}, usedSlots);
      if (usedSlots.includes(slotId)) {
        // if data sheet's content depends on this slot, reload it now
        this.loadData_firebaseConnection(this.dataSheets['chatroom'], this.serviceOptions_chatroom, true);
      }
    }
    
    {
      let usedSlots = [];
      let servicePath = this.dataSheets['chatroom'].expandSlotTemplateString("messaging", this.dataSlots, usedSlots);
      if (usedSlots.includes(slotId)) {
        // if data sheet's content depends on this slot, reload it now
        this.serviceOptions_chatroom.servicePath = servicePath;
        this.loadData_firebaseConnection(this.dataSheets['chatroom'], this.serviceOptions_chatroom, true);
      }
    }
    if (this.serviceOptions_chatmessages.query.length > 0) {
      let usedSlots = [];
      this.dataSheets['chatmessages'].expandSlotTemplateString(this.serviceOptions_chatmessages.query, {}, usedSlots);
      if (usedSlots.includes(slotId)) {
        // if data sheet's content depends on this slot, reload it now
        this.loadData_firebaseConnection(this.dataSheets['chatmessages'], this.serviceOptions_chatmessages, true);
      }
    }
    
    {
      let usedSlots = [];
      let servicePath = this.dataSheets['chatmessages'].expandSlotTemplateString("messaging/$slot('ds_SlotSelectedChatroomKey')/messages", this.dataSlots, usedSlots);
      if (usedSlots.includes(slotId)) {
        // if data sheet's content depends on this slot, reload it now
        this.serviceOptions_chatmessages.servicePath = servicePath;
        this.loadData_firebaseConnection(this.dataSheets['chatmessages'], this.serviceOptions_chatmessages, true);
      }
    }
    this.setState({});
  }

  dataSheetDidUpdate = (dataSheet) => {
    // This method is the default implementation and could be customized by a state management plugin.
    this.setState({});
  }

  updateLocalizationFromDataSheet = (dataSheet) => {
    const stringsObj = dataSheet.getStringsByLanguage();
    if (stringsObj && Object.keys(stringsObj).length > 0) {
      this.locStrings = new LocalizedStrings(stringsObj);
    } else {
      this.locStrings = new LocalizedStrings({en: {}});
    }
    this.locStrings.setLanguage(this.dataSlots['ds_activeLang']);
  }

  loadData_firebaseConnection = (dataSheet, options, firstLoad) => {
    // This method was written by data plugin 'Firebase (Cloud Firestore)'.
    this.setState({loading: true});
    
    // clear any placeholder data before load
    if (firstLoad) {
      dataSheet.items = [];
    }
    
    const fetchComplete = (err) => {
      if (err) {
        // This error handling comes from React Studio
        // and currently doesn't do anything useful.
        console.error('** Web service load failed: ', err);
      } else {
      }
      this.setState({loading: false});
    }
    
    const db = firebase.firestore();
    let isCollectionGroup = options.servicePath.startsWith("group:");
    const collection = (isCollectionGroup) ? db.collectionGroup(options.servicePath.substring(6)) : db.collection(options.servicePath);
    const query = dataSheet.expandSlotTemplateString(options.query, this.dataSlots);
    let queryObj;
    
    if (query.length < 1) {
      queryObj = collection;
    } else {
      console.log("loading firebase data for '%s' with query: %s", options.servicePath, query);
      try {
        queryObj = eval(`(function(c){ return c.${query}; })(collection)`);
      } catch (e) {
        console.log("** error creating firebase query object from '%s': ", query, e)
        return;
      }
    }
    
    queryObj.onSnapshot(
      (querySnapshot) => {
        let jsonArr = [];
        
        if (querySnapshot.docs) {
          querySnapshot.forEach((doc) => {
            const data = { ...doc.data(), document_key: doc.id, document_ref: doc.ref };
            jsonArr.push(data);
          });
        } else if (querySnapshot.data) {
          const doc = querySnapshot;
          const data = { ...doc.data(), document_key: doc.id, document_ref: doc.ref };
          jsonArr.push(data);
        }    
            
        dataSheet.loadFromJson(jsonArr);
        fetchComplete(null, options);  
      },
      (err) => {
        fetchComplete(err, options);
      });  
    
    
     /*
    dbLoadingPromise.get().then((querySnapshot) => {
        let jsonArr = [];
    
        querySnapshot.forEach((doc) => {
          const data = { ...doc.data(), key: doc.id };
          jsonArr.push(data);
        });
            
        dataSheet.loadFromJson(jsonArr);
        fetchComplete(null, options);
      },
      (err) => {
        fetchComplete(err, options);
      });  
      */
    
  }

  render() {
    let makeElementForScreen = (screenId, baseProps, atTop, forward) => {
      let screenProps = {
        ...baseProps,
        atTopOfScreenStack: atTop,
        transitionForward: forward,
        appActions: this,
        dataSheets: this.dataSheets,
        locStrings: this.locStrings,
        deviceInfo: {
          screenFormatId: this.state.screenFormatId
        },
        'ds_activeLang': this.dataSlots['ds_activeLang'],
        'ds_SlotUsername': this.dataSlots['ds_SlotUsername'],
        'ds_SlotSelectedChatroomKey': this.dataSlots['ds_SlotSelectedChatroomKey'],
      };
      switch (screenId) {
        default:
          return null;
        case 'messages':
          return (<MessagesScreen {...screenProps} />)
        case 'addachatroom':
          return (<AddAChatroomScreen {...screenProps} />)
        case 'chatrooms':
          return (<ChatroomsScreen {...screenProps} />)
        case 'start':
          return (<StartScreen {...screenProps} />)
      }
    }

    let screenEl = makeElementForScreen(this.state.currentScreen, this.state.currentScreenProps, true, this.state.screenTransitionForward);
    let prevScreenEl = null;
    if (this.screenHistory.length >= 2) {  // For transitions, we want to show the previous screen below
      let prevScreenState = this.screenHistory[this.screenHistory.length - 2];
      prevScreenEl = makeElementForScreen(prevScreenState.currentScreen, prevScreenState.currentScreenProps, false, this.state.screenTransitionForward);
    }

    return (
      <div className="App">
        {prevScreenEl}
        {screenEl}
      </div>
    );
  }
}
