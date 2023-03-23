import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FetchApi } from 'components/FetchApi';
import { StyledLink, Title, TrendList } from 'styles/Home.styled';

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
      <Title>Trending today</Title>
      <TrendList>
        {movieCards.map(({ id, title, poster_path }) => {
          return (
            <li key={id}>
              <StyledLink to={`movies/${id}`} state={{ from: location }}>
                <img
                  src={
                    poster_path !== null
                      ? 'https://image.tmdb.org/t/p/original/' + poster_path
                      : '../../public/images/image.jpg'
                  }
                  alt="poster"
                  width={350}
                />
                <h3> {title}</h3>
              </StyledLink>
            </li>
          );
        })}
      </TrendList>
    </div>
  );
};

export default Home;
