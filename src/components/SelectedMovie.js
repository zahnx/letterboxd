import { useState } from "react";

export default function SelectedMovie({ selectedMovie, onRecommendMovie }) {
  const [verdict, setVerdict] = useState("Recommended");
  function handleSubmit(e) {
    e.preventDefault();
    onRecommendMovie(verdict);
  }
  return (
    <>
      {" "}
      <div className="right-content">
        <div className="selected-movie">
          <img src={selectedMovie.poster} alt={selectedMovie.title} />
          <div className="selected-movie-details">
            <h2>{selectedMovie.title}</h2>
            <span className="preview-duration">
              <svg>
                <use xlinkHref="/icons.svg#icon-clock"></use>
              </svg>
              {selectedMovie.releasedDate} - {selectedMovie.duration}
            </span>
            <span className="preview-rating">
              <svg>
                <use xlinkHref="/icons.svg#icon-star"></use>
              </svg>
              {selectedMovie.rating}/10
            </span>
          </div>
        </div>
        <div className="selected-movie-review">
          <h3>Review of the movie:</h3>
          <p>{selectedMovie.review}</p>
          <form className="selected-movie-form" onSubmit={handleSubmit}>
            <label>
              <h3>Would I recommend It?</h3>
            </label>
            <select
              value={verdict}
              onChange={(e) => setVerdict(e.target.value)}
            >
              <option value="Recommended">Recommended</option>
              <option value="Not Recommended">Not Recommended</option>
            </select>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
