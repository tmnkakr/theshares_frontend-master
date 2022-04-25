import React from 'react';


class TextField extends React.Component {
    render(){
        return <input placeholder="enter value" onChange={(val)=>{
            this.props.funct(val.target.value)
        }}></input>
    }
}

export default TextField;   