import React from "react";
import style from "../css/recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="bg-white rounded-lg w-80 place-self-center self-stretch shadow-lg">
      {/* <div className={style.recipe}> */}
      <img className='rounded-t-lg w-full' src={image} alt=""></img>
      <h1 className="text-3xl font-bold text-center text-green-1000 p-1">{title}</h1>
      <ol className="flex-col p-4 ">
        {ingredients.map((ingredient, key) => (
          <li className="text-gray-1000 text-lg list-disc list-inside" key={key}>{ingredient.text}</li>
        ))}
        <p className="text-2xl text-center font-bold items-end text-green-1000">
          <b className="">{`Calories: ${Math.round(calories)}`}</b>
        </p>
      </ol>
      {/* <img className={style.image} src={image} alt=""></img> */}
    </div>
  );
};

export default Recipe;
