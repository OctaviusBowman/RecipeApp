import React, { useEffect, useState } from "react";
import Recipe from "./components/Recipe";
import "./App.css";
import Logo from "./TheKnife.svg"
import Arrow from "./TheArrow.svg"

const App = () => {
  // I know storing values here is bad practice. I could store these values in a .env file, but I chose not to for simplicity. The chances of anyone reading this is pretty low, however if you do have fun :)
  const APP_ID = "3bafbaef";
  const APP_KEY = "14ee7dad3c72ab6831cb5fa6d78281db";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

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

  // Conditionally render two screen views
  if (query === "") {
    return (
      <div className="App my-3 flex flex-col justify-between mx-auto w-11/12 rounded-3xl shadow-lg">

        <h1 className="menu text-2xl text-white pl-16 pt-10 tracking-wide font-bold 1080p:text-3xl macOld:text-5xl macOld:pl-20 macOld:pt-14 4k:text-7xl 4k:pl-32 4k:pt-20">The Recipe Guide
        <img className="inline w-8 ml-5 macOld:w-12 4k:w-20 4k:ml-7" src={Logo} alt="Crossed Knives" />
        </h1>

        <div className="searchWrapper flex flex-col self-center pb-32">
          <h1 className="font-bold text-white text-6xl 1080p:text-7xl macOld:text-8xl 4k:text-9xl">What do you have a taste for?</h1>

          <form onSubmit={getSearch} className="search-form flex pt-8 macOld:pt-12 justify-center">
            <input
              className="search-bar w-9/12 py-1 pl-6 rounded focus:outline-none text-gray-500 font-semibold text-2xl 1080p:text-3xl macOld:text-5xl 4k:text-7xl placeholder-gray-500"
              placeholder="We'll find a recipe for you!"
              type="text"
              value={search}
              onChange={updateSearch}
            />
            <button className="search-button focus:outline-none rounded text-white px-3 font ml-4 text-2xl 1080p:text-3xl macOld:text-5xl 4k:text-7xl font-semibold bg-blue-500 hover:bg-blue-600 outline-none" type="submit">
              Search
        </button>
          </form>
        </div>
        <div className="filler"></div>
      </div >
    )
  } else {

    // Store these return values in the 

    return (
      <div className="bg-green-1000 py-3">
        <div className="bg-white w-11/12 mx-auto rounded-3xl shadow pt-2">
          <h1 className="text-green-1000 font-bold text-center text-6xl 1080p:text-7xl macOld:text-8xl 4k:text-9xl">Recipes</h1>
          <div className="px-32 grid grid-cols-3 gap-48 1080p:gap-16 1080p:px-48 py-5">
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
        <button className="bg-green-1000 hover:bg-gray-500 focus:outline-none macOld:text-4xl macNew:text-5xl text-white text-2xl 1080p:text-3xl fixed 1080p:bottom-4 macOld:bottom-8 bottom-2 left-1 rounded-lg 4k:p-3 p-1.5" onClick={getSearch}>
          <img className="inline w-9 1080p:w-10 mr-2 macOld:w-12 macNew:w-14" src={Arrow} alt="Back Arrow"/>
          Search</button>
        </div>
      </div>)
  };
};

export default App;
