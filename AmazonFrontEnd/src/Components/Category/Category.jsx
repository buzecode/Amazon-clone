import React from "react";
import { CategoryInfos } from "./CategoryFullInfos";
import CategoryCard from "./categoryCard";
import  Styles from "./category.module.css";

function Category() {
  return (
    <section className={Styles.Category_container}>
      {CategoryInfos.map((infos) => (
        <CategoryCard data={infos}key={infos.id} />
      ))}
    </section>
  );
}

export default Category;
