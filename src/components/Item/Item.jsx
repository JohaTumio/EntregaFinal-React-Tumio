import './Item.css';
import { Link } from 'react-router-dom';

/* const Item = ({ nombre, img, precio, id }) => {
    return (

        <div>
            <img src={img} alt={nombre} />
            <h3>Nombre: {nombre}</h3>
            <p>Precio: ${precio}</p>
            <p>Id: {id}</p>
            <p>Categoria: {categoria}</p>
            <p>Stock: {stock}</p>
            <button className='btnProducto'> Ver Detalles</button>
        </div>
    )
} */

const Item = ({ nombre, img, precio, id }) => {
    return (
        <div className="card align-items-center text-center p-2 m-4 cardProductos col-12 col-md-6 col-lg-4 " style={{ width: '18rem' }}>
            <img src={img} className="card-img-top imgProductos" alt={nombre} />
            <div className="card-body">
                <h4 className="card-title mb-3">Producto: {nombre}</h4>
                <h5 className="card-subtitle mb-3 text-body-secondary">Precio: ${precio}</h5>
                {/* <button className='btnProducto'>VER DETALLES</button> */}
                <Link to={`/item/${id}`}>
                    <button className='btnProducto'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span> VER DETALLES
                    </button>
                </Link>

            </div>
        </div>
    )
}


export default Item
