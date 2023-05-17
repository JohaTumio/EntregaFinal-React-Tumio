import React, { useState, useContext, useEffect } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/firebase/config";
import { collection, addDoc } from "firebase/firestore";
import './Checkout.css'
import '../EstiloBotones/estiloBotones.css';
import { alertaSweet } from "../ToastifySweetAlert/ToastifySweetAlert";

const Checkout = () => {
    const { carrito, vaciarCarrito, totalCompra, actualizarStock } = useContext(CarritoContext);

    const [usuario, setUsuario] = useState({});
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");
    const [emailCoincide, setEmailCoincide] = useState(null);

    useEffect(() => {
        if (ordenId) {
            alertaSweet("¡Gracias por tu compra!", "success", ordenId);
        }
    }, [ordenId]);

    const finalizarCompra = () => {
        carrito.forEach((producto) => {
            actualizarStock(producto.item.id, producto.cantidad);
        });
    };

    function calcularTotalProducto(producto) {
        return producto.cantidad * producto.item.precio;
    }

    const handleInputChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        if (usuario.email && usuario.emailConfirmacion) {
            setEmailCoincide(usuario.email === usuario.emailConfirmacion);
        } else {
            setEmailCoincide(false);
        }
    }, [usuario.email, usuario.emailConfirmacion]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!emailCoincide) {
            setError("Los campos del mail no coinciden");
            return;
        } else {
            setError("");
        }
        finalizarCompra();

        const orden = {
            items: carrito.map((producto) => {
                const totalProducto = calcularTotalProducto(producto);
                return {
                    id: producto.item.id,
                    nombre: producto.item.nombre,
                    cantidad: producto.cantidad,
                    precio: producto.item.precio,
                    totalProducto: totalProducto
                };
            }),
            total: totalCompra(),
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            telefono: usuario.telefono,
            email: usuario.email
        };

        addDoc(collection(db, "ordenes"), orden)
            .then((docRef) => {
                setOrdenId(docRef.id);
                vaciarCarrito();
                setUsuario({});
            })
            .catch((error) => {
                console.error("Error al crear la orden", error);
                setError("Se produjo un error al crear la orden, por favor vuelva a intentarlo");
            })
    }

    return (
        <div>
            <h2 className="text-center">Checkout</h2>
            <form onSubmit={handleSubmit}>
                <div className="row mx-0 justify-content-center">
                    <div className="contenedorCheckout text-center p-3 col-10">
                        {carrito.map((producto) => (
                            <div key={producto.item.id} className="row mx-0 justify-content-center">
                                <p className="fs-5 m-0 col-md-4">
                                    {producto.item.nombre} x {producto.cantidad}
                                </p>
                                <p className="fs-5 m-0 col-md-4">Precio $: {producto.item.precio}</p>
                                <p className="fs-5 m-0 col-md-4">Total: $ {calcularTotalProducto(producto)}</p>
                                <hr />
                            </div>
                        ))}
                        <div>
                            <p className="m-0 fs-3">Total de la compra: ${totalCompra()}</p>
                        </div>
                    </div>
                </div>
                <div className="container contenedorFormulario mt-3">
                    <h2 className="text-center my-5">Completa el siguiente formulario para terminar con tu compra:</h2>
                    <div className="m-2 container-fluid">
                        <div className="row mb-2 align-items-center justify-content-center">
                            <label className="col-4 col-form-label text-center" htmlFor="nombre"><i className="fa-solid fa-user"></i> Nombre:</label>
                            <div className="col-8 col-md-6">
                                <input className="form-control" placeholder="Ingresa tu nombre" type="text" id="nombre" name="nombre" onChange={handleInputChange} value={usuario.nombre || ''} required autoComplete="off" pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+" title="No se permiten caracteres especiales" />
                            </div>
                        </div>
                        <div className="row mb-2 align-items-center justify-content-center">
                            <label className="col-4 col-form-label text-center" htmlFor="apellido"><i className="fa-solid fa-user"></i> Apellido:</label>
                            <div className="col-8 col-md-6">
                                <input className="form-control" placeholder="Ingresa tu apellido" type="text" id="apellido" name="apellido" onChange={handleInputChange} value={usuario.apellido || ''} required autoComplete="off" pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+" title="No se permiten caracteres especiales" />
                            </div>
                        </div>
                        <div className="row mb-2 align-items-center justify-content-center">
                            <label className="col-4 col-form-label text-center" htmlFor="telefono"><i className="fa-solid fa-phone"></i> Teléfono:</label>
                            <div className="col-8 col-md-6">
                                <input className="form-control" placeholder="Ingresa tu teléfono" type="number" id="telefono" name="telefono" onChange={handleInputChange} value={usuario.telefono || ''} required autoComplete="off" />
                            </div>
                        </div>
                        <div className="row mb-2 align-items-center justify-content-center">
                            <label className="col-4 col-form-label text-center" htmlFor="email"><i className="fa-regular fa-envelope"></i> Email:</label>
                            <div className="col-8 col-md-6">
                                <input className="form-control" placeholder="Ingresa tu email" type="email" id="email" name="email" onChange={handleInputChange} value={usuario.email || ''} required autoComplete="off" />
                            </div>
                        </div>
                        <div className="row mb-2 align-items-center justify-content-center">
                            <label className="col-4 col-form-label text-center" htmlFor="emailConfirmacion"><i className="fa-solid fa-check"></i> Confirmar email:</label>
                            <div className="col-8 col-md-6">
                                <input className="form-control" placeholder="Reingresa tu email" type="email" id="emailConfirmacion" name="emailConfirmacion" onChange={handleInputChange} value={usuario.emailConfirmacion || ''} required autoComplete="off" />
                            </div>
                            <div className="col-8 text-center mt-3">
                                {usuario.email && usuario.emailConfirmacion ? (
                                    usuario.email === usuario.emailConfirmacion ? (
                                        <p style={{ color: "green" }}>✔Los correos electrónicos coinciden</p>
                                    ) : (
                                        <p style={{ color: "red" }}>❌Los correos electrónicos no coinciden</p>
                                    )
                                ) : null}
                            </div>
                        </div>
                        <div className="text-center">
                            {error && <p> {error} </p>}
                            <button type="submit" className="botonesCarrito border-0 rounded-pill fw-semibold p-1 m-2">Finalizar Compra</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Checkout
