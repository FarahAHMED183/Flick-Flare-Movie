import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFavorite } from './store/favActions'; 
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import './Favorites.css'; // Ensure your CSS file has custom styles if needed
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Favorites() {
  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();

  const handleFavoriteClick = (movie) => {
    dispatch(removeFavorite(movie)); 
  };

  return (
    <div className="container">
      <h1 className="my-4">Favorite Movies</h1>
      {favorites.length === 0 ? (
        <p>No favorite movies added yet.</p>
      ) : (
        <div className="row">
          {favorites.map((movie) => (
            <div className="col-md-4 mb-4" key={movie.id}>
              <div className="card h-100">
                <Link to={`/movie/${movie.id}`} className="text-decoration-none">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-dark">{movie.title}</h5>
                  </div>
                </Link>
                <div >
                  <span
                    onClick={() => handleFavoriteClick(movie)}
                    role="button"
                    className="text-warning"
                  >
                    <i className="bi bi-star-fill"></i> 
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
