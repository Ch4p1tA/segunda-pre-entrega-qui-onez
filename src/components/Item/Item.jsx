import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, precio, img }) => {
  return (
    <div className='cardProducto'>
      <img className='imgProducto' src={img} alt={nombre} />
      <h4> {nombre} </h4>
      <p> {precio} </p>
      <p>ID: {id} </p>
      {/* <button className='btnProducto'> Ver detalles </button> */}
      <Link to={`/item/${id}`}>Ver detalles</Link>
    </div>
  )
}

export default Item
