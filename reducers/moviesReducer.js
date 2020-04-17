export const initialState = {
  movies: [],
  page: 0,
};

export const moviesReducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        movies: action.movies,
        page: action.page,
      };
    case "INCREASE_PAGE":
      return {
        ...state,
        page: state.page + 1,
      };
    case "DECREASE_PAGE":
      return {
        ...state,
        page: (state.page > 0) ? ( state.page - 1) : 0
      };
    default:
      return state;
  }
};
