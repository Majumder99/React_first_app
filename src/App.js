// 60bddeba
import { useEffect, useState } from "react";

import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const movie1 = {
  Title: "Batman: Under the Red Hood",
  Year: "2010",
  imdbID: "tt1569923",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNmY4ZDZjY2UtOWFiYy00MjhjLThmMjctOTQ2NjYxZGRjYmNlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
};

const API_URL = "http://www.omdbapi.com?apikey=60bddeba";
// const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=60bddeba";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([""]);
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("Batman");
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search For Movies"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt="Search"
          onClick={() => {
            searchMovies(searchTerm);
          }}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
