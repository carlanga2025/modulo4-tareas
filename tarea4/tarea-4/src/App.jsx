
import { useEffect, useState } from 'react';
import './App.css'
import CaracterCard from './componentes/caracterCard'


function App() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  
  const rickAndMortyCharacterId = 9;

  useEffect(() => {
   
    fetch("https://rickandmortyapi.com/api/character/" + rickAndMortyCharacterId)
    .then((response) => response.json())
    .then((result) => {
        console.log(result, 'result') 
        setImage(result.image);
        setName(result.name);
        setGender(result.gender);
        setStatus(result.status);
  }).catch((error) => {
    console.error('error', error);
  });
}, []);

  return (
    <CaracterCard  image={image} name={name} gender={gender} status={status}/>  
  )
}

export default App
