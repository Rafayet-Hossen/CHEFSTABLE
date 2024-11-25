import { useState } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import OurRecipes from "./components/OurRecipes";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [recipeQueue,setRecipeQueue] = useState([]);

  const addRecipeQueue = (recipes) => {
    const isExist = recipeQueue.find(
      (prevRecipe) => prevRecipe.recipe_id === recipes.recipe_id
    );
    if(!isExist){
      setRecipeQueue([...recipeQueue, recipes]);
    }
    else {
      alert("Recipe Already Exists")
    }
  }
  return (
    <div className="w-11/12 mx-auto">
      {/* Navbar Section */}
      <Navbar/>
      {/* Banner Section */}
      <Banner/>
      {/* Recepies Section */}
      <OurRecipes/>
      <section className="flex flex-col md:flex-row gap-6 mt-20">
          {/* Cards Section */}
          <Recipes addRecipeQueue={addRecipeQueue}/>
          {/* SideBar */}
          <Sidebar recipeQueue={recipeQueue}/>
      </section>
    </div>
  );
};

export default App;
