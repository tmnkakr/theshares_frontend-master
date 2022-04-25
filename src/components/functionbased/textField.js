import react from 'react'

const TextField = (props) => {
    return (
        <input placeholder="input" onChange = {(val) => props.changeText(val)}></input>
    )
}
export default TextField;