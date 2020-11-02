import {useState} from "react";

export default function StateChangeHook(initialValue){
    const [state,setState] = useState(initialValue)
    
    const resetState = () =>{
        setState("")
    }
    const changeState = (e)=>(
        setState(e.target.value)
    )
    return [state,changeState,resetState]
} 