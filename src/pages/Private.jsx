import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../../firebas.config'

export const Private = () => {
  const handleSignOut =()=>{
    signOut(auth)
    .then(()=>{
      alert("Sign Out Successfully!")
    })
    .catch(error => alert(error.message))
  }
  return (
    <div>
      <div>
        <h1>Welcom To Dashboard</h1>
        <button className='bg-red-700 p-2 rounded-md text-white' onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  )
}
