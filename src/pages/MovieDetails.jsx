import { FetchApi } from 'components/FetchApi';
import { useEffect, useState, Suspense } from 'react';
import { Outlet, Link, useParams, useLocation } from 'react-router-dom';
import {
  AddInfo,
  AddList,
  Item,
  Container,
  GenresList,
  MovieCard,
} from 'styles/MoviesDetails.styled';
import { BackLink } from 'components/BackLink';
import { useRef } from 'react';

const MoviesDetails = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);
  const [poster, setPoster] = useState('');
  const [vote_average, setVote_average] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();

  const backLinkHref = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    FetchApi(`movie/${movieId}`)
      .then(resp => {
        setTitle(resp.data.title);
        setOverview(resp.data.overview);
        setGenres(resp.data.genres);
        setDate(resp.data.release_date);
        setPoster(resp.data.poster_path);
        setVote_average(resp.data.vote_average);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  return (
    <Container>
      <BackLink to={backLinkHref.current}>Back </BackLink>
      <MovieCard>
        <div>
          <img
            src={'https://image.tmdb.org/t/p/original/' + poster}
            alt="poster"
            width={350}
          />
        </div>

        <div>
          <h1>
            {title}({date.substring(-4, 4)})
          </h1>
          <p>User Score: {Math.round(vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <GenresList>
            {genres.map(({ name, id }) => {
              return <li key={id}>{name}</li>;
            })}
          </GenresList>
        </div>
      </MovieCard>
      <AddInfo>
        <p>Additional information:</p>
        <AddList>
          <Item>
            <Link to="cast">Cast</Link>
          </Item>
          <Item>
            <Link to="reviews">Reviews</Link>
          </Item>
        </AddList>
      </AddInfo>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MoviesDetails;
