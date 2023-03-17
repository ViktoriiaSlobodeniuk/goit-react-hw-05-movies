import { Link } from 'react-router-dom';
const Movies = () => {
  return (
    <div>
      {['batman😄', 'aquaman😊', 'superman🤩'].map(man => {
        return (
          <Link key={man} to={`${man}`}>
            {man}
          </Link>
        );
      })}
    </div>
  );
};

export default Movies;

// інпут пошуку
// рендер колекції відповідей на запит по ключовому слову
// по кліку на назву - відкриття розгорнутої інформації про фільм + каст і відгуки
