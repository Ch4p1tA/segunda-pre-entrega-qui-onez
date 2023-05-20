import React from 'react'
import "./Contador.css"
import { useState } from 'react'


const Contador = ({inicial, stock}) => {
    const [contador, setContador] = useState(inicial);

    const aumentarContador = () => {
        if (contador<stock){
            setContador(contador+1);
        }
    }

    const disminuirContador = () => {
        if(contador>inicial){
            setContador(contador-1);
        }
    }

    const agregarAlCarrito = () => {
        console.log(`Agregado ${contador} items `)
    }

    return (
        <div>
            <h2>Contador</h2>

            <button onClick={disminuirContador}> - </button>
            <strong> {contador} </strong>
            <button onClick={aumentarContador}> + </button>
            <button onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
    )
}

export default Contador
