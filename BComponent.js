import React from 'react';
import './style.css';

const RightComponent = (props) =>{
    if(!props.name){
        return(
            <div>
                Loading..
            </div>
        )
    }else{
        return(
            <div className="myForm" >
            <label htmlFor="username">Username:</label>
            <input type="text" value = {props.name} />
                <label htmlFor="username">ID:</label>
                 <input 
                         type = "text" 
                         value = {props.id}  />
             <label htmlFor="birthdate">Birthdate:</label>
             <input
             value = {props.dob}
              placeholder="MM/DD//YYYY"
              pattern="\d{2}\/\d{2}/\d{4}"
            
              required />
            
            </div>
        )
    }

}

export default RightComponent;