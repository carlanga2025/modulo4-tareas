import React from 'react'
import './descripcion.css'

const Descripcion = (props) => {
    console.log(props,'props descripcion');
  return (
    <div className= 'descripcion'>
        <p>
        {props.descripcion}
        </p>
    </div>
  )
}

export default Descripcion