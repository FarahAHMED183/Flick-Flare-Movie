import AddUser from "./AddUser";
import FirstApp from "./FirstApp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import UserDetails from "./UserDetails";
import Axios from "./Axios";
import LoginPage from "./LoginPage";
import Register from "./Register";
import MovieDetails from "./MovieDetails";
import './App.css'

import StarIcon from "./StarIcon";

import FavoritesPage from "./FavoritesPage";
import MovieList from "./MovieList";
import Favorites from "./Favorites";
import Header from "./Header";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<MovieList/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/Favorites" element={<Favorites/>} /> {/* Corrected */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
