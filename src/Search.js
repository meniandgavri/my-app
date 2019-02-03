import React from 'react';
import ReactDOM from 'react-dom';
import User from './User';
import RouteButton from './RouteButton';

var Filtered_Per=[];
const marging1={
    marginTop:'80px',
    fontSize:'40px'
    }
const text={
    fontSize:'25px',
    marginTop:'20px'
}

const ageStyle={
    marginTop:'5px',
    fontFamily:'"Bree Serif", serif'
    
}

class Search extends React.Component {
    constructor(props){
      super(props);
      this.state = {gender:null,minAge:null,maxAge:null};  
     
    }

    GetGen = (evt) => {
        this.setState({ gender: evt.target.value })
    }
    GetMin = (evt) => {
        this.setState({ minAge: evt.target.value })
    }
    GetMax = (evt) => {
        this.setState({ maxAge: evt.target.value })
        
    }

    render(){
    return(
        <div id="marging" className="ui grid" style={marging1}>
      
      
        <div className="ui form fifteen wide column centered" style={text}>
        
            <div style={ageStyle} className="field">
            <label style={ageStyle}>I'm Looking...</label>
              <select style={ageStyle} onChange={this.GetGen} id="selectGender" required>
                   <option style={ageStyle} value="1">Gender</option>
                   <option style={ageStyle} value="Male">Male</option>
                   <option style={ageStyle} value="Female">Female</option>
               </select>
             </div>
             <div className="field">
             <label style={ageStyle}>Please Select An Age Range</label>
          <input style={ageStyle} onChange={this.GetMin} type="text" id="min" maxLength="3" placeholder="Min Age"  required/>
          <input style={ageStyle} onChange={this.GetMax}  type="text"  id="max" maxLength="3" placeholder="Max Age" required/>
        </div>

           
            <div className="ui link cards" > 
            <RouteButton  value='Find My Love' pathname='/bgroup73/test1/testing/match' personDB ={this.props.personDB} minAge={this.state.minAge} maxAge={this.state.maxAge} gender={this.state.gender}  hobbiesArr={this.props.hobArr}/>
            </div>
         </div>
        </div>
   
        
    );}
    
}
    
 

export default Search;