import { CarritoContext } from '../../context/CarritoContext.js';
import './CartWidget.css';
import { useContext } from 'react'; 
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const {totalCantidadCarrito} = useContext(CarritoContext);
    return (
        <Link to='/carrito'>
        <button className="boton_carrito fs-4 fw-bolder"><i className="fas fa-shopping-cart" /><span>{totalCantidadCarrito()}</span></button>
        </Link>
    )
}

export default CartWidget
