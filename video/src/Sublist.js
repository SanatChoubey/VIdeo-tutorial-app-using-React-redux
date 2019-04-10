import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {videos}from'./action/video';
import{Link} from 'react-router-dom'

class Sublist extends Component {
  constructor(props){
    super(props);

    this.state = {
vo:null,
video :''

    };
  }
      render(){
        if(this.props.video){
        return(<div>

          <div className='sublist'>


     {this.props.video.map((data)=>{
     return <Link to='/video'><div onClick={()=>{

this.setState({video:data.src})
this.props.videos(data.src)

}} style={{'color':'white'}}>{data.title}<hr/></div></Link>




   })}<div> </div>



          </div>  </div>
        );}
        else{

 return(<div></div>)


        }
      }
    }

function mapStateToProps(state) {

return({video:state.item})
}
function mapDispatchToProps(dispatch) {
  return(bindActionCreators({videos},dispatch))

}

    export default connect(mapStateToProps,mapDispatchToProps)(Sublist)
