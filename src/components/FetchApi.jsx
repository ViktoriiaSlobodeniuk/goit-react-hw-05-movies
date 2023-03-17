import axios from 'axios';

export async function FetchApi(endPoint) {
  const KEY = `db4a3ae686a3cf9655de72dc5716eec8`;
  const BASE_URL = `https://api.themoviedb.org/3/${endPoint}?api_key=${KEY}`;

  const response = await axios.get(BASE_URL);

  return response;
}
