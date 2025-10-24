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

// export default Product;import React, { useEffect, useState } from "react";
// import axios from "axios";
// import ProductCard from "./ProductCard";
// import styles from "./Product.module.css";
// import Loader from "../Loader/Loader";

// function Product() {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await axios.get("https://fakestoreapi.com/products");
//         setProducts(res.data);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to load products. Please try again.");
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   if (isLoading) return <Loader />;
//   if (error) return <p className={styles.error}>{error}</p>;

//   return (
//     <section className={styles.productsContainer}>
//       {products.map((p) => (
//         <ProductCard key={p.id} product={p} renderAdd={true} />
//       ))}
//     </section>
//   );
// }

// export default Product;
