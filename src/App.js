import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './components/card';

function App() {
  // const url = 'https://pokeapi.co/api/v2/pokemon/ditto'
  // const [cards, setCards] = useState();
  // const fetchApi = async () => {
  //   const response = await fetch (url)
  //   console.log(response.statusText)
  // }

  // useEffect (() => {
  //   fetchApi ()
  // }, [])

  //api funcionando
  // fetch("mock.codes/500")
  // .then(() => console.log("Todo bien"))
  // .catch(() => console.log("Algo falló"))
  // const [cards, setCards] = useState();


  return (
    <div className="App">
      <div className='cartas-container'>
        {
        cards.map((card) => (
          <Card />
        ))  
        }
      </div>    
    </div>
  );
}

export default App;
