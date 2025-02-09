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
            {Input({type: "text", id: "name", onChange: handleNameChange, value: generalInfo.name, label: "Name" })}
            {Input({type: "email", id: "email", onChange: handleEmailChange, value: generalInfo.email, label: "Email" })}
            {Input({type: "text", id: "phone", onChange: handlePhoneChange, value: generalInfo.phone, label: "Phone Number" })}
        </section>
        :
        <section>
            <h2>General Information</h2>
            <div className="row">
                <p className="title">Name</p><p className="text">: {generalInfo.name}</p>
            </div>
            <div className="row">
                <p className="title">Email</p><p className="text">: {generalInfo.email}</p>
            </div>
            <div className="row">
                <p className="title">Phone Number</p><p className="text">: {generalInfo.phone}</p>
            </div>
        </section>
        
    )
}

export default GeneralInfo;