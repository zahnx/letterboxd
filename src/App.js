import { useState } from "react";
import Header from "./components/Header";
import MoviesList from "./components/MoviesList";

const initialMovies = [
  {
    id: 3019284,
    title: "Oppenheimer",
    poster:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS-v82iAoNANJgZ6EATtRCYgJvaXN9L02Dg0V5-0oN9IFOQVluQ",
    releasedDate: 2023,
    duration: "3h 0m",
    rating: 8.5,
    review:
      "A visually stunning and intellectually stimulating biopic that explores the moral dilemmas behind the atomic bomb. Christopher Nolan delivers yet another masterpiece.",
    verdict: "Recommended",
  },
  {
    id: 3019285,
    title: "Spider-Man: No Way Home",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg",
    releasedDate: 2021,
    duration: "2h 28m",
    rating: 8.2,
    review:
      "An emotional rollercoaster packed with nostalgia and action. A love letter to Spider-Man fans, bringing together generations of heroes in an unforgettable story.",
    verdict: "Not Recommended",
  },
  {
    id: 3019286,
    title: "Dune: Part Two",
    poster:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSYcWh7tLxKT9zfhqv9pWB99jZgkp0kMELvBn8iAd6nBQ7KesxS",
    releasedDate: 2024,
    duration: "2h 46m",
    rating: 9.0,
    review:
      "A breathtaking sci-fi epic that expands the world of Arrakis with stunning visuals, deep storytelling, and incredible performances. Denis Villeneuve continues to deliver a masterpiece.",
    verdict: "Pending...",
  },
];

export default function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [showForm, setShowForm] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  function handleAddMovie(movie) {
    setMovies((movies) => [...movies, movie]);
    setShowForm(false);
  }

  function handleSelectedMovie(movie) {
    setSelectedMovie((current) => (current?.id === movie.id ? null : movie));
    setShowForm(false);
  }

  function handleRecommendMovie(userVerdict) {
    setMovies((movies) =>
      movies.map((movie) =>
        movie.id === selectedMovie.id
          ? { ...movie, verdict: userVerdict }
          : movie
      )
    );
    setSelectedMovie(null);
  }

  return (
    <div className="container">
      <Header />
      <MoviesList
        movies={movies}
        onAddMovie={handleAddMovie}
        showForm={showForm}
        setShowForm={setShowForm}
        selectedMovie={selectedMovie}
        onSelectedMovie={handleSelectedMovie}
        onRecommendMovie={handleRecommendMovie}
      />
    </div>
  );
}
