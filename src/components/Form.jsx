import GeneralInfo from './GeneralInfo.jsx'
import Education from './Education.jsx'
import Experience from './Experience.jsx'
import '../App.css'
import {useState} from 'react';

function Form(){
    const [submit, setSubmit] = useState(true);
    function handleSubmit(e){
        e.preventDefault();
        setSubmit(submit? false: true);
    }
    return(
        <form onSubmit={handleSubmit}>
            <GeneralInfo s={submit}/>
            <hr />
            <Education s={submit}/>
            <hr />
            <Experience s={submit}/>
            <hr />
            <button type="submit" >{submit? "Submit" : "Edit"}</button>
        </form>
    )
}   

export default Form;