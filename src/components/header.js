import React, { Component } from 'react';

export default class Header extends Component {
    render () {
        return (
            <header>
                <div className='titulo'> Juego de Memoria </div>
                <div>                
                    <button className='boton-reiniciar'>
                        Reiniciar partida
                    </button>
                </div>
                <div className='titulo'>
                    Nº de intentos:
                </div>
            </header>
        )
    }
};
