import productService from '@/service/product.service'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

const ProductList = () => {
    const { isLoading, isError, data, error } = useQuery(["products"], async () => productService.getProduct);

    console.log('data', data)
    return (
        <div>ProductList</div>
    )
}

export default ProductList