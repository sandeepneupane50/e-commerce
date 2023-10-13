import ProductDetails from '@/components/products/ProductDetails'
import axios from 'axios';
import React from 'react'

const getproductDetails = async (id) => {
    const { data }= await axios.get(`${process.env.API_URL}/api/products/${id}`);
    return data?.product;
}

const ProductDetailsPage = async ({params}) => {
    const product = await getproductDetails(params.id);
    // console.log(product);


  return (
    <ProductDetails product={product}/>
  )
}

export default ProductDetailsPage