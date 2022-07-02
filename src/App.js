import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Card from "./components/card";

function App() {

  // limitar o solo indicar cuantos obj o items que deseo traer de la api ?limit=2 => se le llama parametros get
  const url = "https://pokeapi.co/api/v2/pokemon/?limit=10";

  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState ({});
  const [secondCard, setSecondCard] = useState ({});

  const [unflippedCards, setUnflippedCards] = useState([]);
  const [disabledCards, setDisabledCards] = useState([]);

  const fetchApi = async () => {
    const response = await fetch(url);
    const data = await response.json();

    // multiplicar dos array para obtener un resultado duplicado

let multiplicar = data.results;
let unir = multiplicar.concat(multiplicar);

setCards(unir);

    // Desordenar imagenes
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
    shuffleArray (unir);
    

    // data.results.forEach((element) => {
    //   // Aqui realizo el frects, la consulta para obtener datos
    //   fetch("https://pokeapi.co/api/v2/pokemon/"+element.name)
    //   //obtiene la respuestas
    //     .then((resp) => resp.json())
    //     //funcion anonima
    //     .then(function (data) {
    //       // console.log(data.sprites.other.home.front_default)
    //       // let authors = data.results;
    //     })
    //     .catch(function (error) {
    //       // console.log(error);
    //     });
    //   // console.log(element.name);
    // });
  };

  useState(() => {
    fetchApi();
  }, []);

  //nos dice que va a funcionar cada ves que tenga una segunda carta
  useEffect(() => {
    checkForMatch();
  }, [secondCard]);

  //metodo para voltear las cartas
  const flipCard = (name, number) => {
    if (firstCard.name === name && firstCard.number === number) {
      return 0;
    }
    if (!firstCard.name) {
      setFirstCard({ name, number });
    }
    else if (!secondCard.name) {
      setSecondCard({ name, number });
    }
    return 1;
  }

// Saber si una carta es igual a otra
  const checkForMatch = () => {
    if (firstCard.name && secondCard.name) {
      const match = firstCard.name === secondCard.name;
      match ? disableCards() : unflipCards();
    }
  }

  const disableCards = () => {
    setDisabledCards([firstCard.number, secondCard.number]);
    resetCards();
  };

  const unflipCards = () => {
    setUnflippedCards([firstCard.number, secondCard.number]);
    resetCards();
  };

  const resetCards = () => {
    setFirstCard({});
    setSecondCard({});
  }



  const listItems = cards.map((todo) => (
    <li className="cards" key={todo.name}>
      <div>
        <Card 
        kilber={todo.name} 
        flipCard={flipCard}
        unflippedCards={unflippedCards}
        disabledCards={disabledCards} />
      </div>
    </li>
  ));

  return (
    <div>
      <Header />
      <div className="App">
        <div className="cartas-container">
          <ul>{listItems}</ul>
        </div>
      </div>
    </div>
  );
}

export default App;
