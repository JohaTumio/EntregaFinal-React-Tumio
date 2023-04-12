const productos = [
    {id:1, nombre:"Notebook Lenovo I5", precio: 150000, categoria:"notebooks", img:"./img/notebook.webp", stock: 10}, 
    {id:2, nombre:"Tablet Lenovo K10", precio:50000, categoria:"tablets", img:"./img/tablet.webp", stock: 5},
    {id:3, nombre: "Celular Samsung A23", precio:80000, categoria: "celulares", img:"./img/celular.png", stock: 23},
    {id:4, nombre:"Computadora Intel I3", precio: 135000, categoria:"pc escritorio", img:"./img/pcEscritorio.webp", stock: 15},
    {id:5, nombre:"Monitor Lenovo", precio: 77000, categoria:"monitores", img:"./img/monitor.webp", stock: 18},
    {id:6, nombre:"Monitor Daewoo", precio: 35000, categoria:"monitores", img:"./img/monitor2.webp", stock: 16}
]

export const getProductos = () => {
    return new Promise((res) => {
        setTimeout( () => {
            res(productos);
        },2000)
    })
}

export const getProductoById = (idProducto) => {
    return new Promise((res) =>{
        setTimeout( () => {
            const producto = productos.find(prod => prod.id === idProducto);
            res(producto);
        },2000)
    })
}