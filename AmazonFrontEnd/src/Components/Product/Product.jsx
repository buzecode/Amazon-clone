import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import styles from "./Product.module.css"
import Loader from "../Loader/Loader"
function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        // console.log(res.data.data);
        setProducts(res.data);
        setIsLoading(false); 
      })
      .catch((error) => {
        console.log(error);
         setIsLoading(false); 
      });
  }, []);

  return (
    <>
      {
        isLoading ? (<Loader />) : (<section className={styles.productsContainer}>
          {products?.map((singleProduct) => {
            return <ProductCard renderAdd={true} product={singleProduct}key={singleProduct.id}/>
          })}
        </section>)
     } 

    </>
    
  );
    
  
}

export default Product;