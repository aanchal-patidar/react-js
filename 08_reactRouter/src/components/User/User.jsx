import React from "react"
import  {useParams} from "react-router-dom"
function User(){
    const {userid} = useParams()
    return (
        <div className="bg-gray-700 text-white flex justify-center p-3 text-2xl">User : {userid}</div>
    )
}

export default  User