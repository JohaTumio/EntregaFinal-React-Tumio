import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext.js";
import '../EstiloBotones/estiloBotones.css';

const CartItem = ({ item, cantidad }) => {
    const { eliminarProd, disminuirCantidadProd } = useContext(CarritoContext);
    return (
        <div>
            <h4>{item.nombre}</h4>
            <p className="hola">Cantidad: {cantidad}</p>
            <p>Precio: ${item.precio}</p>
            {/*             <button onClick={()=> eliminarProd(item.id)}>Eliminar</button>
            <button onClick={() => disminuirCantidadProd(item.id)}>Disminuir cantidad</button> */}
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
