import React, { Component } from 'react';
//import firebase from 'firebase'
import './App.css';
import './ShopSearch.css';

import btn_icon_723827 from './images/btn_icon_723827.png';
import btn_icon_back_chatrooms from './images/btn_icon_back_chatrooms.png';
import Appbar from 'muicss/lib/react/appbar';

/*
var firebaseConfig = {
  apiKey: "api-key",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "G-measurement-id",
  
  firebase.initializeApp(firebaseConfig);
  
};
*/

export default class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_field: '',
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
  }
  
  handleSearchChange(search_field) {
    this.setState({
      search_field: search_field,
    })
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
      <div className="screen">
        <div id="navbar" class="topnav">
          <div className="search_container">
            <SearchBar className="search" 
             search_field={this.state.search_field}
             onFilterChange={this.handleSearchChange}/>
          </div>
        </div>
        <Content 
          items= {this.props.appActions.getDataSheet('shoppers').items} 
          search_field =  {this.state.search_field}>
        </Content>
      </div>  
    )
  }
  
}

class Content extends Component {
  render() {
    const search_field = this.props.search_field;
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
    items_list = items_list.concat(this.props.items);

    const style_elList = {
      height: 'auto',  // This element is in scroll flow
    };

    const style_elIconButton = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url(' + btn_icon_723827 + ')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '89.562%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
    };
    /*
    items_list.name = items_list.prototype.name;
    items_list.forEach((items_list) => { 
      console.log({items_list.name.indexOf(search_field)});
    });*/

    return (
      <div className="screen">
        <div className="hasNestedComps elList">
          <ul style={style_elList}>
            {items_list.map((row, index) => {
              let itemComp = (row._componentId)
                ? listComps_list[row._componentId]
                : <Post appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings}
                  search_field = {search_field}  
                  dataSheetId={'shoppers'} dataSheetRow={row} {...{ 'name': row['name'], 'store': row['store'], 'document_key': row['document_key'], }} />;
              
              return (<li key={row.key}>
                {itemComp}
              </li>);
            })}
            <div className="marker" ref={(el) => this._elList_endMarker = el} />
          </ul>
        </div>
        

        
        <div className="div_center">
          <button onClick={() => alert('clicked make post')}> Make a Post </button> {/*add nav */}
        </div>
        <div className="div_center">
          <button onClick={() => alert('clicked Messages')} > Go to Messages </button> {/*add navigation */}
        </div>
      </div>
    )
  }
}

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterOn: false,
    };
  }
  
  render (){
    if (this.props.store.toLowerCase().includes(this.props.search_field.toLowerCase())) {
    return (
      <div className="post_container_filter">
        <div className="name"> <p> Name: {this.props.name} </p></div>
        <p> Shopping At: {this.props.store}</p>
        <button onClick={() => alert('clicked Message ' + this.props.name)}> Message Shopper </button> {/*add clicking */}
      </div>
    )
    }
    else {
      return (
        <div className="post_container">
          <div className="name"> <p> Name: {this.props.name} </p></div>
          <p> Shopping At: {this.props.store}</p>
          <button onClick={() => alert('clicked Message ' + this.props.name)}> Message Shopper </button> {/*add clicking */}
        </div>
      )
    }

  }  
}

//helper functions for search
/*
const searchResults = (props) => {
  return(<div>
    <label htmlFor="search">Search for a store</label>
    <input type="text" value = {props.inputValue} onChange={props.filterPostsOnChange}/>
      <div>
        <ul style={style_elList}>
              {items_list.map((row, index) => {
                let itemComp = (row._componentId)
                    ? listComps_list[row._componentId]
                    : <Post appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} dataSheetId={'shoppers'} dataSheetRow={row} {...{ 'name': row['name'], 'document_key': row['document_key'], }} />;
                return (<li key={row.key}>
                    {itemComp}
                  </li>);
              })}
              <div className="marker" ref={(el)=> this._elList_endMarker = el} />
        </ul>
      </div>
  </div>)
}
*/

/*
filterPostsOnChange = (event) => {
  console.log("filter on change", event.target.value)
  this.setState({inputValue: event.target.value})
}
*/
//search bar

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_field: '',
    };
    
    this.handleChange = this.handleChange.bind(this);
  }
  
  // will probably update this to be in the parent Screen1 class. 
  handleChange(event) {
    this.props.onFilterChange(event.target.value); 
  }
  
  render () {
    return (
      <div>
      <form>
        <label htmlFor = "search_in"> Search for a store </label>
        <input type="text" placeholder="type here" value= {this.props.search_field} onChange={this.handleChange} />
        {/*<input type="submit" value="Search" />*/}
      </form>
      </div>
    )
  }
}

/*
window.onscroll = function() {scr()};

function scr() {
  
  var navbar = document.getElementById("navbar");
  var offset = navbar.offsetTop;
  
  if (window.pageYOffset >= offset) {	
    navbar.classList.add("offset")
  } else {
    navbar.classList.remove("offset");
  }
}
*/ //implement scrolling w/ react 

//export default SearchScreen;
