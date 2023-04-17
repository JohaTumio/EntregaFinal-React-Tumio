import './ItemListContainer.css';
import { getProductos, getProductosCategoria } from '../../asynmock';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    
    const {idCategoria} = useParams();
    
    useEffect(() => {
        const funcionProductos = idCategoria ? getProductosCategoria : getProductos;

        funcionProductos(idCategoria)
            .then(res => setProductos(res))
            .catch(error => console.error(error))
    }, [idCategoria])

    return (
        <div>
            <h2 className='tituloIntro text-center mt-4 rounded border-2 p-2 mx-4'>Bienvenido a nuestra tienda online de electrónica, donde encontrarás todo lo relacionado con tecnología que seguramente necesitas!</h2>
            <h2 className='text-center tituloProductos mt-4 fs-1'>Productos</h2>
            <ItemList productos={productos} />
        </div>
    );
}

export default ItemListContainer
