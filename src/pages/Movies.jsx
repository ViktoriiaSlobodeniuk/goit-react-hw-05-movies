import { FetchSearchApi } from 'components/FetchApi';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

import { Link, useSearchParams, useLocation } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  const location = useLocation();

  const handleSubmit = evt => {
    evt.preventDefault();
    const inputValue = evt.currentTarget.elements.search.value;
    if (inputValue.trim() === '') {
      setSearchParams({});
      toast('Сформуйте запит для пошуку');
      return;
    }
    setSearchParams({ query: inputValue });
  };

  useEffect(() => {
    if (query === null) {
      setMovies([]);
      return;
    }

    FetchSearchApi(query)
      .then(resp => {
        setMovies(resp.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [query, searchParams]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" autoComplete="off" autoFocus />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Movies;
