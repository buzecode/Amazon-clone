import React from 'react'
import { Rating } from "@mui/material";
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import styles from "./Product.module.css";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../DataProvider/DataProvider';
import { Type } from '../../Utility/action.type';
const ProductCard = ({ product ,flex,renderDesc}) => {
  const { image, title, id, rating, price, description } = product;

  const [ state, dispatch ]=useContext(DataContext)
// console.log(state)

  const addToCart = () =>{
    dispatch(
      {
        type: Type.ADD_TO_BASKET,
        item:{image,title,id,rating,price,description}
        
      }
    )
  }

  return (
    <section className={`${styles.cardContainer} ${flex?styles.product_flexed : ''}`}>
      <Link to={`/products/${id}`}>
        <img src={image} alt={title ||"product image"} />
      </Link>
      <div className={styles.rating}>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <div>
          {/* rating */}
          <Rating value={rating?.rate} precision={0.1} />
          {/* count */}
          <small>{rating?.count}</small>
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>
        {/* {renderAdd} */}
        <button className={styles.button} onClick={addToCart}>add to cart</button>
      </div>
    </section>
  );
}

export default ProductCard