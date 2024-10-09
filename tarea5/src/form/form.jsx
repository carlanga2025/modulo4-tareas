import React, { useState } from 'react'
import './form.css'
const Form = (props) => {
    const [nombre, setNombre] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()

        if(nombre === '' && password === '') {
            setError(true)
        }else{
            setError(false)
            props.setUser([nombre])
        } 
    }
  return (
    <div>
        <form className='form' onSubmit={handleSubmit}>
        <input onChange={e=> {
            setNombre(e.target.value)
        }} type="text" value={nombre} placeholder='name'/>
        {error && <p>campo es obligatorio</p>}
        <input onChange={e=> {
            setPassword(e.target.value)
        }}type="text" value={password} placeholder='password'/>
        {error && <p>campo es obligatorio</p>}
        <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Form