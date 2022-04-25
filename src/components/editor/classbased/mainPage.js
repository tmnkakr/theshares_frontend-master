import React from 'react';
import  TextField  from './textField'

class MainPage extends React.Component {
    state = {
        text:""
    }
    func = (val) =>{
        
        this.setState({text: val})
    }
    render(){
        
        return ( <div>
            <h1>{this.state.text}</h1>
            <TextField funct={this.func} />
        </div> )
    }
}


export default MainPage;   