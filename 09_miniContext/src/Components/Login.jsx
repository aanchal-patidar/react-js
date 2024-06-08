import React from "react"
import { useState,useContext } from "react"
import userContext from "../Context/UserContext"

function Login(){
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')
    const {setUser} = useContext(userContext)
    function handleSubmit(e)
    {
        e.preventDefault()
        setUser({username,password})

    }
    return(
        <div>
            <h2>Login</h2>
            <input type="text" 
            onChange={(e)=>{
                setUsername(e.target.value)
            }}
            placeholder="username" value={username} />
            <br />
            <input type="password"
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
             placeholder="abc@123"
              value={password} />
              <br />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login