import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';
import Search from './Search';
import Notfound from './Notfound';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';


const footerStyle={
  
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    height:'45px',
    backgroundColor: '#002054',
    color: 'white',
    textAlign: 'center',
    fontFamily: '"Coiny", cursive',
    fontSize:'35px',
    margin:'0 auto'
   
 
}

const header = {
  width: '100%',
 backgroundColor:'#002054',
  height:'80px',
  position:'fixed',
  top:'0px',
  zIndex:'3'
};
 
const headImg={
  height:'70px',
  width:'auto',
  marginLeft:'20px'
}

const fonts={
  fontFamily: '"Coiny", cursive',
  margin:'0 auto',
  marginTop:'5px',
  fontSize:'70px',
 fontWeight:'800',
 color:'#af001d',
 textShadow: '-1px 0 #011f4f, 0 4px #011f4f, 4px 0 #011f4f, 0 -1px #011f4f'
}



class App extends React.Component {
  constructor(props){
   super(props);
   this.state = {
     personFromDB2:[],
     hobbiesArr:[]
   }
  }

  componentDidMount(){

    let url1;
    let url2;
    if(window.location.hostname==='localhost'){
      url1 = 'http://localhost:52035/api/person/datatable';
      url2 = 'http://localhost:52035/api/hobbies';
    }
    else{
      url1 = 'http://proj.ruppin.ac.il/bgroup73/test1/tar4/api/person/datatable';
      url2 = 'http://proj.ruppin.ac.il/bgroup73/test1/tar4/api/hobbies';
    }

    fetch(url1)
    .then(response => response.json())
    .then(arr => this.setState({
      personFromDB2:arr
      
    }))
    .catch(error => console.log('parsing failed', error))
    fetch(url2)
    .then(response => response.json())
    .then(arr => this.setState({
      hobbiesArr:arr
      
    }))
    .catch(error => console.log('parsing failed', error))

    }

   

  render() {
    
    return (
      <div className="App"  >
    <div style={header}>
    <span style={fonts}>Tinder</span>
<img style={headImg} src="Images/hearts1.png"/>

    </div>
    
     <Router>
        
            <Switch>
           
                <Route exact path="/bgroup73/test1/testing/" render={()=><Search personDB={this.state.personFromDB2.map((data)=>{return data;})} hobArr={this.state.hobbiesArr.map((data)=>{return data;})}/>}/>}  />
                <Route exact path="/bgroup73/test1/testing/match" render={()=><User personDB={this.state.personFromDB2.map((data)=>{return data;})} hobArr={this.state.hobbiesArr.map((data)=>{return data;})}/>} />
                <Route path="*" component={Notfound} status = {404} />
                
            </Switch>

  
    </Router>
    <div style={footerStyle}>
  <p>Find your Love </p>
</div>

      </div>
    );
  }
}

export default App;







