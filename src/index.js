const ProductManager=require('./product_manager')
const manager=new ProductManager('products.json');
(async () => {
    console.log("---------------------------------\nInstancia recién creada:");
    console.log(await manager.getProducts());
    console.log("---------------------------------\nProductos cargados:");
    await manager.addProducts({
        title:'remera',
        description:'rosa',
        price:150,
        thumbnail:'sin imagen',
        code:'abc123',
        stock:23
    })
    await manager.addProducts({
        title:'short',
        description:'negro',
        price:543,
        thumbnail:'sin imagen',
        code:'abc545',
        stock:1
    })
    await manager.addProducts({
        title:'gorra',
        description:'azul',
        price:234,
        thumbnail:'sin imagen',
        code:'tjr534',
        stock:12
    })
    await manager.addProducts({
        title:'corvata',
        description:'azul',
        price:323,
        thumbnail:'sin imagen',
        code:'tjr643',
        stock:41
    })
    await manager.addProducts({
        title:'vestiso',
        description:'rojo',
        price:532,
        thumbnail:'sin imagen',
        code:'jhu231',
        stock:65
    })
    await manager.addProducts({
        title:'pantalon',
        description:'azul marino',
        price:612,
        thumbnail:'sin imagen',
        code:'dse231',
        stock:45
    })
    await manager.addProducts({
        title:'camisa',
        description:'blanca',
        price:321,
        thumbnail:'sin imagen',
        code:'ftg563',
        stock:2
    })
    await manager.addProducts({
        title:'fumanda',
        description:'azul marino',
        price:612,
        thumbnail:'sin imagen',
        code:'dse231',
        stock:45
    })
    await manager.addProducts({
        title:'guante',
        description:'amarillo',
        price:112,
        thumbnail:'sin imagen',
        code:'erd421',
        stock:44
    })
    await manager.addProducts({
        title:'sombrero',
        description:'morado',
        price:312,
        thumbnail:'sin imagen',
        code:'yhg563',
        stock:25
    })
    await manager.addProducts({
        title:'calcetines',
        description:'verde',
        price:89,
        thumbnail:'sin imagen',
        code:'gtr622',
        stock:8
    })
    console.log(await manager.getProducts());
    console.log("---------------------------------\nPRODUCTO SELECCIONADO:");
    console.log(await manager.getProductById(3));
    await manager.getProductById(60);
    console.log("---------------------------------\nProducto modificado:");
    await manager.updateProduct(2,{
        title:'campera',
        description:'negro',
        price:600,
        thumbnail:'sin imagen',
        code:'abc43',
        stock:60
    })
    console.log(await manager.getProducts());
    console.log("---------------------------------")
    await manager.deleteProduct(11);
    await manager.deleteProduct(50);
})()
