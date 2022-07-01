import React, { Component } from 'react';

export default class Header extends Component {
    render () {
        return (
            // <header>
            //     <div className='titulo'> Juego de Memoria </div>
            //     <div>                
            //         <button className='boton-reiniciar'>
            //             Reiniciar partida 
            //         </button>
            //     </div>
            //     <div className='titulo'>
            //         Nº de intentos:
            //     </div>
            // </header>

            <header>
		<div class="wrapper">
			<div class="logo">Juego de Memoria</div>
			
			<nav>
				<a href="#">Elegir Nivel</a>
				<a href="#">Reiniciar partida </a>
				<a class="active" href="#">Nº de intentos: </a>
			</nav>
		</div>
	</header>

        )
    }
};
