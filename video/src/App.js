import React, { Component } from 'react';
import List from './List'
import Sublist from './Sublist'
import firebase from 'firebase'

import './App.css';


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBzW7Hgaukk73LAUpYmCV0_4zHOC6mZgk4",
    authDomain: "videoapp-145c3.firebaseapp.com",
    databaseURL: "https://videoapp-145c3.firebaseio.com",
    projectId: "videoapp-145c3",
    storageBucket: "videoapp-145c3.appspot.com",
    messagingSenderId: "392056441667"
  };
  firebase.initializeApp(config);


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='apps'>
          <h1 className='head'>Hii Welcome To App</h1>
           </div>
           <div className="side"><h2 style={{"color":"white","margin-Top":"50px"}}>Courses Offered</h2></div>
           <div className="lists">
           <List/>
    
           <Sublist/>


           </div>


      </div>
    );
  }
}

export default App;
