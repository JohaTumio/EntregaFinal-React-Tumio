import { useState, createContext } from "react";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase/config";

export const CarritoContext = createContext({ carrito: [] });

export const CarProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    console.log(carrito);

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

    const actualizarStock = (id, cantidad) => {
        const productoRef = doc(db, "productos", id);

        getDoc(productoRef)
            .then((productoSnap) => {
                const productoData = productoSnap.data();

                if (productoData.stock < cantidad) {
                    console.error("No hay suficiente stock para completar la compra");
                    return;
                }

                return updateDoc(productoRef, {
                    stock: productoData.stock - cantidad,
                });
            })
            .then(() => {
                console.log("El stock se actualizó correctamente");
                vaciarCarrito();
            })
            .catch((error) => {
                console.log(error);
            });
    };




    return (
        <CarritoContext.Provider value={{ carrito, agregarProd, eliminarProd, vaciarCarrito, totalCantidadCarrito, disminuirCantidadProd, actualizarStock }}>
            {children}
        </CarritoContext.Provider>
    )
}