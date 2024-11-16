import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";



export default function Catalog() {
    const [products, setProduts] = useState<Product[]>([]);

    useEffect(() => {
      fetch('http://localhost:5000/api/products')
      .then(Response => Response.json())
      .then(data => setProduts(data))
    },[])
    return(
        <>
        <ProductList products={products}/>
      </>
    )
}