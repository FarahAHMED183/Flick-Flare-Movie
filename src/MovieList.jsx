import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from './store/favActions';
import { Link } from 'react-router-dom';
import Header from './Header';
import 'bootstrap-icons/font/bootstrap-icons.css';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const endpoint = search 
          ? 'https://api.themoviedb.org/3/search/movie' 
          : 'https://api.themoviedb.org/3/movie/popular';

        const options = {
          method: 'GET',
          url: endpoint,
          params: {
            language: 'en-US',
            page: pageNumber,
            query: search
          },
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjk2MmM4OGE4MjgyZDlmZDRkNjQwODQwM2FiZmQ5ZiIsIm5iZiI6MTcyNTg5MzM4Ni42MTE4NTcsInN1YiI6IjY2ZGVkM2E2NWZiZmQ5YzQ4ODc4YTI1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tHW0Qe35JpmQctzndQL6QHmfez5gd8O1llRUnWbOqg4'
          }
        };

        const response = await axios.request(options);
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, [pageNumber, search]);

  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  const handleFavoriteClick = (movie) => {
    if (isFavorite(movie.id)) {
      dispatch(removeFavorite(movie)); 
    } else {
      dispatch(addFavorite(movie)); 
    }
  };

  const handleNextPage = () => {
    setPageNumber(prev => prev + 1);
  };

  const handlePrevPage = () => {
    setPageNumber(prev => (prev > 1 ? prev - 1 : prev));
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPageNumber(1);
  };

  return (
    <>
      
      <div style={{ backgroundColor: 'darkgray', padding: '20px' }}>
        <input
          type="text"
          placeholder="Search for movies..."
          value={search}
          onChange={handleSearch}
          style={{ padding: '10px', width: '100%', marginBottom: '20px' }}
        />
        <ul className="movies-list">
          {movies.map((movie) => (
            <li key={movie.id} className="movie-card">
              <Link to={`/movie/${movie.id}`}>
                <img
                  className="movie-image"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className="title-container">
                  <h4 className="movie-title">{movie.title}</h4>
                </div>
              </Link>
              <i
                className={`star-icon ${isFavorite(movie.id) ? 'active' : ''} bi ${isFavorite(movie.id) ? 'bi-star-fill' : 'bi-star'}`}
                onClick={() => handleFavoriteClick(movie)}
              ></i>
            </li>
          ))}
        </ul>
        <div className="pagination-controls">
          <button onClick={handlePrevPage} disabled={pageNumber === 1}>
            Previous
          </button>
          <button onClick={handleNextPage}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default MovieList;
