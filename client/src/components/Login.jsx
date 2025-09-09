import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate()
    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            const res = await fetch("http://localhost:5000/api/auth/login",{
                method : 'POST',
                headers : {"Content-Type" : "application/json"},
                body: JSON.stringify({email,password})
            })

            const data = await res.json()
            if(!res.ok){
                console.log(data.message || "Login failed in client")
            }
            else{
                console.log(data)
                alert("login successful")
                localStorage.setItem("token",data.token)
            }
            navigate("/resumeform")
        }
        catch(err){
            console.error(err)
            alert("Login failed in client catch")
        }
    }
  return (
    <div  className="flex justify-center items-center flex-col mt-[100px] text-xl ml-[530px] shadow-2xl h-[500px] w-[300px]">
        <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col">
            <h2 className="text-3xl font-bold mb-10">Login</h2>
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
            <button type='submit' className="mt-6 hover:cursor-pointer rounded-lg bg-[#268740] text-[#FFFF] h-11 w-24 mb-5">Login</button>
            <p>
                New user?
                <Link to="/" className='flex justify-center items-center text-[#003D16]'>Signup here</Link>
            </p>
        </form>
    </div>
  )
}

export default Login