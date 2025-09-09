import React, { useState } from "react";
import axios from "axios";

const ResumeBuilder = ({ token }) => {
  const initialForm = {
    name: "",
    contact: "",
    summary: "",
    skills: [""],
    experience: [
      { title: "", company: "", startDate: "", endDate: "", description: "" },
    ],
    education: [{ institution: "", degree: "", year: "" }],
  };

  const [form, setForm] = useState(initialForm);
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleArrayChange = (e, idx, field) => {
    const updatedArray = [...form[field]];
    updatedArray[idx][e.target.name] = e.target.value;
    setForm({ ...form, [field]: updatedArray });
  };

  const handleSkillChange = (e, idx) => {
    const updatedSkill = [...form.skills];
    updatedSkill[idx] = e.target.value;
    setForm({ ...form, skills: updatedSkill });
  };

  const addExperience = () => {
    setForm({
      ...form,
      experience: [
        ...form.experience,
        { title: "", company: "", startDate: "", endDate: "", description: "" },
      ],
    });
  };

  const addSkill = () => {
    setForm({ ...form, skills: [...form.skills, ""] });
  };

  const addEducation = () => {
    setForm({
      ...form,
      education: [
        ...form.education,
        { institution: "", degree: "", year: "" },
      ],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const token = localStorage.getItem("token")
      await axios.post("http://localhost:5000/api/resume", form, {
        headers: { Authorization: token },
      });
      setMsg("Resume saved");
      setForm(initialForm);
    } catch (err) {
      setMsg("Error saving resume in client");
    }
  };

  return (
    <div className="flex justify-center flex-col ">
      <h2 className="text-3xl flex justify-center ">Resume</h2>
      
      <div className="flex justify-center flex-col ml-[460px] shadow-2xl h-[1000px] w-[450px] mt-10">
        <h2 className="flex justify-center  text-2xl">Create Resume</h2>
        <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col text-xl  mt-[50px] ">
        
        
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
          className="border-2 h-[30px] w-[380px] border-[#00b4d8] mb-2 rounded-md"
          required
        />
        <input
          type="text"
          name="contact"
          placeholder="Enter your Contact Info"
          value={form.contact}
          onChange={handleChange}
          required
          className="border-2 h-[30px] w-[380px] border-[#00b4d8] mb-2 rounded-md"
        />
        <input
          type="text"
          name="summary"
          placeholder="Enter summary about yourself"
          value={form.summary}
          onChange={handleChange}
          required
          className="border-2 h-[30px] w-[380px] border-[#00b4d8] mb-2 rounded-md"
        />

        <h3 className="text-2xl mb-1">Experience</h3>
        {form.experience.map((exp, idx) => (
          <div key={idx} className="flex flex-col">
            <input
              name="title"
              placeholder="Enter title"
              value={exp.title}
              onChange={(e) => handleArrayChange(e, idx, "experience")}
              className="border-2 h-[30px] w-[380px] border-[#00b4d8] mb-2 rounded-md"
            />
            <input
              name="company"
              placeholder="Enter the company name"
              value={exp.company}
              onChange={(e) => handleArrayChange(e, idx, "experience")}
              className="border-2 h-[30px] w-[380px] border-[#00b4d8] mb-2 rounded-md"
            />
            <input
              name="startDate"
              placeholder="Enter the Start Date"
              value={exp.startDate}
              onChange={(e) => handleArrayChange(e, idx, "experience")}
              className="border-2 h-[30px] w-[380px] border-[#00b4d8] mb-2 rounded-md"
            />
            <input
              name="endDate"
              placeholder="Enter the End Date"
              value={exp.endDate}
              onChange={(e) => handleArrayChange(e, idx, "experience")}
              className="border-2 h-[30px] w-[380px] border-[#00b4d8] mb-2 rounded-md"
            />
            <input
              name="description"
              placeholder="Enter description"
              value={exp.description}
              onChange={(e) => handleArrayChange(e, idx, "experience")}
              className="border-2 h-[30px] w-[380px] border-[#00b4d8] mb-3 rounded-md"
            />
          </div>
        ))}
        <button type="button" onClick={addExperience} className="bg-[#caf0f8] h-[50px] w-[170px] mt-2 mb-3 rounded-2xl">
          Add Experience
        </button>

        <h3 className="text-2xl mb-1">Education</h3>
        {form.education.map((edu, idx) => (
          <div key={idx} className="flex flex-col">
            <input
              name="institution"
              placeholder="Enter your college name"
              value={edu.institution}
              onChange={(e) => handleArrayChange(e, idx, "education")}
              className="border-2 h-[30px] w-[380px] border-[#00b4d8] mb-3 rounded-md"
            />
            <input
              name="degree"
              placeholder="Enter your Degree"
              value={edu.degree}
              onChange={(e) => handleArrayChange(e, idx, "education")}
              className="border-2 h-[30px] w-[380px] border-[#00b4d8] mb-3 rounded-md"
            />
            <input
              name="year"
              placeholder="Enter your year of graduation"
              value={edu.year}
              onChange={(e) => handleArrayChange(e, idx, "education")}
              className="border-2 h-[30px] w-[380px] border-[#00b4d8] mb-3 rounded-md"
            />
          </div>
        ))}
        <button type="button" onClick={addEducation} className="bg-[#caf0f8] h-[50px] w-[170px] mt-2 mb-3 rounded-2xl">
          Add Education
        </button>

        <h3>Skills</h3>
        {form.skills.map((skill, idx) => (
          <div key={idx} className="flex flex-col">
            <input
              value={skill}
              placeholder="Enter Skill"
              onChange={(e) => handleSkillChange(e, idx)}
              className="border-2 h-[30px] w-[380px] border-[#00b4d8] mb-3 rounded-md"
            />
          </div>
        ))}
        <button type="button" onClick={addSkill} className="bg-[#caf0f8] h-[50px] w-[170px] mt-2 mb-3 rounded-2xl">
          Add Skill
        </button>

        <button type="submit" className="bg-[#caf0f8] h-[50px] w-[170px] mt-2 mb-3 rounded-2xl">Save Resume</button>
        <div>{msg}</div>
      </form>
      </div>
      
    </div>
  );
};

export default ResumeBuilder;
