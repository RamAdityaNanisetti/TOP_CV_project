import Input from "./Input";
import {useState} from 'react'

function Experience({s}){
    const [experience, setExperience] = useState({cn: "", level: "", role: "", start: "", end: ""})
    function handleCnChange(e){
        setExperience({...experience, cn: e.target.value});
    }
    function handleLevelChange(e){
        setExperience({...experience, level: e.target.value});
    }
    function handleRoleChange(e){
        setExperience({...experience, role: e.target.value});
    }
    function handleStartChange(e){
        setExperience({...experience, start: e.target.value});
    }
    function handleEndChange(e){
        setExperience({...experience, end: e.target.value});
    }
    
    return(
        s ? 
        <section>
            <h2>Experience</h2>
            {Input({type: "text", id: "CompanyName", onChange: handleCnChange, value : experience.cn, label: "Company Name"})}
            {Input({type: "number", id: "Level", onChange: handleLevelChange, value : experience.leve, label: "Level"})}
            {Input({type: "text", id: "Role", onChange: handleRoleChange, value : experience.role, label: "Role"})}
            {Input({type: "date", id: "StartDate", onChange: handleStartChange, value : experience.start, label: "Start Date"})}
            {Input({type: "date", id: "EndDate", onChange: handleEndChange, value : experience.end, label: "End Date"})}
        </section>
        :
        <section>
            <h2>Experience</h2>
            <p>Company Name: {experience.cn}</p>
            <p>Job Level: {experience.level}</p>
            <p>Role: {experience.role}</p>
            <p>Start Date: {experience.start}</p>
            <p>End Date: {experience.end==="" && Date.now() }</p>
        </section>
    )
}

export default Experience;