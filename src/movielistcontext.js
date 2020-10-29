import React, { createContext, useState } from "react";

export const MovieContext = createContext();
export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "harry potter",
      price: "$100",
      id: 3322,
    },
    {
      name: "inception",
      price: "$50",
      id: 9393,
    },
    {
      name: "Games of thorone",
      price: "$80",
      id: 22,
    },
  ]);
  return (
    <MovieContext.Provider value={"its work"}>
      {props.child}
    </MovieContext.Provider>
  );
};
