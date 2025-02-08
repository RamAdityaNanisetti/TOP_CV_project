import Input from "./Input";
import {useState} from 'react';

const GeneralInfo = ({s})=>{
    const [generalInfo, setGeneralInfo] = useState({name: '', email: '', phone: '' });

    function handleNameChange(e){
        setGeneralInfo({...generalInfo, name: e.target.value});
    }
    function handleEmailChange(e){
        setGeneralInfo({...generalInfo, email: e.target.value});
    }
    function handlePhoneChange(e){
        setGeneralInfo({...generalInfo, phone: e.target.value});
    }

    
    return(
        s ? 
        <section>
            <h2>General Information</h2>
            {Input({type: "text", id: "name", onChange: handleNameChange, value: generalInfo.name })}
            {Input({type: "email", id: "email", onChange: handleEmailChange, value: generalInfo.email })}
            {Input({type: "text", id: "phone", onChange: handlePhoneChange, value: generalInfo.phone })}
        </section>
        :
        <section>
            <h2>General Information</h2>
            <p>Name: {generalInfo.name}</p>
            <p>Email: {generalInfo.email}</p>
            <p>Phone Number: {generalInfo.phone}</p>
        </section>
        
    )
}

export default GeneralInfo;