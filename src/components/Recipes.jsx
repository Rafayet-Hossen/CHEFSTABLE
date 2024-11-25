import { useEffect, useState } from "react";

const Recipes = () => {
    const[recipes,setRecipes] = useState([]);
    useEffect(() => {
        fetch("../../public/recepies.json")
        .then((result) => result.json())
        .then((data) => setRecipes(data));
    },[])
    
    return (
      <div className="md:w-2/3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 w-11/12 mx-auto">
          {recipes.map((recipes) => (
            <div
              key={recipes.recipe_id}
              className="card card-normal bg-base-100 shadow card-bordered"
            >
              <figure className="p-5">
                <img
                  className="w-full h-72 p-3 border-2 rounded-xl"
                  src={recipes.recipe_image}
                  alt="Shoes"
                />
              </figure>
              <div className="p-7 space-y-2">
                <div>
                  <h2 className="card-title">{recipes.recipe_name}</h2>
                  <p>{recipes.short_description}</p>
                </div>
                <hr />
                <div className="card-actions justify-starts flex flex-col md:flex-col p-2">
                  <h1 className="flex gap-1 font-bold text-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                      />
                    </svg>
                    Ingredients:{recipes.ingredients.length}
                  </h1>
                  <ul>
                    {recipes.ingredients.map((item) => (
                      <li className="font-semibold text-gray-600 list-disc ml-5">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <hr />
                <div className="flex gap-4">
                  <h3 className="flex justify-center items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    {recipes.preparing_time}
                  </h3>
                  <h3 className="flex justify-center items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                      />
                    </svg>
                    {recipes.calories}
                  </h3>
                </div>
                <div className="mt-1">
                  <button className="px-5 py-2 border font-semibold rounded-full bg-[#0be58a] shadow hover:bg-[#35f3a3]">
                    Want to Cook
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Recipes;