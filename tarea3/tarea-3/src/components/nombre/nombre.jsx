import React from 'react'
import './nombre.css'


const Nombre = (props) => {
    console.log(props,'props nombre');
  return (
    <div className = 'nombre'>
        <p>
           {props.nombre} 
        </p>
    </div>
  )
}

export default Nombre