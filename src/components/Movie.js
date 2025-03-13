export default function Movie({ movie, onSelectedMovie, selectedMovie }) {
  const isSelected = movie?.id === selectedMovie?.id;
  return (
    <li
      className={isSelected ? "movie-preview selected" : "movie-preview"}
      onClick={() => onSelectedMovie(movie)}
    >
      <img src={movie.poster} alt={movie.title} />
      <div className="movie-preview-details">
        <h2>{movie.title}</h2>
        <span className="preview-duration">
          <svg>
            <use xlinkHref="/icons.svg#icon-clock"></use>
          </svg>
          {movie.releasedDate} - {movie.duration}
        </span>
        <span className="preview-rating">
          <svg>
            <use xlinkHref="/icons.svg#icon-star"></use>
          </svg>
          {movie.rating}/10
        </span>
        <div
          className={
            movie.verdict === "Recommended"
              ? "verdict recommended"
              : movie.verdict === "Not Recommended"
              ? "verdict not-recommended"
              : "verdict pending"
          }
        >
          {movie.verdict}
        </div>
      </div>
    </li>
  );
}
