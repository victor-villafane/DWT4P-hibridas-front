import { call } from "./api.service"

export async function getProductos(){
    return call({
        uri: "productos",
        method: "GET"
    })
}

export async function getProductoById(id){
    return call({
        uri: `productos/${id}`,
        method: "GET"
    })
}