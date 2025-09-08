import React from "react";
import axios from "axios";
import { useState } from "react";

const ResumeBuilder = () => {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    summary: "",
    skills: "",
    experience: [
      { title: "", company: "", startDate: "", endDate: "", description: "" },
    ],
    education: [{ institution: "", degree: "", year: "" }],
  });
  const [msg,setMsg] = useState("")

  const handleChange = (e) =>{
    setForm({...form,[e.target.name]:[e.target.value]})
  }

  const handleArrrayChange = (e,idx,field) =>{
    const updatedArray = [...form[field]]
    updatedArray[idx][e.target.name] = e.target.value;
    setForm({...form,[field]:updatedArray})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Create Resume</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="contact"
          placeholder="Enter your Contact Info"
          value={form.contact}
          onChange={handleChange}
          required
        />
        <input
          type="summary"
          placeholder="Enter summary about yourself"
          value={form.summary}
          onChange={handleChange}
          required
        />

        <h3>Experience</h3>
        {form.experience.map((exp, idx) => {
          <div>
            <input
              name="title"
              placeholder="Enter title"
              value={exp.title}
              onChange={(e) => handleArrrayChange(e, idx, "experience")}
            />
            <input
              name="company"
              placeholder="Enter the company name"
              value={exp.company}
              onChange={(e) => handleArrrayChange(e, idx, "experience")}
            />
            <input
              name="startdate"
              placeholder="Enter the StartDate"
              value={exp.startDate}
              onChange={(e) => handleArrrayChange(e, idx, "experience")}
            />
            <input
              name="enddate"
              placeholder="Enter the End Date"
              value={exp.endDate}
              onChange={(e) => handleArrrayChange(e, idx, "experience")}
            />
            <input
              name="description"
              placeholder="Enter description"
              value={exp.description}
              onChange={(e) => handleArrrayChange(e, idx, "experience")}
            />
          </div>;
        })}
        <button type="button" onClick={addExperience}>
          +Add Experience
        </button>
        <h3>Education</h3>
        {form.education.map((edu, idx) => {
          <div>
            <input
              name="institution"
              placeholder="Enter your college name"
              value={edu.institution}
              onChange={(e) => handleArrrayChange(e, idx, "education")}
            />
            <input
              name="degree"
              placeholder="Enter your Degree"
              value={edu.degree}
              onChange={(e) => handleArrrayChange(e, idx, "education")}
            />
            <input
              name="year"
              placeholder="Enter your year of graduation"
              value={edu.year}
              onChange={(e) => handleArrrayChange(e, idx, "education")}
            />
          </div>
        })}
        <button type="button" onClick={addEducation}>+Add Education</button>
        <h3>Skills</h3>
        {form.skills.map((skill,idx)=>{
            <input
                key={idx}
                value={skill}
                placeholder="Enter Skill"
                onChange={e =>handleSkillChange(e,idx)}
            />
        })}
        <button type="button" onClick={addSkill}>+Add Skill</button>
        <button type="submit">Save Resume</button>
        <div>{msg}</div>
      </form>
    </div>
  );
};

export default ResumeBuilder;
