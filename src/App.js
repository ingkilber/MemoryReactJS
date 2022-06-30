import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './components/card';

function App() {
  const url = 'https://pokeapi.co/api/v2/pokemon/'

  const [cards, setCards] = useState([]);

  const fetchApi = async () => {
    const response = await fetch (url)
    const data = await response.json();
    setCards(data.results);

    console.log(data.results)

  }

  useState(() => {
    fetchApi();
  }, []);
  
  // useEffect (() => {
  //   fetchApi ()
  // }, [])

  //api funcionando
  // fetch("mock.codes/500")
  // .then(() => console.log("Todo bien"))
  // .catch(() => console.log("Algo falló"))
  // const [cards, setCards] = useState();

  const listItems = cards.map((todo) =>
  
  <li key={todo.name}>
    <div>
      <Card />
    </div>
    {todo.name}
  </li>
  );


  return (
    <div className="App">
      <div className='cartas-container'>
        {/* {
        cards.map((card) => (
          <Card />
        ))  
        } */}
    <ul>{listItems}</ul>
      </div>    
    </div>
  );
}

export default App;
