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
            {Input({type: "number", id: "Level", onChange: handleLevelChange, value : experience.level, label: "Level"})}
            {Input({type: "text", id: "Role", onChange: handleRoleChange, value : experience.role, label: "Role"})}
            {Input({type: "date", id: "StartDate", onChange: handleStartChange, value : experience.start, label: "Start Date"})}
            {Input({type: "date", id: "EndDate", onChange: handleEndChange, value : experience.end, label: "End Date (Optional)"})}
        </section>
        :
        <section>
            <h2>Experience</h2>
            <div className="row">
                <p className="title">Company Name</p><p className="text">: {experience.cn}</p>
            </div>
            <div className="row">
                <p className="title">Job Level</p><p className="text">: {experience.level}</p>
            </div>
            <div className="row">
                <p className="title">Role</p><p className="text">: {experience.role}</p>
            </div>
            <div className="row">
                <p className="title">Start Date</p><p className="text">: {experience.start}</p>
            </div>
            <div className="row">
                <p className="title">End Date</p><p className="text">: {experience.end==="" && "Currently Working"}</p>
            </div>
        </section>
    )
}

export default Experience;