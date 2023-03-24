import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FetchApi } from 'components/FetchApi';
import {
  Container,
  Item,
  StyledLink,
  SubTitle,
  Title,
  TrendList,
} from 'styles/Home.styled';

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
    <>
      <Title>Trending today</Title>
      <Container>
        <TrendList>
          {movieCards.map(({ id, title, poster_path }) => {
            return (
              <Item key={id}>
                <StyledLink to={`movies/${id}`} state={{ from: location }}>
                  <div>
                    <img
                      src={
                        poster_path !== null
                          ? 'https://image.tmdb.org/t/p/original/' + poster_path
                          : '../../public/images/image.jpg'
                      }
                      alt="poster"
                    />
                  </div>

                  <SubTitle> {title}</SubTitle>
                </StyledLink>
              </Item>
            );
          })}
        </TrendList>
      </Container>
    </>
  );
};

export default Home;
