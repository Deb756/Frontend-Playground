import React from "react";
import { useLoaderData } from "react-router-dom";

function Product() {
  const data = useLoaderData();

  return (
    <div>
      <h2 className="text-center text-3xl">Product Page</h2>

      {data.length === 0 ? (
        <p className="text-red-500 text-center">No products available</p>
      ) : (
        <ul className="grid grid-cols-2 gap-4 p-4">
          {data.map((item) => (
            <li key={item.id} className="border p-2 rounded-md shadow">
              <h3 className="font-bold">{item.title}</h3>
              <p>${item.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Product;

// fetching data when loading (we can do it by useEffect() but thats not much optimized)
export const ApiCall = async () => {
  const response = await fetch(`https://fakestoreapi.com/products`);
  //console.log(response.json());
  return response.json();
};
