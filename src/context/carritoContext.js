import { useState, createContext } from "react";

export const CarritoContext = createContext({ carrito: [] });

export const CarProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    console.log(carrito);

    const agregarProd = (item, cantidad) => {
        if (!prodEnCarrito(item.id)) {
            setCarrito(prevState => [...prevState, { item, cantidad }]);
        } else {
            console.log("Producto ya agregado");
        }
    }

    const prodEnCarrito = (id) => {
        return carrito.some(prod => prod.id === id);
    }

    const eliminarProd = (id) => {
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id);
        setCarrito(carritoActualizado);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    const totalCantidadCarrito = () => {
        return carrito.reduce((total, producto) => total + producto.cantidad, 0);
    }

    return (
        <CarritoContext.Provider value={{ carrito, agregarProd, eliminarProd, vaciarCarrito, totalCantidadCarrito }}>
            {children}
        </CarritoContext.Provider>
    )
}