import { useState, createContext } from "react";

export const CarritoContext = createContext({ carrito: [] });

export const CarProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    console.log(carrito);

    /*     const agregarProd = (item, cantidad) => {
            if (!prodEnCarrito(item.id)) {
                setCarrito(prevState => [...prevState, { item, cantidad }]);
            } else {
                console.log("Producto ya agregado");
            }
        } */

    const agregarProd = (item, cantidad) => {
        if (prodEnCarrito(item.id)) {
            const carritoActualizado = carrito.map((prod) => {
                if (prod.item.id === item.id) {
                    prod.cantidad += cantidad;
                }
                return prod;
            });
            setCarrito(carritoActualizado);
        } else {
            setCarrito((prevState) => [...prevState, { item, cantidad }]);
        }
    };


    const prodEnCarrito = (id) => {
        return carrito.some(prod => prod.item.id === id);
    }

    const eliminarProd = (id) => {
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id);
        setCarrito(carritoActualizado);
    }

    const disminuirCantidadProd = (id) => {
        const carritoActualizado = carrito.map((prod) => {
            if (prod.item.id === id) {
                prod.cantidad -= 1;
            }
            return prod;
        }).filter((prod) => prod.cantidad > 0);
        setCarrito(carritoActualizado);
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    const totalCantidadCarrito = () => {
        return carrito.reduce((total, producto) => total + producto.cantidad, 0);
    }

    return (
        <CarritoContext.Provider value={{ carrito, agregarProd, eliminarProd, vaciarCarrito, totalCantidadCarrito, disminuirCantidadProd }}>
            {children}
        </CarritoContext.Provider>
    )
}