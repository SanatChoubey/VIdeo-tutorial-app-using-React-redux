import React, { Component } from 'react';
import firebase from 'firebase'
import {Button}from 'react-bootstrap'
    export default class Login extends Component {
      render(){
        return(
          <div className = 'App'>
          <div className="login">

           <h2>Sign In </h2>


          <Button  variant="danger" onClick={()=>{


var provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
})

}}>G+ Google sign in</Button></div>
          </div>
        );
      }
    }
