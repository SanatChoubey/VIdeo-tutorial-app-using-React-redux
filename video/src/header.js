import React, { Component } from 'react';
import {Navbar,Nav,Button,Form,FormControl} from 'react-bootstrap'
    export default class Header extends Component {
      render(){
        return(

  <div>



  <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">Video APP</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/Login">Login</Nav.Link>

      </Nav>
  
    </Navbar>


  </div>

        );
      }
    }
