import React from 'react'
import Imagen from './imagen/imagen'
import Titulo from './titulo/titulo'
import Detalles from './detalles/detalles'

const CaracterCard = (props) => {
    
  return (
    <div className ='container'>
        <Imagen image={props.image}/>
        <Titulo name={props.name}/>
        <Detalles gender={props.gender} status={props.status}/>
    </div>
  )
}

export default CaracterCard
