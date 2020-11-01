import React, { useContext } from "react";
import { MovieContext } from "./MovieListContext";
function MovieList() {
  const value = useContext(MovieContext);
  return (
    <div>
      <h1>{value}</h1>
      {/* {movie.map((movies) => (
        <Movie name={movies.name} price={movies.price} />
      ))} */}
    </div>
  );
}

export default MovieList;
