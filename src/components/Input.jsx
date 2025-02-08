

const Input = ({type, id, onChange, value, label}) =>{
    return(
    <div >
        <label htmlFor="type" >{label}</label>
        <input type={type} id={id} onChange={onChange} value={value}/>
    </div>
    )
}

export default Input;