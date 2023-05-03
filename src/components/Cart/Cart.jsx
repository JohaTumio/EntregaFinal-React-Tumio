import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import CartItem from "../CartItem/CartItem";

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
                <Link to='/'> Productos </Link>
            </>
        )
    }
    return (
        <div>
            {carrito.map(producto => <CartItem key={producto.item.id} {...producto} />)}
            <h3>Total: ${total}</h3>
            <button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
            <Link to='/checkout'>Finalizar Compra</Link>
        </div>
    )
}
export default Cart
