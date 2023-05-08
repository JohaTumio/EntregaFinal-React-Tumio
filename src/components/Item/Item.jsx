import './Item.css';
import '../EstiloBotones/estiloBotones.css';
import { Link } from 'react-router-dom';

const Item = ({ nombre, img, precio, id }) => {
    return (
        <div className="card align-items-center text-center p-2 m-4 cardProductos col-12 col-md-6 col-lg-4 " style={{ width: '18rem' }}>
            <img src={img} className="card-img-top imgProductos" alt={nombre} />
            <div className="card-body">
                <h4 className="card-title mb-3"><span className='tituloProductos'>Producto:</span><br /> {nombre}</h4>
                <h5 className="card-subtitle mb-3 text-body-secondary"><span className='tituloProductos'>Precio:</span>  ${precio}</h5>
                <Link to={`/item/${id}`}>
                    <button className='btnDetalles'>
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
