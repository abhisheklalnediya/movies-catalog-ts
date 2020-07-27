import api from '../api';
import events from './events';

const ACTIONS = {};

ACTIONS.fetch_movies = pageNo => ({
  type: events.FETCH_MOVIES,
  payload: () => new Promise((resolve, reject) => {
    api.movies.get(pageNo).then((resp) => {
      const page = parseInt(resp.data.page['page-num-requested'], 10);

      const results = parseInt(resp.data.page['total-content-items'], 10);
      const resultsPerPage = parseInt(resp.data.page['page-size-requested'], 10);

      const totalPages = Math.ceil(results / resultsPerPage);
      console.log(totalPages);
      resolve({
        movies: resp.data.page['content-items'].content,
        page,
        totalPages,
      });
    }, e => reject(e));
  }),
});

ACTIONS.search_movies = term => ({
  type: events.SEARCH_MOVIES,
  payload: term,
});

export default ACTIONS;
