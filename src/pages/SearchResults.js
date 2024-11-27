import React from "react";
import { useLocation } from "react-router-dom";
import mockData from "../../src/data"; 


const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  
  const filteredCars = mockData.filter((car) =>
    car.name.toLowerCase().includes(query?.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">
        Search Results for: "{query}"
      </h1>
      {filteredCars.length > 0 ? (
        <ul>
          {filteredCars.map((car) => (
            <li key={car.id} className="mb-2">
              <div className="p-4 border rounded shadow">
                <h2 className="text-lg font-semibold">{car.name}</h2>
                <p>Type: {car.description}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cars found for your search query.</p>
      )}
    </div>
  );
};

export default SearchResults;
