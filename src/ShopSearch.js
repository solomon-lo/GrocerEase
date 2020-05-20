import React, { Component } from 'react';
//import firebase from 'firebase'
import './App.css';
import './ShopSearch.css';

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

class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_field: '',
      posts: 0,
    };
  }
  
  render() {
    const test = {
      name: "First Last",
      zip: "00000",
      shop: "Tarjey",
      time: "anytime",
      rating: "5.0",
      price: "free",
    }
    
    return (    
      <div className="screen">
     
        <div id="navbar" class="topnav">
          <div className="search_container"> 
            <SearchBar className="search" />
          </div>
        </div>

        <Post name={test.name} zip={test.zip} shop={test.shop} 
      time={test.time} rating={test.rating} price={test.price}/>
      <div className="div_center">
        <button onClick={() => alert('clicked make post')}> Make a Post </button> {/*add nav */}
      </div>
      <div className="div_center">
        <button onClick={() => alert('clicked Messages')} > Go to Messages </button> {/*add navigation */}
      </div>
      </div>
      
      /*<script src='scroll.js'></script>*/
      
    )
  }
  
}

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_field: '',
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  // will probably update this to be in the parent Screen1 class. 
  handleChange(event) {
    this.setState({value: event.target.value}); 
  }
  
  handleSubmit(event) {
    alert('searching for: ' + this.state.value);
  }
  
  render () {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor = "search_in"> Search for a store </label>
        <input type="text" value= {this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Search" />
      </form>
      </div>
    )
  }
}

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      name: '',
      zip: '',
      shop: '',
      time: '',
      rating: '',
      price: '',
    };
  }
  
  componentDidMount() {
    //fetch
    //.then(res => res.json())
    //.then((result) => {this.setState({/*stuff, items: result.items*/}});
    //
    /*
    this.setState({
      name: '',
      zip: '',
      shop: '',
      time: '',
      rating: '',
    }); */
  }
  
  componentWillUnmount() {
  }

  componentDidUpdate() {
  }
  
  render (){
    return (
      <div>
      <div className="post_container">
        <div className="name"> <p> Name: {this.props.name} </p></div>
        <p> Area: {this.props.zip} </p>
        <p> Shopping At: {this.props.shop} </p>
        <p> Time: {this.props.time} </p>
        <p> Rating: {this.props.rating} </p>
        <p> Pricing: {this.props.price} </p>
        <button onClick={() => alert('clicked Message shopper')}> Message Shopper </button> {/*add clicking */}
      </div>
      </div>
    )
  }  
}

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

export default SearchScreen;
