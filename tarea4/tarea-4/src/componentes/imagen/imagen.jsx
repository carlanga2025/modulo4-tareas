import React from 'react'
import './imagen.css'

const Imagen = (props) => {
  return (
    <div className='imagen'>
        <img src={props.image}/>
    </div>
  )
}

export default Imagen