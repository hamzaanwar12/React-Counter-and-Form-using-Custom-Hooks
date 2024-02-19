import "./LoginForm.css"
import { useSelector,useDispatch } from "react-redux"
import { useRef, useState } from "react"

import { authActions } from "./store/CounterToolKitStore"

const LoginForm = ()=>
{
    const auth = useSelector(state=>state.authentication)
    const dispatch = useDispatch()
    const [emailValue,setEmail] = useState("")
    const [passwordValue,setPassword] = useState("")


    const submitHandler = (event)=>
    {
        event.preventDefault()
        if(emailValue.includes("@") && passwordValue.length>6)  
             dispatch(authActions.login())
        
    }
    const emailChange=  (event) =>setEmail(event.target.value)
    const passwordChange=  (event) =>setPassword(event.target.value)
    

    return(
        <form onSubmit = {submitHandler}>
            <h3>Email</h3>
            <input type="email" value = {emailValue} onChange={emailChange}/>
            <h3>PassWord</h3>
            <input type="password" value = {passwordValue} onChange={passwordChange}/>
            <button type="submit">Login</button>
        </form>
    )

}

export default LoginForm