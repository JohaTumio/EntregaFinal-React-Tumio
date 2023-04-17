import { useEffect, useState } from "react";
import { getProductoById } from "../../asynmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    const {idItem} = useParams();
    
    useEffect(() => {
        getProductoById(idItem)
            .then(res => setProducto(res))
            .catch(error => console.error(error))
    }, [idItem]);

    return (
        <div className='row justify-content-center mx-0'>
            <ItemDetail {...producto}/>
        </div>
    );
}

export default ItemDetailContainer
