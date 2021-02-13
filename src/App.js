import React, { useEffect, useState } from "react";
import Recipe from "./components/Recipe";
import "./App.css";
import Logo from "./TheKnife.svg"

const App = () => {
  // I know storing values here is bad practice. I could store these values in a .env file, but I chose not to for simplicity. The chances of anyone reading this is pretty low, however if you do have fun :)
  const APP_ID = "3bafbaef";
  const APP_KEY = "14ee7dad3c72ab6831cb5fa6d78281db";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const getRecipes = async () => {
    const res = await fetch(exampleReq);
    const data = await res.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App my-3 flex flex-col justify-between mx-auto w-11/12 rounded-3xl shadow-lg">
      {/* <div className="App my-3 container-None mx-auto w-11/12 rounded-3xl"> */}

      <h1 className="menu text-2xl text-white pl-16 pt-10 tracking-wide font-bold">The Recipe Guide
        <img className="inline w-8 ml-5" src={Logo} alt=""/>
      </h1>

      <div className="searchWrapper flex flex-col self-center pb-32">
        <h1 className="font-bold text-white text-6xl">What do you have a taste for?</h1>

        <form onSubmit={getSearch} className="search-form flex pt-8 justify-center">
          <input
            className="search-bar w-9/12 py-1 pl-6 rounded focus:outline-none text-gray-500 font-semibold text-2xl placeholder-gray-500"
            placeholder="We'll find a recipe for you!"
            type="text"
            value={search}
            onChange={updateSearch}
          />
          <button className="search-button rounded text-white px-3 font ml-4 text-2xl font-semibold bg-blue-500 hover:bg-blue-600 outline-none" type="submit">
            Search
        </button>
        </form>

      </div>

      <div className="flexClearFix"></div>

      {/* <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.calories}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div> */}
    </div >
  );
};

export default App;
