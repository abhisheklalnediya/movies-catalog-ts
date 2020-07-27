import events from '../actions/events';

const initialState = {
  movies: [],
  searchTerm: '',
  fetching: false,
  page: 0,
  totalPages: null,
  searchResults: [],
};
function search(movies, term) {
  return movies.filter(m => m.name.search(new RegExp(term, 'i')) !== -1);
}

export default function reducer(state = initialState, action) {
  let movies = [];
  switch (action.type) {
    case `${events.FETCH_MOVIES}_PENDING`:
      return {
        ...state,
        fetching: true,
      };
    case `${events.FETCH_MOVIES}_FULFILLED`:
      movies = [...state.movies, ...action.payload.movies.map(x => ({
        ...x,
      }))];
      return {
        ...state,
        movies,
        page: action.payload.page,
        totalPages: action.payload.totalPages,
        fetching: false,
        searchResults: search(movies, state.searchTerm),
      };
    case `${events.FETCH_MOVIES}_REJECTED`:
      return {
        ...state,
        fetching: null,
      };
    case events.SEARCH_MOVIES:
      return {
        ...state,
        searchTerm: action.payload,
        searchResults: search(state.movies, action.payload),
      };
    default:
      return state;
  }
}
