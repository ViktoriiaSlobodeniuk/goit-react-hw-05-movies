import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FetchApi } from './FetchApi';
import { Author } from '../styles/Reviews.stuled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();
  useEffect(() => {
    FetchApi(`movie/${movieId}/reviews`)
      .then(resp => {
        console.log(resp.data.results);
        setReviews(resp.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  return reviews.length === 0 ? (
    <p> There is no reviews🌻</p>
  ) : (
    <ul>
      {reviews.map(({ id, author, content }) => {
        return (
          <li key={id}>
            <Author>Author: {author}</Author>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
