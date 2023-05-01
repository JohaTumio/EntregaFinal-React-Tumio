import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import CartItem from "../CartItem/CartItem";

/* let totalCantidad = 0; */

const Cart = () => {
    const {carrito, vaciarCarrito} = useContext(CarritoContext);

    const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0);

    const total = carrito.reduce((total, producto) => total + (producto.item.precio * producto.cantidad), 0);


    if(totalCantidad === 0) {
        return (
            <>
                <h2>El carrito está vacío</h2>
                <Link to='/'> Productos </Link>
            </>
        )
    }
    return (
        <div>
            {carrito.map(producto => <CartItem key={producto.id} {...producto}/> )}
            <h3>Total: ${total}</h3>
            <button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
            <Link to='/checkout'>Finalizar Compra</Link>
        </div>
    )
}
/* export { totalCantidad } */
export default Cart
