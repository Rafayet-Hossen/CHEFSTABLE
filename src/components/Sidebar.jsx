const Sidebar = ({ recipeQueue }) => {
  return (
    <div className="md:w-1/3 border h-96 p-3 rounded-xl mt-6">
      <h1 className="font-bold text-2xl text-center">
        Want to Cook:{recipeQueue.length}
      </h1>
      {recipeQueue.map((recipe) => (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="bg-base-200 font-semibold text-gray-600">
                <th>{recipe.recipe_id}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
                <div className="flex-end">
                  <button className="flex items-center py-2 px-5 bg-[#0BE58A] border-2 text-black mt-1 mb-1 rounded-full">
                    Prepare
                  </button>
                </div>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;