import React, { Component } from 'react';

export default class Header extends Component {

    // refrescar una página en React, lo he intentado con reload

    reload = () => {
        window.location.reload(true);
    }

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
		<div className="wrapper">
			<div className="logo">Juego de Memoria</div>
			
			<nav>
				<a href="#">Elegir Nivel</a>
				<a onClick={this.reload} >Reiniciar partida </a>
				<a className="active" href="#">Nº de intentos: </a>
			</nav>
		</div>
	</header>

        )
    }
};
