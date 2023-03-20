import { FetchSearchApi } from 'components/FetchApi';
import SearchForm from 'components/SearchForm';
import { useState } from 'react';
import { useEffect } from 'react';

import { Link } from 'react-router-dom';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const onFormSubmit = inputValue => {
    if (inputValue !== searchQuery) {
      setSearchQuery(inputValue);
      setMovies([]);
    }
  };
  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    FetchSearchApi(searchQuery)
      .then(resp => {
        console.log(resp.data.results);
        setMovies(resp.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [searchQuery]);

  return (
    <>
      <SearchForm onSubmit={onFormSubmit} />

      <ul>
        {movies.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`${id}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Movies;
