
import './App.css'
import CharacterCard from './components/characterCard/characterCard'

function App() {
  
  return (
    <div>
      <CharacterCard img= 'hulk.jpg' nombre='David Banner' descripcion='Soy el increible Hulk'/>
      <CharacterCard img= 'spiderman.jpg' nombre='Peter Parker' descripcion= 'Soy el sorprendente Hombre Araña'/>
      <CharacterCard img= 'ironman.jpg' nombre= 'Tony Stark' descripcion= 'Soy Ironman el hombre de Hierro'/> 
    </div>
  )
}

export default App
