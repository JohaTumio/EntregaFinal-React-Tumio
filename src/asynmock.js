const productos = [
    {id:"1", 
    nombre:"Notebook Lenovo I5", 
    precio: 15, 
    idCategoria:"Notebook", 
    img:"../img/notebook.webp", 
    stock: 5,
    descripcion: `MEMORIA
    Memoria RAM: 8 GB
    Tipo de memoria RAM: DDR3
    Capacidad máxima soportada de la memoria RAM: 16 GB
    
    CARACTERISTICAS GENERALES
    Marca: Lenovo
    Línea: ThinkPad
    Modelo: T440P
    
    ALMACENAMIENTO
    Capacidad del SSD: 480 GB
    
    PANTALLA
    Frecuencia de actualización de la pantalla: 60 Hz
    Resolución de la pantalla: 1366 px x 768 px
    Con pantalla táctil: No
    Tamaño de la pantalla: 14"
    Tipo de pantalla: LED
    Con pantalla antirreflejo: Sí
    
    PROCESADOR
    Tarjeta gráfica: Intel HD Graphics 4600
    Marca del procesador: Intel
    Línea del procesador: Core i5
    
    SISTEMA OPERATIVO
    Nombre del sistema operativo: Windows
    Versión del sistema operativo: 10
    Edición del sistema operativo: Home
    
    PESO Y DIMENSIONES
    Peso: 2.2 kg
    Ancho: 335 mm
    Profundidad: 229 mm
    Altura: 30 mm
    
    CONECTIVIDAD
    Puertos de video: VGA,Mini DisplayPort
    Puertos USB: 2.0,3.0
    Cantidad de ranuras para la memoria RAM: 2
    Cantidad total de puertos USB: 4
    Con Wi-Fi: Sí
    Con Bluetooth: No
    Con salida para auriculares: Sí
    Con puerto ethernet: Sí
    Con lector de tarjeta de memoria: Sí
    
    CAMARA
    Resolución de la imagen fija de la cámara web: 1 Mpx
    Con cámara web: Sí`}, 

    {id:"2",
    nombre:"Tablet Lenovo K10", 
    precio:50000, 
    idCategoria:"Tablets", 
    img:"../img/tablet.webp", 
    stock: 8,
    descripcion: `Marca: Lenovo
    Modelo: ZA8N0050AR
    Capacidad de la batería Integrado: 7500mAh (Min.) / 7700mAh (Typ.)
    Color: Azul
    Peso: 460 Gr
    Memoria RAM: 3 GB
    Máxima capacidad de memoria soportada: 128 GB
    Máxima resolución de pantalla: 1920px x 1200px
    Procesador gráfico: GPU IMG PowerVR GE8320 integrada
    Resolución de la cámara delantera: 5 Mpx
    Cantidad de Núcleos: 8
    Sistema Operativo: Android
    Velocidad del procesador: 1.8 GHz
    Versión del sistema operativo: Android 11
    Tamaño de Pantalla: 10.3 "`},

    {id:"3", 
    nombre: "Celular Samsung A23", 
    precio:80000, 
    idCategoria: "Celulares", 
    img:"../img/celular.png", 
    stock: 10,
    descripcion: `Marca: Samsung
    Modelo: SM-A235M
    Pantalla: 6.6
    Tamaño de producto: 165,4 x 76,9 x 8,4 mm
    Peso de producto: 195 gr
    Memoria interna: 128GB 
    Procesador: Qualcomm SM6225 8 núcleos 2,4 Ghz
    Cámara: 50 MP + 5 MP + 2 MP + 2 MP
    Compatible: 4G
    Bluetooth: 5
    Hotspot WIFI: Si
    NFC: Si
    WIFI: Versión WLAN 802.11ac 5GHz
    Cámara: 50 MP + 5 MP + 2 MP + 2 MP
    Cámara frontal: 8 MP
    Flash: LED
    Grabación de video: 2160p
    Zoom de cámara: 10x`},

    {id:"4", 
    nombre:"Computadora Intel I3", 
    precio: 135000, 
    idCategoria:"PcEscritorio", 
    img:"../img/pcEscritorio.webp", 
    stock: 3,
    descripcion:`Computadora armada Core I3 4gb Ram Hd 1TB con teclado y mouse + monitor led de 19"
    Procesador: Intel Core i3
    Memoria: 4Gb
    Disco rigido 1Tb (1000Gb) o solido ssd 250gb segun stock o eleccion del comprador
    Gabinete con fuente de 500 W con teclado y mouse
    Gráficos: Onboard
    Salida de video
    Sonido: 5.1 Ch
    Red Onboared Ethernet 10/100/1000 Gigabit
    Incluye Monitor led 19" (18.5) Primera marca`},

    {id:"5", 
    nombre:"Monitor Lenovo", 
    precio: 77000, 
    idCategoria:"Monitores", 
    img:"../img/monitor.webp", 
    stock: 9,
    descripcion: `Marca: Lenovo
    Con pantalla táctil: No
    Es 3D: No
    Es curvo: No
    Frecuencia de refresco: 75 Hz
    Resolución de pantalla: 1920 x 1080
    Tamaño de Monitor: 21.5"
    Tamaño de Pantalla: 21.5"
    Tecnología de la pantalla: AMD FreeSync
    Conexión del monitor: 1x HDMI 1.4, 1x VGA
    Color: Negro
    Voltaje: 100 - 240 V
    Tipo de resolucion: Full HD`},

    {id:"6", 
    nombre:"Monitor Daewoo", 
    precio: 35000, 
    idCategoria:"Monitores", 
    img:"../img/monitor2.webp", 
    stock: 7,
    descripcion: `Marca: Daewoo
    Modelo: DW-MON19
    Color: Negro
    Voltaje: 100V/240V
    Tamaño de la pantalla: 19"
    Resolución de la pantalla: 1366 px x 768 px
    Frecuencia de actualización recomendada: 60 Hz
    Tipo de resolución: HD
    Tipo de pantalla: LED
    Contraste: 1000:1
    Cantidad de colores de la pantalla: 16.7 millones
    Brillo: 250 cd/m²
    Conexiones del monitor de la computadora: VGA, HDMI
    Cables incluidos: Cable de alimentación`}
]

export const getProductos = () => {
    return new Promise((res) => {
        setTimeout( () => {
            res(productos);
        },1000)
    })
}

export const getProductoById = (id) => {
    return new Promise((res) =>{
        setTimeout( () => {
            const producto = productos.find(prod => prod.id === id);
            res(producto);
        },1000)
    })
}

export const getProductosCategoria = (idCat) => {
    return new Promise ((res) =>{
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCategoria === idCat);
            res(productosCategoria);
        },1000);
    })
}

