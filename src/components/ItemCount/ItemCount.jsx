import { useState } from 'react';
import './ItemCount.css'

const ItemCount = ({ stock, inicial, onAdd }) => {
    const [contador, setContador] = useState(inicial);

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    };

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    };

    /*     const agregarAlCarrito = () => {
            console.log(`Cantidad agregada: ${contador} unidades`)
        } */

    return (
        <div>
            <div className='contador d-flex align-items-center justify-content-between rounded-pill ms-2 mb-1'>
                <button className='btnDecrementar fs-4 fw-semibold border-0 rounded-pill' onClick={decrementar}>-</button>
                <strong className='cantidad text-center fs-5'>{contador}</strong>
                <button className='btnIncrementar fs-5 fw-semibold border-0 rounded-pill' onClick={incrementar}>+</button>
            </div>
            <button className='btnAgregarProd border-0 rounded-pill fw-semibold p-1' onClick={() => onAdd(contador)} disabled={!stock}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
