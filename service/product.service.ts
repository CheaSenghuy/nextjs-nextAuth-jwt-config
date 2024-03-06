import { http } from "@/utils/http";

const ServiceId = {
    PRODUCT: '/api/v1/product',

}

const getProduct = async(data :any ) =>{
    return await http.get(ServiceId.PRODUCT, data)
}

const getProductById = async(id : number) =>{
    return await http.get(`${ServiceId.PRODUCT}/${id}`)
}

const createProduct = async(data : any)=>{
    return await http.post(ServiceId.PRODUCT, data)
}


export const productService = {
    getProduct,
    createProduct,
    getProductById
}

export default productService;