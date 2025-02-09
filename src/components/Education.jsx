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
            {Input({type: "text", id: "SchoolName", onChange: handleSnChange, value : education.sn, label: "School Name"})}
            {Input({type: "text", id: "StudyTitle", onChange: handleTitleChange, value : education.title, label: "Course Title "})}
            {Input({type: "date", id: "StudyEndDate", onChange: handleDateChange, value : education.date, label: "End Date"})}
        </section>
        :

        <section>
            <h2>Education</h2>
            <div className="row">
                <p className="title">School Name</p><p className="text">: {education.sn}</p>
            </div>
            <div className="row">
                <p className="title">Study Title</p><p className="text">: {education.title}</p>
            </div>
            <div className="row">
                <p className="title">Study End Date</p><p className="text">: {education.date}</p>
            </div>
        </section>
    )
}

export default Education;