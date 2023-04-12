import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ nombre, id, categoria, img, precio, stock }) => {
    return (
        <article>
            <header>
                <h2>Nombre: {nombre}</h2>
            </header>
            <div>
                <img src={img} alt={nombre} className='imgDetalleProd' />
            </div>
            <section>
                <h3>Precio: ${precio}</h3>
                <p>Stock: {stock}</p>
                <p>Id: {id}</p>
                <p>Categoria: {categoria}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nostrum perspiciatis beatae hic, omnis accusantium minima neque autem aliquam corporis assumenda esse nulla id vitae eaque atque totam libero magni!</p>
            </section>
            <footer>
                <ItemCount stock={10} inicial={1} onAdd={(contador) => console.log("cantidad agregada", contador)} />
            </footer>
        </article>
    )
}

export default ItemDetail
