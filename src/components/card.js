import React, {Component, useState} from 'react';
import ReactCardFlip from 'react-card-flip';

// export default class card extends Component {
//   render() {
//     return (
//       <div className="">

//       </div>
//     )
//   }
// }


// Consumir API estructura y ruta para conseguir la imagen front_default

// useState aplica depues que se corre la funcion y useEffect antes del async await
const Card = (props) => {

    // voltear Cartas
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = e => {
      setIsFlipped(!isFlipped);
    }
  
    // fin voltear cartas 

    
  const [urlimagen, setUrlimagen] = useState("");

  const fetchApi = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+props.kilber);
    const data = await response.json();
    setUrlimagen(data.sprites.other.home.front_default);
  }
  useState(() => {
    fetchApi();
  }, []);

  // asi se imprimime por pantalla {urlimagen} - {props.kilber}
  return(
    <div className='cards'> {props.kilber}
      {/* <img className='cartas' src={urlimagen} />  {props.kilber}  */}

    <ReactCardFlip isFlipped={isFlipped}>
      <img className='cartas' src={"https://cdn-icons-png.flaticon.com/512/6432/6432786.png"} alt='back-face' onClick={handleClick}/> 
      <img className='cartas' src={urlimagen} alt='front-face' onClick={handleClick}/> 
    </ReactCardFlip>

    </div>
  );
}

export default Card