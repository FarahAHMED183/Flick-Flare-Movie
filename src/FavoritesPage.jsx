import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFavorite } from './store/favouriteAction'; 
import 'bootstrap-icons/font/bootstrap-icons.css'; 

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites?.favorites || []);  // Safeguard against undefined

  const dispatch = useDispatch();

  const handleFavoriteClick = (movie) => {
    dispatch(removeFavorite(movie)); 
  };

  return (
    <div>
      <h2>Your Favorite Movies</h2>
      {favorites.length === 0 ? (
        <p>No favorite movies added yet.</p>
      ) : (
        <ul className="movies-list">
          {favorites.map((movie) => (
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
              <span
                onClick={() => handleFavoriteClick(movie)}
                role="button"
                className="favorite-icon"
              >
                <i className="bi bi-star-fill text-warning"></i> 
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesPage;
