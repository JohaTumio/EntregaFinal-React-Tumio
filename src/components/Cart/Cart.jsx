import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CarritoContext } from "../../context/CarritoContext.js";
import CartItem from "../CartItem/CartItem";
import '../EstiloBotones/estiloBotones.css';

const Cart = () => {


    useEffect(() => {
            document.title = 'Carrito';
        }, []);
        

    const { carrito, vaciarCarrito, totalCantidadCarrito } = useContext(CarritoContext);

    const total = carrito.reduce((total, producto) => total + (producto.item.precio * producto.cantidad), 0);


    if (totalCantidadCarrito() === 0) {
        return (
            <>
                <h2>El carrito está vacío</h2>
                <Link to='/'><button className="botonesCarrito prodCar border-0 rounded-pill fw-semibold p-1">Productos</button></Link>
            </>
        )
    }
    return (
        <div>
            {carrito.map(producto => <CartItem key={producto.item.id} {...producto} />)}
            <h3>Total: ${total}</h3>
            <button className="botonesCarrito border-0 rounded-pill fw-semibold p-1 m-3" onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
            <Link to='/checkout'><button className="botonesCarrito border-0 rounded-pill fw-semibold p-1">Finalizar Compra</button></Link>
        </div>
    )
}
export default Cart

