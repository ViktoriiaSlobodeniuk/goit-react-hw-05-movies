import { FetchApi } from 'components/FetchApi';
import { useEffect, useState } from 'react';
import { Outlet, Link, useParams } from 'react-router-dom';

const MoviesDetails = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    FetchApi(`movie/${movieId}`)
      .then(resp => {
        console.log(resp.data.release_date);
        setTitle(resp.data.title);
        setOverview(resp.data.overview);
        setGenres(resp.data.genres);
        setDate(resp.data.release_date);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  return (
    <>
      <div>
        <img src="" alt="poster" width={200} height={200} />
      </div>
      <div>
        <h1>
          {title}({date.substring(-4, 4)})
        </h1>

        <p>User Score:</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres.map(({ name, id }) => {
            return <li key={id}>{name}</li>;
          })}
        </ul>
      </div>
      <div>
        <p>Additional information</p>
        <ul>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
        </ul>
      </div>

      <Outlet />
    </>
  );
};

export default MoviesDetails;
