import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import OurRecipes from "./components/OurRecipes";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";

const App = () => {
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
          <Recipes/>
          {/* SideBar */}
          <Sidebar/>
      </section>
    </div>
  );
};

export default App;
