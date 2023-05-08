import { useState } from 'react';
import { db } from "../../services/firebase/config";
import { collection, addDoc } from 'firebase/firestore';

const Formulario = () => {
    const [usuario, setUsuario] = useState({});

    const handleInputChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        addDoc(collection(db, "usuarios"), {
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            telefono: usuario.telefono,
            correo: usuario.correo,
        })
            .then(() => {
                setUsuario({});
            })
            .catch((error) => {
                console.error("Error al agregar los datos a Firestore", error);
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" onChange={handleInputChange} value={usuario.nombre || ''} required autoComplete="off" pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+" title="No se permiten caracteres especiales" />
            </div>
            <div>
                <label htmlFor="apellido">Apellido:</label>
                <input type="text" id="apellido" name="apellido" onChange={handleInputChange} value={usuario.apellido || ''} required autoComplete="off" pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+" title="No se permiten caracteres especiales" />
            </div>
            <div>
                <label htmlFor="telefono">Teléfono:</label>
                <input type="number" id="telefono" name="telefono" onChange={handleInputChange} value={usuario.telefono || ''} required autoComplete="off" />
            </div>
            <div>
                <label htmlFor="correo">Correo electrónico:</label>
                <input type="email" id="correo" name="correo" onChange={handleInputChange} value={usuario.correo || ''} required autoComplete="off"/>
            </div>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Formulario

