import React from 'react';
import './App.css';
import { withRouter } from 'react-router';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

const sad={
  top:'150px',
  fontFamily:'"Bree Serif", serif',
  fontSize:'35px',
  position:'fixed'
}

const marging={
  fontFamily:'"Bree Serif", serif',
marginTop:'80px',
fontSize:'25px'
}

const btn={
  fontFamily:'"Bree Serif", serif',
  marginBottom:'55px'
}
const desc={
  fontFamily:'"Bree Serif", serif',
  fontSize:'25px',
  marginTop:'10px'
}
const divStyle = {
  fontFamily:'"Bree Serif", serif',
  width: '100%',
  border: '2px solid black',
  height:'400px'
};
const divStyle2 = {
  width: '100%',
  
  height:'400px'
};
const sorry = {
  fontFamily:'"Bree Serif", serif',
  width: '100%',
 
  textAalign:'center'
  
};

var hobbies=[];
class User extends React.Component {
    constructor(props){
      super(props);
      this.state = { counter: 0 };  
    }
    
  
      handleClick = () => {
        
        if(this.state.counter<this.props.location.personDB.length){
            this.setState(({ counter }) => ({
              counter: counter + 1
            }));}
            
          };


          
      GetHobbies = () => {
         hobbies=[];
        let hobb;
        let x=this.props.location.personDB[this.state.counter].Hobbies;
        //alert(this.props.location.hobbiesArr[1].Hobby_name);
       for(var i=0;i<x.length;i++){
 hobb=this.props.location.hobbiesArr[x[i]-1].Hobby_name;
hobbies.push(hobb);
       }           
  
          };



    render(){
     if(this.props.location.personDB[this.state.counter].Hobbies.length>0){
       this.GetHobbies();
     }
     
if(this.props.location.personDB.length==0 )  {
  return(
    <div className="ui error message" style={marging}>
    
    <div className="header">
      Sorry 
    </div>
    <img src="Images/sad.png" style={divStyle2}/>
    
    {this.props.location.validate==true && this.props.location.validateGen==true && <p style={sorry}>There is no one to show.</p>}
    {this.props.location.validate==false && <p style={sorry}>Please insert a max age bigger than the min age.</p>}
    {this.props.location.validateGen==false && <p style={sorry}>You must select a gender</p>}
      <p style={sorry}>Please try again.</p>
      <button class="ui red button"
       
        onClick={this.props.history.goBack}>
          Back
      </button>
  </div>
  );
}

else{
if(this.state.counter==this.props.location.personDB.length){
  return(<div style={sad}>
    <p  >That's it for now, there is no one else to show</p>
    <button class="ui red button"
       
       onClick={this.props.history.goBack}>
         Back
     </button>
       
    
      </div>
  );
}

 else{ return(
   
      <div  className="ui grid" style={marging}>
      
        <div className="ui card fifteen wide column centered">
            <img src={this.props.location.personDB[this.state.counter].Img} className="ui rounded image" style={divStyle}/>
           <div className="content">
              <div  className="header">{this.props.location.personDB[this.state.counter].Name}</div>
              <div style={desc} className="meta"><span className="date">{this.props.location.personDB[this.state.counter].Gender},{this.props.location.personDB[this.state.counter].Age} years old</span></div>
              <div style={desc} className="description">Lives in {this.props.location.personDB[this.state.counter].Address}</div>
             { this.props.location.personDB[this.state.counter].Hobbies&&<div style={desc} className="description">Likes -{hobbies.map((hob)=>{return " "+ hob})} </div>}
              </div>
              <div style={btn} className="ui two buttons sixteen wide column"> 
                <button onClick={this.handleClick} className="ui green basic button"><i className="heart icon"></i></button>
                <button onClick={this.handleClick} className="ui red basic button"><i className="x icon"></i></button>
                </div>
            </div>
   
          
            </div>
    );}
 }
}
    
}
    
 
export default withRouter(User);
 