const fs=require('fs')
class ProductManager{
    constructor(path){
        this.path=path
    }
    read=()=>{
        if(fs.existsSync(this.path)){
            return fs.promises.readFile(this.path,'utf-8').then(r=>JSON.parse(r))
        }
        return[]
    }
    getNextID=list=>{
        const count=list.length
        return (count>0)?list[count-1].id+1:1
    }
    write=list=>{
        return fs.promises.writeFile(this.path,JSON.stringify(list))
    }
    getProducts=async()=>{
        const data=await this.read()
        return data
    }
    addProducts=async(obj)=>{
        const list=await this.read()
        const nextID=this.getNextID(list)
        obj.id=nextID
        list.push(obj)
        await this.write(list)
        return obj
    }
    updateProduct=async(id,obj)=>{
        obj.id=id
        const list=await this.read()
        for (let i = 0; i < list.length; i++) {
            if(list[i].id==id){
                list[i]=obj
                break
            }
        }
        await this.write(list)
    }
    getProductById=async(eventID)=>{
        const list=await this.read()
        const event=list.find(product=>product.id==eventID)
        return event || console.log(`EROR: no se encuentra el id '${eventID}'selecionado`)
    }
    deleteProduct = async (id) => {
        const list=await this.read()
        const buscaElimina = list.find(product => product.id === id)
        if(buscaElimina){
            const index = list.indexOf(buscaElimina)
            list.splice(index, 1);
            await this.write(list)
            console.log(`\n\nPRODUCTO ELIMINADO: ID "${id}"EXITOSAMENTE.`);
        } else {
            console.log(`\n\nERROR AL ELIMINAR PRODUCTO: EL PRODUCTO CON EL ID "${id}" NO SE ENCUENTRA EN LA LISTA`);
        }
    }
}
module.exports = ProductManager