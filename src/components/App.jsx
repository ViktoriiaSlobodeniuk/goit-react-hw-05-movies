import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

// import Home from 'pages/Home';
// import Movies from 'pages/Movies';
// import MoviesDetails from 'pages/MovieDetails';
// import Cast from './Cast';
// import Reviews from './Reviews';

import Layout from './Layout';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MoviesDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};

// сісс
