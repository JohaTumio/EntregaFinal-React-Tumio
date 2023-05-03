import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext.js";

const CartItem = ({item, cantidad}) => {
    const {eliminarProd} = useContext(CarritoContext);
    return (
        <div>
            <h4>{item.nombre}</h4>
            <p>Cantidad: {cantidad}</p>
            <p>Precio: ${item.precio}</p>
            <button onClick={()=> eliminarProd(item.id)}>Eliminar</button>
        </div>
    )
}

export default CartItem
