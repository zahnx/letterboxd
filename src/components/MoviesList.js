import Movie from "./Movie";
import FormAddMovie from "./FormAddMovie";
import SelectedMovie from "./SelectedMovie";

export default function MoviesList({
  movies,
  onAddMovie,
  showForm,
  setShowForm,
  selectedMovie,
  onSelectedMovie,
  onRecommendMovie,
}) {
  return (
    <div className="letterboxd-content">
      <div className="left-content">
        <ul>
          {movies.map((movie) => (
            <Movie
              movie={movie}
              onSelectedMovie={onSelectedMovie}
              selectedMovie={selectedMovie}
              key={movie.title}
            />
          ))}
        </ul>

        {showForm && <FormAddMovie onAddMovie={onAddMovie} />}
        <button
          className="add-movie"
          onClick={() => setShowForm((setShowForm) => !setShowForm)}
        >
          {!showForm ? "Add Movie +" : "Hide Form -"}
        </button>
      </div>
      {selectedMovie && (
        <SelectedMovie
          selectedMovie={selectedMovie}
          onRecommendMovie={onRecommendMovie}
        />
      )}
    </div>
  );
}
