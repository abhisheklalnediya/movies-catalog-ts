import axios from 'axios';

const get = pageNo => axios.get(`api/page${pageNo}.json`);

export default {
  movies: {
    get,
  },
};
