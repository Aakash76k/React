import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Axios = () => {
  const [users, setUsers] = useState([])
      const [loading, setLoading] = useState(true)
      const [error,setError] = useState(null)
  
      useEffect(()=>{
          axios.get('https://jsonplaceholder.typicode.com/todos')
          
          .then((data)=>{
             setUsers(data.data)
             setLoading(false)
          })
          .catch((err)=>{
            setError(err.message)
            setLoading(false)
          })
      } , [])
  
      if(loading)return <p>Loading data...</p>
    return (
      <div>
          <h3>Axios</h3>
          <ul>
              {users.map((title)=>(
                  <li key={title.id} >Name : {title.title}</li>
              ))}
          </ul>
      </div>
    )
}

export default Axios;
