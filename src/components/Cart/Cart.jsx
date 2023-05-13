import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CarritoContext } from "../../context/CarritoContext.js";
import CartItem from "../CartItem/CartItem";
import '../EstiloBotones/estiloBotones.css';
import './Cart.css';

const Cart = () => {

    useEffect(() => {
        document.title = 'Carrito';
    }, []);


    const { carrito, vaciarCarrito, totalCantidadCarrito, totalCompra } = useContext(CarritoContext);

    if (totalCantidadCarrito() === 0) {
        return (
            <div className="row mx-0 justify-content-center">
                <h3 className="fw-bold text-center mt-4">Tus productos en el carrito:</h3>
                <div className="contenedorCarrito mt-4 p-3 text-center col-10 col-md-5">
                    <h2 className="carritoVacio fs-2 fw-bold">El carrito está vacío</h2>
                    <Link to='/'><button className="botonesCarrito prodCar border-0 rounded-pill fw-semibold p-1 mt-2 fs-5">Productos</button></Link>
                </div>
            </div>
        )
    }
    return (
        <div className="row mx-0 justify-content-center">
            <div className="contenedorCarrito my-4 p-3 text-center col-10">
                <div className="">
                    {carrito.map(producto => <CartItem key={producto.item.id} {...producto} />)}
                </div>
                <h3 className="fs-1 my-3">Total: ${totalCompra()}</h3>
                <button className="botonesCarrito border-0 rounded-pill fw-semibold p-1 m-2" onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
                <Link to={"/"}>
                    <button className='botonesCarrito border-0 rounded-pill fw-semibold p-1 m-2'>Seguir Comprando</button>
                </Link>
                <Link to='/checkout'><button className="botonesCarrito border-0 rounded-pill fw-semibold p-1 m-2">Finalizar Compra</button></Link>
            </div>
        </div>
    )
}
export default Cart

