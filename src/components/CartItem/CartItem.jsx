import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext.js";
import '../EstiloBotones/estiloBotones.css';
import './CartItem.css'

const CartItem = ({ item, cantidad }) => {
    const { eliminarProd, disminuirCantidadProd } = useContext(CarritoContext);
    return (
        <div className="productosCarrito">
            <h4>{item.nombre}</h4>
            <p className="fs-5">Cantidad: {cantidad}</p>
            <p className="fs-5">Precio: ${item.precio}</p>
            <p className="fs-5">Total: ${item.precio * cantidad}</p>
            {
                cantidad > 1 ? (
                    <button className="btnDisCantidad border-0 rounded-pill fw-semibold p-1" onClick={() => disminuirCantidadProd(item.id)}>
                        Disminuir cantidad
                    </button>
                ) : (
                    <button className="btnElimCantidad border-0 rounded-pill fw-semibold p-1" onClick={() => eliminarProd(item.id)}>
                        Eliminar
                    </button>
                )
            }
        </div>
    )
}

export default CartItem
