import React from 'react'
import axios from 'axios'
import { useState } from 'react'


const ResumeBuilder = () => {
    const [form,setForm] = useState({
        name: "",
        contact:"",
        summary:"",
        skills:"",
        experience:[{title:"",company:"",startDate:"",endDate:"",description:""}],
        education:[{institution:"",degree:"",year:""}]
    })
  return (
    <div>
        <form>
            <h2>Create Resume</h2>
            <input
                type='text'
                placeholder='Enter your name'
                value={form.name}
                onChange={handleChange}
                required
            />
            <input
                type='contact'
                placeholder='Enter your Contact Info'
                value={form.contact}
                onChange={handleChange}
                required
            />
            <input
                type='summary'
                placeholder='Enter summary about yourself'
                value={form.summary}
                onChange={handleChange}
                required
            />

            <h3>Experience</h3>
            {form.experience.map((exp,idx)=>{
                <div>
                    <input
                        name='title'
                        placeholder='Enter title'
                        value={exp.title}
                        onChange={e => handleArrrayChange(e,idx,'experience')}
                    />
                    <input
                        name='company'
                        placeholder='Enter the company name'
                        value={exp.company}
                        onChange={e => handleArrrayChange(e,idx,'experience')}
                    />
                    <input
                        name='startdate'
                        placeholder='Enter the StartDate'
                        value={exp.startDate}
                        onChange={e => handleArrrayChange(e,idx,'experience')}
                    />
                    <input
                        name='enddate'
                        placeholder='Enter the End Date'
                        value={exp.endDate}
                        onChange={e => handleArrrayChange(e,idx,'experience')}
                    />
                    <input
                        name='description'
                        placeholder='Enter description'
                        value={exp.description}
                        onChange={e => handleArrrayChange(e,idx,'experience')}
                    />
                </div>
            })}
        </form>
    </div>
  )
}

export default ResumeBuilder