const express=require('express')
const fs=require('fs')
const fileName='../Desafio_2/products.json'
const format = "utf-8"
const products=fs.readFileSync(fileName,format)
const parsProducts=JSON.parse(products)
const app= express()

app.get('/products', (req, res) => {
    const limit = req.query.limit
    
    if(limit){
        res.send(parsProducts.slice(0,limit))
    }else{
        res.send(parsProducts)
    }
})
app.get('/products/:pid', (req, res) => {
    const pid = req.params.pid
    const product=parsProducts.find(u=>u.id==pid)
    if(!product){
        res.send(`<h1 style='color:red',''>Error: PRODUCTO NO ENCONTRADO!</h1>`)
    }else{
        res.send(product)
    }
})

app.listen(8080)
