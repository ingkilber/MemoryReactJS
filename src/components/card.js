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
    <div> <img className='cartas' src={urlimagen} />  {props.kilber} </div>
  );
}

export default Card