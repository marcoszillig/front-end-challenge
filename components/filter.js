import { useContext } from "react";
import { MovieContext } from "../context/movieContext";

const Filter = () => {
  const { moviesState, dispatch } = useContext(MovieContext);
  const { genres, genreID } = moviesState;

  return (
    <div className="movie__genres">
      <h3
        className="movie__genres-title"
        onClick={(e) => {
          e.target.nextSibling.classList.toggle("active");
        }}
      >
        Filtros{" "}
      </h3>
      <div
        className="movie__genres__wrapper"
        onClick={(e) => {
          e.currentTarget.classList.remove("active");
        }}
      >
        {genreID && (
          <p
            className="movie__genres__clean-filter-btn"
            onClick={() => {
              dispatch({
                type: "SET_GENRE",
                genreID: "",
              });
            }}
          >
            Remover Filtros
          </p>
        )}

        {genres.map((genre) => (
          <div className="movie__genres__item" key={genre.id}>
            <input
              className="movie__genres__item-radio"
              type="radio"
              value={genre.id}
              id={genre.id}
              name="genres"
              onChange={(e) => {
                dispatch({
                  type: "SET_GENRE",
                  genreID: parseInt(e.target.value),
                });
              }}
              checked={genreID && parseInt(genre.id) === genreID ? true : false}
            />
            <label className="movie__genres__item-label" htmlFor={genre.id}>
              {genre.name}
            </label>
          </div>
        ))}
      </div>
      <style jsx>{`
        .movie__genres {
          margin: 16px auto;
        }
        .movie__genres__wrapper {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        .movie__genres__clean-filter-btn {
          font-family: "Poppins", sans-serif;
            font-size: 1rem;
            font-weight: 700;
            color: #eee;
            flex-basis: 100%;

        }
        .movie__genres-title {
          font-family: "Poppins", sans-serif;
          font-size: 1.2rem;
          font-weight: 700;
          line-height: 1.5;
          color: #ddd;
        }
        .movie__genres__item {
          padding: 16px;
        }
        .movie__genres__item-radio {
          display: none;
        }
        .movie__genres__item-radio:checked + .movie__genres__item-label {
          color: #cc0000;
        }
        .movie__genres__item-label {
          font-family: "Poppins", sans-serif;
          font-size: 1rem;
          color: #eee;
          padding: 8px;
          cursor: pointer;
        }
        @media only screen and (max-width: 720px) {
          .movie__genres__clean-filter-btn {
            
            text-align: center;
          }
          .movie__genres__wrapper {
            height: 0;
            overflow: hidden;
            transition: height 0.4s ease-in-out;
            text
          }
          .movie__genres__wrapper.active {
            height: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Filter;
