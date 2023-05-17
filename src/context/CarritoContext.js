import { useState, createContext, useEffect, useCallback } from "react";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase/config";
import { notificacionToastify } from "../components/ToastifySweetAlert/ToastifySweetAlert";



export const CarritoContext = createContext({ carrito: [] });

export const CarProvider = ({ children }) => {
    const [carrito, setCarrito] = useState(() => {
        const carritoGuardado = JSON.parse(localStorage.getItem('carrito'));
        return carritoGuardado ? carritoGuardado : [];
    });

    const guardarCarritoEnLocalStorage = useCallback(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito]);

    useEffect(() => {
        guardarCarritoEnLocalStorage();
    }, [guardarCarritoEnLocalStorage]);

    useEffect(() => {
        const carritoGuardado = JSON.parse(localStorage.getItem('carrito'));
        if (carritoGuardado) {
            setCarrito(carritoGuardado);
        }
    }, []);

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
            notificacionToastify("Producto agregado al carrito", "success");
            

        } else {
            setCarrito((prevState) => [...prevState, { item, cantidad }]);
            notificacionToastify("Producto agregado al carrito", "success");

        }
        guardarCarritoEnLocalStorage();
    };

    const prodEnCarrito = (id) => {
        return carrito.some(prod => prod.item.id === id);
    }

    const eliminarProd = (id) => {
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id);
        setCarrito(carritoActualizado);
        guardarCarritoEnLocalStorage(carritoActualizado);
        notificacionToastify("Producto eliminado", "success");
    }

    const disminuirCantidadProd = (id) => {
        const carritoActualizado = carrito.map((prod) => {
            if (prod.item.id === id) {
                prod.cantidad -= 1;
            }
            return prod;
        }).filter((prod) => prod.cantidad > 0);
        setCarrito(carritoActualizado);
        guardarCarritoEnLocalStorage(carritoActualizado);
        notificacionToastify("Cantidad disminuida", "success");
    };

    const vaciarCarrito = () => {
        setCarrito([]);
        localStorage.removeItem('carrito');
        notificacionToastify("Carrito vacío", "success");
    }

    const totalCantidadCarrito = () => {
        return carrito.reduce((total, producto) => total + producto.cantidad, 0);
    }

    const totalCompra = () => {
        return carrito.reduce((total, producto) => total + (producto.item.precio * producto.cantidad), 0);
    }

    const actualizarStock = (id, cantidad) => {
        const productoRef = doc(db, "productos", id);
        getDoc(productoRef)
            .then((productoSnap) => {
                const productoData = productoSnap.data();

                if (productoData.stock < cantidad) {
                    console.error("No hay suficiente stock para completar la compra");
                    notificacionToastify("No hay suficiente stock", "error");
                    return;
                }

                return updateDoc(productoRef, {
                    stock: productoData.stock - cantidad,
                });
            })
            .then(() => {
                console.log("El stock se actualizó correctamente");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <CarritoContext.Provider value={{ carrito, agregarProd, eliminarProd, vaciarCarrito, totalCantidadCarrito, disminuirCantidadProd, actualizarStock, totalCompra }}>
            {children}
        </CarritoContext.Provider>
    )
}