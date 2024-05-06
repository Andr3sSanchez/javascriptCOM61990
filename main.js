const listaDeCompras = []

function agregarDatosProductos(producto,valor,cantidad){
    const productos = {
        producto:producto,
        valor:valor,
        cantidad:cantidad
    }
    listaDeCompras.push(productos)
}

function verDatosProductos(){
    for (const productos of listaDeCompras) {
        alert("Producto: " + productos.producto + " Valor: " + productos.valor + " Cantidad: " + productos.cantidad)
    }
}

function verDatosProducto(producto){
    for (const productos of listaDeCompras) {
        if(productos.producto == producto){
            alert("Producto: " + productos.producto + " Valor: " + productos.valor + " Cantidad: " + productos.cantidad)
        }
    }
}

function compra(){
    let continuar = confirm("¿Desea realizar alguna accion?")
    while(continuar){
        const accion = prompt("Escriba alguna de estas acciones (crear, ver lista, ver producto)")
        if(accion == "crear"){
            const productoIngresado = prompt("Ingrese Producto")
            const valorIngresado = prompt("Ingrese el valor del producto")
            const cantidadIngresado = prompt("Ingrese cantidades del producto")
            agregarDatosProductos(productoIngresado,valorIngresado,cantidadIngresado)
            verDatosProductos(productoIngresado)
        }else if(accion =="ver lista"){
            verDatosProductos()
        }else if(accion == "ver producto"){
            const productoIngresado = prompt("Ingrese Producto")
            verDatosProducto(productoIngresado)
        }else{
            alert("accion no valida")
        }
        continuar = confirm("¿Quiere realizar otra accion?")
    }

}
compra()