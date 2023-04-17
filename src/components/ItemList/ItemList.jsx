import Item from '../Item/Item';

const ItemList = ({productos}) => {
    return (
        <div className='row justify-content-center mx-0'>
            {productos.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemList
