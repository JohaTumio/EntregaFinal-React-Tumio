import { CarritoContext } from '../../context/CarritoContext';
import './CartWidget.css';
import { useContext } from 'react'; 
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const {carrito} = useContext(CarritoContext);
    const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0);
    return (
        <Link to='/cart'>
        <button className="boton_carrito fs-4 fw-bolder"><i className="fas fa-shopping-cart" /><span>{totalCantidad}</span></button>
        </Link>
    )
}

export default CartWidget


// eslint-disable-next-line no-lone-blocks
{/* <button className="boton_carrito fs-4 fw-bolder"><i className="fas fa-shopping-cart" /><span>6</span></button> */}