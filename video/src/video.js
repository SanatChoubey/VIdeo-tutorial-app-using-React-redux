import React, { Component } from 'react';
import {connect }from 'react-redux'
     class Video extends Component {
      render(){if(this.props.videoss){
        return(
          <div className="vd">
<video width="1200" height="400" src={this.props.videoss}controls/>
          </div>
        );}
        else{
          return<div>PLeasewait...</div>
        }
      }
    }
    function mapStateToProps(state) {
      console.log(state.video)
      return({

    videoss:state.video


      })

    }
export default connect(mapStateToProps)(Video)
