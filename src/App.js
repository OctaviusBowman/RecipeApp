import React, { useEffect, useState } from "react";
import Recipe from "./components/Recipe";
import "./App.css";

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
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          placeholder="Search for food, and we'll find some recipes!"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>

      <div>
        <h1 className="menu">Recipe Guide</h1>
      </div>

      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.calories}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
