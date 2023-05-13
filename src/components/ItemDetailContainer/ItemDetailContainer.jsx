import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase/config";
import { getDoc, doc } from "firebase/firestore";


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const { idItem } = useParams();

    useEffect(() => {
        const productoRef = doc(db, "productos", idItem);
        getDoc(productoRef)
            .then((doc) => {
                if (doc.exists()) {
                    setProducto({ id: doc.id, ...doc.data() });
                } else {
                    console.log("No existe el producto con ID: ", idItem);
                }
            })
            .catch((error) => {
                console.error("Error al obtener el producto:", error);
            });
    }, [idItem]);

    return (
        <div className='row justify-content-center mx-0'>
            {producto ? <ItemDetail {...producto} /> : <p>Cargando...</p>}
        </div>
    );
}

export default ItemDetailContainer
