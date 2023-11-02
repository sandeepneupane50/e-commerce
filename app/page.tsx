import React from "react"
import axios from "axios"
import ListProducts from "@/components/products/ListProducts"
import queryString from "query-string"

const getProducts = async (searchParams: any) => {

  const urlParams = {
    keyword: searchParams.keyword,
    page: searchParams.page,
    category: searchParams.category,
    "ratings": searchParams.ratings,
    "price[gte]": searchParams.min,
    "price[lte]": searchParams.max,
  } 

  const searchQuery = queryString.stringify(urlParams)

  console.log("searchQuery",searchQuery);
  

  const  { data }  = await axios.get(`${process.env.API_URL}/api/products?${searchQuery}`);
  return data;
}

export default async function Home({ searchParams }) {
  const productsData = await getProducts( searchParams)

  return (
    <ListProducts data={productsData} />
    )
}
