import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FetchApi } from 'components/FetchApi';

const Home = () => {
  const [movieCards, setMovieCards] = useState([]);

  useEffect(() => {
    const endPoint = 'trending/movie/day';
    FetchApi(endPoint)
      .then(resp => {
        console.log(resp.data.results);
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
              <Link to={`movies/${id}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
