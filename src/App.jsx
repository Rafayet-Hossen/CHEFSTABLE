import { useState } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import OurRecipes from "./components/OurRecipes";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

const App = () => {
  const [recipeQueue,setRecipeQueue] = useState([]);
  const [prepareRecipe,setPrepareRecipe] = useState([]);
  const [totaltime,setTime] = useState(0);
  const [totalcalories,setCalories] = useState(0);
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
  const handleRemove= (id) => {
    const deletedRecipe = recipeQueue.find(recipe => recipe.recipe_id === id)
    const updatedQueue = recipeQueue.filter(recipe => recipe.recipe_id !== id)
    setRecipeQueue(updatedQueue)
    setPrepareRecipe([...prepareRecipe,deletedRecipe])
  }
  const calculate = (time,calories) => {
    setTime(totaltime+time)
    setCalories(totalcalories+calories)
  }
  return (
    <div className="">
      {/* Navbar Section */}
      <Navbar />
      {/* Banner Section */}
      <Banner />
      {/* Recepies Section */}
      <OurRecipes />
      <section className="flex flex-col md:flex-row gap-6 mt-20 w-11/12 mx-auto">
        {/* Cards Section */}
        <Recipes addRecipeQueue={addRecipeQueue} />
        {/* SideBar */}
        <Sidebar
          handleRemove={handleRemove}
          recipeQueue={recipeQueue}
          prepareRecipe={prepareRecipe}
          calculate={calculate}
          totaltime={totaltime}
          totalcalories={totalcalories}
        />
      </section>
      <Footer />
    </div>
  );
};

export default App;
