import React, {Component, useState, useEffect} from 'react';
import ReactCardFlip from 'react-card-flip';


// Consumir API estructura y ruta para conseguir la imagen front_default

// useState aplica depues que se corre la funcion y useEffect antes del async await
const Card = ({props, name, number, flipCard, unflippedCards, disabledCards}) => {

    // voltear Cartas
    const [isFlipped, setIsFlipped] = useState(false);

    const [hasEvent, setHasEvent] = useState(true);

    //ejecutar funcion para voltear cartas
    
    useEffect(() => {
      if (unflippedCards.includes(number)) {
        setTimeout(() => setIsFlipped(false), 700);
      }
    }, [unflippedCards])

    useEffect(() => {
      if (disabledCards.includes(number)) {
        setHasEvent(false);
      }
    }, [disabledCards])


    const handleClick = e => {
      const value = flipCard(name, number);
      if (value !== 0) {
        setIsFlipped(!isFlipped);
      }
    }
  
    // fin voltear cartas 

    
  const [urlimagen, setUrlimagen] = useState("");

  const fetchApi = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+props.kilber);
    const data = await response.json();
    // Recorriendo json para encontrar las imegenes que se encuentran en el front_default
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
      <img className='cartas' src={"https://cdn-icons-png.flaticon.com/512/6432/6432786.png"} alt='back-face' onClick={hasEvent ? handleClick : null}/> 
      <img className='cartas' src={urlimagen} alt='front-face' onClick={hasEvent ? handleClick : null}/> 
    </ReactCardFlip>

    </div>
  );
}

export default Card