import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const ResumeList = (token,onSelectResume,onEditResume) => {
    const [resumes,setResumes] = useState([])


    const fetchResume = async() =>{
        try{
            const res = await axios.get("http://localhost:5000/api/resume",{
                headers:{Authorization:`Bearer ${token}`}
            })
            setResumes(res.data)
        }
        catch(err){
            console.error("Error fetching resume",err)
        }
    }

    useEffect(()=>{
        if(token){
            fetchResume()
        }
    },[token])

    const handleDelete = async(id)=>{
        if(!window.confirm("Are you sure you want to delete this resume")) return;
        try{
            await axios.delete(`http://localhost:5000/api/resume/${id}`,{
                headers:{Authorization : `Bearer ${token}`}
            })
            fetchResume()
        }
        catch(err){
            console.error("Error deleting resume",err)
        }
    }

  return (
    <div>
        <h2>Your Resumes</h2>
        {resumes.length === 0 ? (
            <p>No resumes found.Create One!</p>
        ):(
            <ul>
                {resumes.map((r)=>(
                    <li>
                        <strong>{r.name}</strong>
                        <br/>
                        {r.contact}
                        <br/>
                        <button onClick={() =>onSelectResume(r._id)}>View</button>
                        <button onClick={() => onEditResume(r._id)}>Edit</button>
                        <button onClick={()=> handleDelete(r._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        )}
    </div>
  )
}

export default ResumeList