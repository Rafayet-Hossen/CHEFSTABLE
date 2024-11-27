const Sidebar = ({ recipeQueue, handleRemove, prepareRecipe }) => {
  return (
    <div className="md:w-1/3 border h-96 p-3 rounded-xl mt-6">
      <h1 className="font-bold text-2xl text-center">
        Want to Cook:{recipeQueue.length}
      </h1>
      {/* Table 1 */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {recipeQueue.map((recipe, index) => (
              <tr className="hover">
                <th>{index + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
                <div className="flex-end">
                  <button
                    onClick={() => {
                      handleRemove(recipe.recipe_id);
                    }}
                    className="flex items-center py-2 px-5 bg-[#0BE58A] border-2 text-black mt-1 mb-1 rounded-full hover:bg-[#35f3a3]"
                  >
                    Prepare
                  </button>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <hr />

      <h1 className="font-bold text-2xl text-center">
        Currently Cook:{prepareRecipe.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {prepareRecipe.map((recipe, index) => (
              <tr className="hover">
                <th>{index + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sidebar;