import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../firebase.config'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState("")
    const [isSignInActive,setIsSignInActive] = useState(true)
    const [error,setError] = useState("")
    const handleChangeEmail = (e)=>{
        setEmail(e.target.value)
    }
    const handleChangePassword = (e) =>{
        setPassword(e.target.value)
    }
    const handleMethodChange = ()=>{
            setIsSignInActive(!isSignInActive)
            setError("")
    }
    const handleSignIn =(e)=>{
        e.preventDefault()
        if(!email || !password){
            setError("Please enter your email and password")
            
        }
        signInWithEmailAndPassword(auth,email,password)
        .then(response =>{
            const user = response.user;
            navigate("/private")
            
        })
        .catch( error => {
            const errorMessage = error.message;
            setError(errorMessage)
        })
    }
    const handleSignUp =(e)=>{
    e.preventDefault()
        if(!email || !password){
            setError("Please enter your email and password")
        }
        createUserWithEmailAndPassword(auth,email,password)
        .then(response =>{
            const user = response.user;
            navigate("/private")
        })
        .catch( error => {
            const errorMessage = error.message;
            setError(errorMessage)
        })
    }
  return (
    <div className='flex justify-center flex-col h-screen bg-red-400 items-center mx-auto w-full'>
        <form className='w-[46%] h-[300px] flex gap-1 flex-col p-8 bg-white rounded-md shadow-md justify-center items-center'>
            {isSignInActive ? (<span className='mb-3 font-semibold'>SignIn</span>): ( <span className='mb-3 font-semibold font-serif'>Sign Up</span> )}
            <label htmlFor="email" className='font-medium w-full'>Email</label>
            <input type="email" name="" placeholder='example@gmail.com' onChange={handleChangeEmail} className='border w-full rounded-md p-1 outline-none' id="email" />
            <label htmlFor="password" className='font-medium w-full'>Password</label>
            <input type="password" name="" placeholder='enter a password' className='border w-full rounded-md p-1 outline-none' onChange={handleChangePassword} id="password" />
            <span className='text-red-400 text-sm'>{error}</span>
            {isSignInActive ? ( <button onClick={handleSignIn} className='w-full bg-green-400 px-2 my-2 p-1 rounded-md text-white'>Sign In</button> ) : ( <button onClick={handleSignUp} className='w-full bg-green-400 px-2 my-2 p-1 rounded-md text-white' >Sign Up</button> )}
            <p className='w-full text-sm'>
                {isSignInActive ? "Don't have an account ? ":'Already have an account? '}
                <span className='text-blue-400 cursor-pointer' onClick={handleMethodChange}>
                    {isSignInActive ? "SignUp" : "SignIn"}
                </span>
            </p>
        </form>

    </div>
  )
}
