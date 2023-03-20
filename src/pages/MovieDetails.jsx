import { FetchApi } from 'components/FetchApi';
import { useEffect, useState } from 'react';
import { Outlet, Link, useParams } from 'react-router-dom';
import { Container, List } from 'styles/MoviesDetails.styled';

const MoviesDetails = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);
  const [poster, setPoster] = useState('');
  const [vote_average, setVote_average] = useState(null);

  const { movieId } = useParams();

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
    <>
      <Container>
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
          <List>
            {genres.map(({ name, id }) => {
              return <li key={id}>{name}</li>;
            })}
          </List>
        </div>
      </Container>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MoviesDetails;
