import React from 'react'
import './ItemDetail.css'


const ItemDetail = ({id, nombre, precio, img, idCat}) => {
  return (
    <div className='contenedorItem'>
      <h2>Nombre: {nombre} </h2>
      <h3>Precio: {precio} </h3>
      <h3>ID: {id} </h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, non, id maiores inventore soluta praesentium quasi quae nihil unde, enim molestiae ipsum nostrum consequuntur debitis illum corporis esse delectus ut!</p>
      <img className='imgDetail' src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail
