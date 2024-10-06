import React from 'react'
import './titulo.css'

const Titulo = (props) => {
  return (
    <div className='title'>
      <p>{props.name}</p>
    </div>
  )
}
export default Titulo