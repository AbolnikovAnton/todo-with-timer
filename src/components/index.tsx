import { useEffect, useState } from "react";

interface Recipe {
  id: number;
  name: string;
  image: string;
  prepTimeMinutes: number;
}

export default function PaloAlto() {
  const [data, setData] = useState({ recipes: [] as Recipe[] });

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  console.log(data);

  return (
    <>
      <table>
        <thead>
          <tr>
            {Object.keys(data?.recipes[0]).map((id) => (
              <th key={id}>{id}</th>
            ))}
          </tr>
        </thead>
        {data.recipes.map((recipe) => (
          <tr key={recipe.id}>
            <td>{recipe.id}</td>
            <td>{recipe.name}</td>
            <td>{recipe.image}</td>
            <td>{recipe.prepTimeMinutes}</td>
          </tr>
        ))}
      </table>
    </>
  );
}
