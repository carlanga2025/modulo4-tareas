import React from 'react'
import './imagen.css'

const Imagen = (props) => {
    console.log(props, 'props ruta imagen');
  return (
    <div>
        <img src= {props.img} alt= 'imagen hulk'/>
    </div>
  )
}

export default Imagen