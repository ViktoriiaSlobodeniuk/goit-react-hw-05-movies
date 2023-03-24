import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ActorItem, ActorList } from 'styles/Cast.styled';
import { Container } from 'styles/Home.styled';
import { FetchApi } from './FetchApi';

const Cast = () => {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    FetchApi(`movie/${movieId}/credits`)
      .then(resp => {
        setCast(resp.data.cast);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  return cast.length === 0 ? (
    'There is no cast info yet🌹'
  ) : (
    <Container>
      <ActorList>
        {cast
          .filter(
            (value, index) => index === cast.findIndex(v => v.id === value.id)
          )
          .map(({ id, profile_path, name, character }) => {
            return (
              <ActorItem key={id}>
                <img
                  src={'https://image.tmdb.org/t/p/original/' + profile_path}
                  alt="Actor/ress portrait"
                  // width={100}
                />
                <p>{name}</p>
                <p>Character: {character}</p>
              </ActorItem>
            );
          })}
      </ActorList>
    </Container>
  );
};

export default Cast;
