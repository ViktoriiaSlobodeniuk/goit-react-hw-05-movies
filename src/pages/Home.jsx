import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FetchApi } from 'components/FetchApi';

const Home = () => {
  const [movieCards, setMovieCards] = useState([]);
  const location = useLocation();
  useEffect(() => {
    FetchApi('trending/movie/day')
      .then(resp => {
        setMovieCards(resp.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Популярне сьогодні</h1>
      <ul>
        {movieCards.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
