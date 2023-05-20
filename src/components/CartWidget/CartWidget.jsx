import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "../src/assets/imagen-carrito.png"
  return (
    <div className='divCarrito'>
        <img className='imgCarrito' src={imgCarrito} alt="Carrito de compras" />
        <p className='numeroCarrito'>10</p>
    </div>
  )
}

export default CartWidget
