import React, { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieListProvider = (props) => {
  const [movie, setMovie] = useState([
    {
      name: "Inception",
      price: "10$",
      id: 3320,
    },
    {
      name: "Titanic",
      price: "80$",
      id: 3099,
    },
    {
      name: "harry potter",
      price: "100$",
      id: 3999,
    },
  ]);
  return (
    <MovieListProvider.Provider value={"hello"}>
      {props.childern}
    </MovieListProvider.Provider>
  );
};
