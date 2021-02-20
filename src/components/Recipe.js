import React from "react";
import style from "../css/recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="bg-white rounded-xl w-80 1080p:w-96 macOld:w-full place-self-center self-stretch shadow-lg">
      {/* <div className={style.recipe}> */}
      <img className='rounded-t-xl rounded-b w-full shadow-md' src={image} alt=""></img>
      <h1 className="text-3xl 1080p:text-4xl 4k:text-7xl macOld:pt-2 macOld:text-5xl macNew:text-6xl macNew:pt-3 4k:pt-4 font-bold text-center text-green-1000 p-1">{title}</h1>
      <ol className="flex-col p-4 ">
        {ingredients.map((ingredient, key) => (
          <li className="text-gray-1000 text-xl macOld:text-3xl macOld:py-2 macNew:text-4xl 4k:text-5xl 4k:py-4 macNew:py-3 list-disc list-inside" key={key}>{ingredient.text}</li>
        ))}
        <p className="text-2xl pt-2 1080p:text-3xl macOld:text-4xl macNew:text-5xl 4k:text-6xl 4k:pt-4 macNew:pt-3 text-center font-bold items-end text-green-1000">
          <b className="">{`Calories: ${Math.round(calories)}`}</b>
        </p>
      </ol>
      {/* <img className={style.image} src={image} alt=""></img> */}
    </div>
  );
};

export default Recipe;
