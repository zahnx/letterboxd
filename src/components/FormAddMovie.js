import { useState } from "react";

export default function FormAddMovie({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState(
    "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
  );
  const [releasedDate, setReleasedDate] = useState("");
  const [duration, setDuration] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !poster || !releasedDate || !duration || !rating || !review)
      return;

    const id = crypto.randomUUID();
    const newMovie = {
      id,
      title,
      poster,
      releasedDate,
      duration,
      rating,
      review,
      verdict: "Pending...",
    };

    onAddMovie(newMovie);
  }
  return (
    <form className="add-movie-form" onSubmit={handleSubmit}>
      <label>Movie Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <label>Poster URL:</label>
      <input
        type="text"
        value={poster}
        onChange={(e) => setPoster(e.target.value)}
      ></input>
      <label>Released Date:</label>
      <input
        type="text"
        value={releasedDate}
        onChange={(e) => setReleasedDate(e.target.value)}
      ></input>
      <label>Duration:</label>
      <input
        type="text"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      ></input>
      <label>Rating:</label>
      <input
        type="number"
        value={rating}
        onChange={(e) => {
          if (e.target.value <= 10) {
            setRating(e.target.value);
          }
        }}
      ></input>
      <label>Review:</label>
      <textarea
        rows="4"
        cols="50"
        value={review}
        onChange={(e) => {
          if (e.target.value.length <= 250) {
            setReview(e.target.value);
          }
        }}
      ></textarea>
      <button>Submit Movie</button>
    </form>
  );
}
