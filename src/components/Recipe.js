import React from "react";
import style from "../css/recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient, key) => (
          <li key={key}>{ingredient.text}</li>
        ))}
      </ol>
      <p>
        <b>Calories</b>: {Math.round(calories)}
      </p>
      <img className={style.image} src={image} alt=""></img>
    </div>
  );
};

export default Recipe;
