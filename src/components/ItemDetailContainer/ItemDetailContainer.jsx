import { useEffect, useState } from "react";
//import { getProductoById } from "../../asynmock";
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

    /*     useEffect( ()=> {
            const nuevoDoc = doc(db, "productos", idItem);
            getDoc(nuevoDoc)
            .then(res => {
                const data = res.data();
                const nuevoProducto = {id: res.id, ...data}
                setProducto(nuevoProducto);
            })
            .catch(error => console.error(error));
        },[idItem]) */



    return (
        <div className='row justify-content-center mx-0'>
            {/* <ItemDetail {...producto} /> */}
            {producto ? <ItemDetail {...producto} /> : <p>Cargando...</p>}
        </div>
    );
}

export default ItemDetailContainer
