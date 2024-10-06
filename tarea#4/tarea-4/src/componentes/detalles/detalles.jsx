import React from 'react'
import './detalles.css'

const Detalles = (props) => {
  return (
    <div className='detalles'>
        <p>Genero: {props.gender}</p>
        <p>Estado: {props.status}</p>
    </div>
  )
}

export default Detalles