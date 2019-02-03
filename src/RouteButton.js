import React from "react";
import { Route } from 'react-router-dom';
var  Filtered_Per=[];
var ok;
var okGen;
const styling={
    margin:'auto',
    marginTop:'10px',
    fontFamily:'"Bree Serif", serif',
    fontSize:'20px'
}
const condition = (props)=>{
    
    if(props.gender==1){
        okGen=false;
    }
    else{
        okGen=true;
    }
  if(props.minAge>props.maxAge){
      ok=false;
  }
  else{
      ok=true;
  }
    var temp=props.personDB;
   
    for (var i=0; i<temp.length;i++){
        if(temp[i].Gender==props.gender)
        {
          if(temp[i].Age>=props.minAge&&temp[i].Age<=props.maxAge){
            Filtered_Per.push(temp[i]);
            }
        
        }
      }
    
}

const RouteButton = (props) => {
    Filtered_Per = [];
   

    return (
        <Route render={({ history }) => (
            <button style={styling}className="ui primary button centerd" onClick={() => {
                condition(props);
                history.push({
                    pathname: props.pathname,
                    hobbiesArr:props.hobbiesArr,
                    personDB:Filtered_Per,
                    validate:ok,
                    validateGen:okGen,
                    bigArr:props.personDB
                });
               
            }}>
                {props.value}
            </button>
        )}
        />
    )
}



export default RouteButton;