import './characterCard.css'

const CharacterCard = (props) => {  
  const handleClick = () => {
    props.setUser([])
  }
    
  return (
    <div>  
      <img src={props.img} alt="" />
      <h1>{props.name}</h1>  
      <button onClick={handleClick}>Close</button>    
    </div>
  )
}

export default CharacterCard