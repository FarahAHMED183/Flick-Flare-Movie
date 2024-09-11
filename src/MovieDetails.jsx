import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './MovieDetails.css'
function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
console.log(id);

  useEffect(() => {
    if (!id) {
      setError('Movie ID is missing');
      return;
    }

    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
          params: { language: 'en-US' },
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjk2MmM4OGE4MjgyZDlmZDRkNjQwODQwM2FiZmQ5ZiIsIm5iZiI6MTcyNTg5MzM4Ni42MTE4NTcsInN1YiI6IjY2ZGVkM2E2NWZiZmQ5YzQ4ODc4YTI1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tHW0Qe35JpmQctzndQL6QHmfez5gd8O1llRUnWbOqg4'
          }
        });
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error.response || error.message);
        setError('Failed to fetch movie details.');
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!movie) {
    return <div className="loading">Loading movie details...</div>;
  }

  return (
    <div className="movie-detail-container">
      <h1 className="movie-title">{movie.title}</h1>
      <img
        className="movie-poster"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="movie-info">
        <p className="movie-overview">{movie.overview}</p>
        <p className="movie-release-date">Release Date: {movie.release_date}</p>
        <p className="movie-rating">Rating: {movie.vote_average}</p>
      </div>
    </div>
  );
}

export default MovieDetails;
