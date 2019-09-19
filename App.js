import React from 'react';
import AComponent from './AComponent';
import BComponent from './BComponent';

class App extends React.Component{
    
    state = { name : '', id:'', dob:''};

    onFormSubmit = (name,id, dob) =>{
        this.setState({name: name, id:id, dob:dob})
    }
    render(){
        console.log(this.state.id)
        return(
            <div className = "ui container grid">
                <div className = "row">
                    <div className = "eight wide column">
                        <AComponent onFormSubmit = {this.onFormSubmit}/>
                    </div>
                    <div className = "eight wide column">
                        <BComponent name = {this.state.name}
                                        id = {this.state.id}
                                        dob = {this.state.dob}/>
                    </div>
                </div>

                
            </div>
        )
    }
}

export default App;