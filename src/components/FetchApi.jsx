import axios from 'axios';

const KEY = `db4a3ae686a3cf9655de72dc5716eec8`;

export async function FetchApi(endPoint) {
  const BASE_URL = `https://api.themoviedb.org/3/${endPoint}?api_key=${KEY}`;

  const response = await axios.get(BASE_URL);

  return response;
}

export async function FetchSearchApi(query) {
  const BASE_URL = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${query}`;

  const response = await axios.get(BASE_URL);

  return response;
}
