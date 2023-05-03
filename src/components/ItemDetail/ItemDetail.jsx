import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext.js';

const ItemDetail = ({ nombre, img, precio, stock, descripcion, id }) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const { agregarProd } = useContext(CarritoContext);

/*     const descripcionConSaltosDeLinea = descripcion ? descripcion.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1<br>$2') : ''; */

    const descripcionConSaltosDeLinea = descripcion ? descripcion.replace(/(\r\n|\n|\r)/g, '<br>') : '';



    const handlerCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        /*         console.log(`Productos agregados: ${cantidad}`) */
        const item = { id, nombre, precio };
        agregarProd(item, cantidad);
    }

    return (
        <article className="card align-items-center text-center p-2 m-4 cardProductos col-12 col-md-6 col-lg-4 cardProductos">
            <img src={img} alt={nombre} className='card-img-top imgDetalleProd' />
            <div className="card-body">
                <h2 className="card-title mb-3"><span className='tituloProductos'>Producto:</span> {nombre}</h2>
                <h3 className="card-text mb-3"><span className='tituloProductos'>Precio:</span> ${precio}</h3>
                <h3 className='text-body-secondary'><span className='tituloProductos'>Stock:</span> {stock} unidades</h3>
                {/*                 <p className="card-text fs-4" style={{ whiteSpace: "pre-line" }}>{descripcion}</p> */}
                <div className="card-text fs-4" dangerouslySetInnerHTML={{ __html: descripcionConSaltosDeLinea }}></div>
                {
                    agregarCantidad > 0 ? (<Link to={"/carrito"}><button className='btnProducto mt-2'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span> Terminar Compra
                    </button></Link>) : (<ItemCount stock={stock} onAdd={handlerCantidad} />)
                }
            </div>
        </article>
    )
}

export default ItemDetail 
