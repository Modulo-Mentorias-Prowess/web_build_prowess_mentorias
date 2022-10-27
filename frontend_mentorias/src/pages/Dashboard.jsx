import React, {useEffect} from 'react'
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate()
    const userName = localStorage.getItem("username")
    useEffect(() => {
        if(!userName){
            navigate("/login")
        }
        
      }, [])
  return (
    <div>TODO: Dashboard</div>
  )
}

export default Dashboard