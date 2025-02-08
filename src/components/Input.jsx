const Input = ({type, id, onChange, value}) =>{
    return(
    <div >
        <label htmlFor="type" >{id}</label>
        <input type={type} id={id} onChange={onChange} value={value}/>
    </div>
    )
}

export default Input;