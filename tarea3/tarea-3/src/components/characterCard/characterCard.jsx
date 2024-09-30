import React from 'react'
import Imagen from '../imagen/imagen'
import Nombre from '../nombre/nombre'
import Descripcion from '../descripcion/descripcion'

const CharacterCard = (props) => {
  console.log(props,'deatil');
  return (
    <div className= 'card'>
    <Imagen img = {props.img}/>
    <Nombre nombre = {props.nombre}/>
    <Descripcion descripcion = {props.descripcion}/>
  </div>
  );
}

export default CharacterCard