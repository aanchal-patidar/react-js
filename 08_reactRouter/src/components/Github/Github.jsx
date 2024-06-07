import React from "react"
import {useState,useEffect} from "react"
import {useLoaderData} from "react-router-dom"

function Github(){
    const data = useLoaderData()
    // const[data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/aanchal-patidar')
    //     .then((response)=> response.json())
    //     .then((data)=>setData(data))
    // },[])

    return (
        
        <div className="bg-black p-4 text-3xl flex justify-center text-white">
            Github followers : {data.followers} 
        </div>
    )
}

export default Github

export const githubInfo = async()=>{  // for using loader 
    const response = await(fetch('https://api.github.com/users/aanchal-patidar'))
    return response.json()
}