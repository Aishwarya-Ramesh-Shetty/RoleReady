import React from 'react'
import { useState } from 'react'

const ResumeView = () => {
    const [resume,setResume] = useState("")
    const [error,setError] = useState("")
  return (
    <div>
        <button>&larr;Back</button>
        <h2>{resume.name}</h2>
        <p>{resume.contact}</p>
        <p>{resume.summary}</p>
        <h3>Experience</h3>
        {resume.experience?.length > 0 ? (
            <ul>
                {resume.experience.map((exp,idx)=>(
                    <li>
                        <strong>{exp.title}</strong>
                        <br/>
                        <strong>{exp.company} ({exp.startDate} - {exp.endDate})</strong>
                        <div>{exp.description}</div>
                    </li>
                ))}
            </ul>
        ):(
            <p>No experience added</p>
        )}
        <h3>Education</h3>
        {resume.education?.length > 0 ? (
            <ul>
                {resume.education.map((edu,idx) => (
                    <li>
                        <strong>{edu.institution}</strong>
                        <br/>
                        <p>{edu.degree}</p>
                        <p>{edu.year}</p>
                    </li>
                ))}
            </ul>
        ):(
            <p>No education specified</p>
        )}
        <h3>Skills</h3>
        {resume.skills?.length > 0 ? (
            <ul>
                {resume.skills.map((skill,idx)=> (
                    <li>
                        {skill}
                    </li>   
                ))}
            </ul>
        ):(
             <p>No skills added</p>
        )}
    </div>
  )
}

export default ResumeView