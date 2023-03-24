import { FetchSearchApi } from 'components/FetchApi';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

import { useSearchParams, useLocation } from 'react-router-dom';
import { Form, Button } from 'styles/Movies.styled';
import { Item, StyledLink, SubTitle, TrendList } from 'styles/Home.styled';

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
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="lookup words..."
        />
        <Button type="submit">Search</Button>
      </Form>
      <TrendList>
        {movies.map(({ id, title, poster_path }) => {
          return (
            <Item key={id}>
              <StyledLink to={`${id}`} state={{ from: location }}>
                <div>
                  <img
                    src={
                      poster_path !== null
                        ? 'https://image.tmdb.org/t/p/original/' + poster_path
                        : '/goit-react-hw-05-movies/images/image.jpg'
                    }
                    alt="poster"
                  />
                </div>

                <SubTitle>{title}</SubTitle>
              </StyledLink>
            </Item>
          );
        })}
      </TrendList>
    </>
  );
};

export default Movies;
