import React from "react";
import { MovieListProvider } from "./components/MovieListContext";
import MovieList from "./components/MovieList";
import Nav from "./components/Nav";

function App() {
  return (
    <MovieList>
      <div className="app">
        <h1>hello testing</h1>
        <Nav />
        <MovieList />
      </div>
    </MovieList>
  );
}

export default App;
