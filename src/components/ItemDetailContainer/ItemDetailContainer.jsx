import { useEffect, useState } from "react";
import { getProductoById } from "../../asynmock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    useEffect(() => {
        getProductoById(1)
            .then(res => setProducto(res))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <ItemDetail {...producto}/>
        </div>
    )
}

export default ItemDetailContainer
