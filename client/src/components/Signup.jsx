import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            const res = await fetch("http://localhost:5000/api/auth/signup",{
                method : 'POST',
                headers : {"Content-type":"application/json"},
                body : JSON.stringify({name,email,password})
            })

            const data = await res.json()
            if(!res.ok){
                alert("Signup sfailed" || data.message)
            }

            alert("Signup successful")
        }
        catch(err){
            console.error(err)
            alert("Signup failed")
        }
    }
  return (
    <div className="flex justify-center items-center flex-col mt-[100px] text-xl ml-[530px] shadow-2xl h-[500px] w-[300px]">
        <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col">
            <h2 className="text-3xl font-bold mb-10">Signup</h2>
            <input
                type='text'
                placeholder='Enter your name'
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className="border-2 rounded-lg text-[#003D16] border-[#003d16] bg-transparent mb-5"
            />
            <input
                type='email'
                placeholder='Enter your email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="border-2 rounded-lg text-[#003D16] border-[#003d16] bg-transparent mb-5"
            />
            <input
                type='password'
                placeholder='Enter your password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="border-2 rounded-lg text-[#003D16] border-[#003d16] bg-transparent mb-5"
            />
            <button type='submit' className="mt-6 hover:cursor-pointer rounded-lg bg-[#268740] text-[#FFFF] h-11 w-24 mb-5">Signup</button>
            <p>
                Already a user?
                <Link to="/login" className='flex justify-center items-center text-[#003D16]'>Login here</Link>
            </p>
        </form>
    </div>
  )
}

export default Signup