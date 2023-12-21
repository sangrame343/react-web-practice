import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const { userid } = useParams()
  return (
    <div>
    <h1 className='text-center bg-yellow-400 text-3xl p-8'> User : {userid}
    </h1>  
    </div>
  )
}

export default User
