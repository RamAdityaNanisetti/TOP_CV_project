import Input from "./Input.jsx"
import {useState} from 'react'

function Education({s}){
    const [education, setEducation] = useState({sn: "", title: "", date: ""})

    function handleSnChange(e){
        setEducation({...education, sn: e.target.value});
    }
    function handleTitleChange(e){
        setEducation({...education, title: e.target.value});
    }
    function handleDateChange(e){
        setEducation({...education, date: e.target.value});
    }
   
    return(
        s ?
        <section>
            <h2>Education</h2>
            {Input({type: "text", id: "SchoolName", onChange: handleSnChange, value : education.sn})}
            {Input({type: "text", id: "StudyTitle", onChange: handleTitleChange, value : education.title})}
            {Input({type: "date", id: "StudyEndDate", onChange: handleDateChange, value : education.date})}
        </section>
        :

        <section>
            <h2>Education</h2>
            <p>School Name: {education.sn}</p>
            <p>Study Title: {education.title}</p>
            <p>Study End Date: {education.date}</p>
        </section>
    )
}

export default Education;