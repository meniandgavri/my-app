import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Notfound.css';
import { withRouter } from 'react-router';
import User from './User';
import Search from './Search';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

const backHome = ()=>{
    window.location.assign('/');
}

const marging={
    marginTop:'100px'
}



const Notfound = ()=>
(
<div className="container" style={marging}>
<h1 className="mystyle">Page Not Found</h1>
<img src='Images/sad.jfif'/>
<div className="mystyle">
<button className="ui primary button centerd" onClick={backHome}>Back To Search Page</button>
</div>
</div>

)

export default withRouter(Notfound);