import react, {useState , useEffect} from 'react'
import TextField from './textField'


const MainPage = (props) => {
    const onChangeText = (val) => {
        setText(val.target.value)
    }
    let [text,setText] = useState('')
    return ( <div>
        <h1>{text}</h1>
        <TextField changeText={onChangeText} />
    </div> )
}
export default MainPage;