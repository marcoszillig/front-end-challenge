export const initialState = {
  movies: [],
  total_pages: "",
  page: 1,
  genres: [],
  genreID: "",
};

export const moviesReducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        movies: action.movies,
        total_pages: action.total_pages,
        page: action.page,
      };
    case "GET_GENRES":
      return {
        ...state,
        genres: action.genres,
      };
    case "SET_GENRE":
      return {
        ...state,
        genreID: action.genreID,
      };
    case "INCREASE_PAGE":
      return {
        ...state,
        page: state.page + 1,
      };
    case "DECREASE_PAGE":
      return {
        ...state,
        page: state.page > 0 ? state.page - 1 : 0,
      };
    default:
      return state;
  }
};
