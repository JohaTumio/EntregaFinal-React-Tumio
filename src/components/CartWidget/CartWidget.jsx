import { CarritoContext } from '../../context/CarritoContext.js';
import './CartWidget.css';
import { useContext } from 'react';

const CartWidget = () => {
    const { totalCantidadCarrito } = useContext(CarritoContext);
    return (
            <button className="boton_carrito fs-4 fw-bolder ms-lg-5 me-3 me-md-0">
                <i className="fas fa-shopping-cart"></i>
                <span>{totalCantidadCarrito()}</span>
            </button>
    )
}

export default CartWidget
