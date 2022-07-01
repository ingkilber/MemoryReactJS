import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Card from "./components/card";

function App() {
  const url = "https://pokeapi.co/api/v2/pokemon/";

  const [cards, setCards] = useState([]);

  const fetchApi = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCards(data.results);

    console.log(data.results);



    data.results.forEach((element) => {
      // Aqui realizo el frects, la consulta para obtener datos
      fetch("https://pokeapi.co/api/v2/pokemon/"+element.name)
      //obtiene la respuestas
        .then((resp) => resp.json())
        //funcion anonima
        .then(function (data) {
          console.log(data.sprites.other.home.front_default)
          // let authors = data.results;
        })
        .catch(function (error) {
          console.log(error);
        });

      console.log(element.name);
    });

    // extraer imagenes

    // const responseimg = await fetch ("https://pokeapi.co/api/v2/pokemon/")
    // const dataimg = await responseimg.json ();

    // console.log(dataimg.sprites.other)

    // fin de extraer imagenes
  };

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

  const listItems = cards.map((todo) => (
    <li className="cartas" key={todo.name}>
      <div>
        <Card />
      </div>
      
      {todo.name}
    </li>
  ));


  const listItems2 = cards.forEach(element => {
    <li className="cartas" key={element.name}>
      <div>
        hola
      </div>
      
      {element.name}
    </li>
    
  });

  return (
    <div className="header">
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
