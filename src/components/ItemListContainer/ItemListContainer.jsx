import React from 'react'
import { useState, useEffect } from 'react'
import "./ItemListContainer.css"
import Contador from '../Contador/Contador'
import { getProductos, getProductosPorCategoria } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() => {
    const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

    funcionProductos(idCategoria)
      .then(res => setProductos(res))
      .catch(error=> console.error(error))

  }, [idCategoria]);

  return (
    <div>
      <h2 className='tituloProductos'>Productos</h2>
      <ItemList productos={productos} />
      {/* <Contador inicial={1} stock={10} /> */}
    </div>
  )
}

export default ItemListContainer
