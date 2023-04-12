import './ItemListContainer.css';
import { getProductos } from '../../asynmock';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getProductos()
            .then(res => setProductos(res))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <h2 className='tituloIntro text-center mt-5  rounded border-2 p-2 mx-4'>{greeting}</h2>
            <h2 className='text-center tituloProductos mt-4 fs-1'>Productos</h2>
            <ItemList productos={productos} />
        </div>
    )
}

/* const ItemListContainer = (props) => {
    return (
        <h2 className='subtitulo text-center mt-4 fs-1 border border-dark rounded border-2 p-2 mx-4'>{props.greeting}</h2>
    )
} */

export default ItemListContainer
