import React from "react";
import styles from "./Category.module.css";
import { Link } from "react-router-dom";

function CategoryCard({ data }) {
  if (!data) return null;

  const { name, title, imgLink } = data;

  return (
    <div className={styles.category}>
      <Link
        to={`/category/${encodeURIComponent(name)}`}
        className={styles.link}
      >
        <div className={styles.content}>
          <h2>{title}</h2>
          <img
            src={imgLink}
            alt={title || "Category image"}
            className={styles.image}
          />
          <p className={styles.cta}>Shop now</p>
        </div>
      </Link>
    </div>
  );
}

export default CategoryCard;