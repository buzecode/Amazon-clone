import React, { useContext } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import ProductCard from "../../Components/Product/ProductCard";
import { DataContext } from '../../Components/DataProvider/DataProvider';
import { Link } from 'react-router-dom'
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';

import styles from './Cart.module.css'
import { Type } from "../../Utility/action.type";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  
  const total = basket.reduce((amount, item) => {
    return amount + item.price * item.amount;
  }, 0);
  const increment = (item) => {
    dispatch({
    type:Type.ADD_TO_BASKET,item
  })
}
  const decrement = (id) => {
    dispatch({
    type:Type.REMOVE_FROM_BASKET,id
  })
}


  return (
    <LayOut>
      <section className={styles.container}>
        <div className={styles.cartContainer}>
          <h2>Hello</h2>
          <h3>Your Shopping Basket</h3>
          <hr />
          {basket?.length === 0 ? (
            <p>Your Amazon Cart is empty</p>
          ) : (
            basket.map((item, i) => (
              <section className={styles.cartProduct}>
                <ProductCard
                  key={item.id}
                  product={item}
                  renderDesc={true}
                  renderAdd={false}
                  flex={true}
                />
                <div className={styles.btnContainer}>
                  <button
                    className={styles.btn}
                    onClick={() => increment(item)}
                  >
                    <IoIosArrowUp size={20}/>
                  </button>
                  <span>{item.amount}</span>
                  <button
                    className={styles.btn}
                    onClick={() => decrement(item.id)}
                  >
                    <IoIosArrowDown size={20} />
                  </button>
                </div>
              </section>
            ))
          )}
        </div>
        {basket?.length !== 0 && (
          <div className={styles.subtotal}>
            <div>
              <p>subtotal({basket?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments">Continue to checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart;