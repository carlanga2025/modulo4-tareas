
import { useEffect, useState } from 'react'
import './App.css'
import CharacterCard from './components/characterCard/characterCard'
import Form from './form/form';

function App() {
  const [imagen, setImagen] = useState('');
  const [name, setName] = useState('');
  const [user, setUser] = useState([])

  useEffect(() => {
    const url = 'https://rickandmortyapi.com/api/character/9';
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setName(data.name)
      setImagen(data.image)
    })
    .catch((error) => {
    })
},[])
  return (
      <div>
        {
          !user.length > 0 ? <Form setUser={setUser} />
          : <CharacterCard user={user}
        name= {name} 
        img={imagen} setUser={setUser}/>
        }             
      </div> 
  )
}
export default App