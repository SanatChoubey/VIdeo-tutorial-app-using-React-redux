import React, { Component } from 'react';
import firebase from 'firebase';
import {connect} from 'react-redux';
import {bindActionCreators}from 'redux';
import {getvideo} from './action/getvideo'
  class List extends Component {

componentDidMount(){

var database = firebase.database();
database.ref('course/').on('value',(snapshot)=>{
console.log(snapshot.val())
var data = Object.values(snapshot.val())
console.log(data)

this.setState({courses:data})



})

}


      constructor(props){
        super(props);

        this.state = {

          s:false,
          courses:null,
          item:null
        };
      }

      render(){
        if(this.state.courses){
        return(
          <div className="List">
         <div>{this.state.courses.map((data)=>{

       return<div className="Card"
       onClick={()=>{ this.setState({s:true})











       if(firebase.auth().currentUser){

var dtaat = Object.values(data.lecture)
     this.props.getvideo(dtaat)




}

       else{

       window.location.href='/Login'

       }






















     }}>
       <h2>{data.title}</h2>
       </div>})}
       </div>
       </div>
        );}else{

         return <div style ={{color:"white",marginTop:-600}}><h1>Please wait... while fetching data</h1></div>


        }
      }
    }



    function mapDispatchToProps(dispatch) {
      return bindActionCreators({getvideo},dispatch)

    }
      export default connect(null,mapDispatchToProps)(List)
