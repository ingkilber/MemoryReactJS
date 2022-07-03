import React, { useEffect, useState } from "react";
import Header from "./components/header";
import "./App.css";
import Card from "./components/card";

function App() {

  // limitar o solo indicar cuantos obj o items que deseo traer de la api ?limit=2 => se le llama parametros get
  const url = "https://pokeapi.co/api/v2/pokemon/?limit=10";

  const [cards, setCards] = useState([]);


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




  const listItems = cards.map((todo, index) => (
    // usamos index en la key porque todo.name se repite, mientras que el index no porque es unico
    <li className="cards" key={index} >
      <div>
        <Card kilber={todo.name}/>
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