import axios from 'axios';

const get = pageNo => axios.get(`/movies-catalog-ts/api/page${pageNo}.json`);

export default {
  movies: {
    get,
  },
};
