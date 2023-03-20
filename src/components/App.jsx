import { Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MoviesDetails from 'pages/MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';
import Layout from './Layout';

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

// доробити кнопку повернення назад
// корректне відображення урлів в хттп стрічці
//  ліниве завантаження
// сісс
