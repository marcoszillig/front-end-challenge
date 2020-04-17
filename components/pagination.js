import { useContext } from "react";
import { MovieContext } from "../context/movieContext";

const Pagination = () => {
  const { moviesState, dispatch } = useContext(MovieContext);
  const { page, total_pages } = moviesState;
  return (
    <div className="movies__pagination">
      <button
        className="movies__pagination__prev-btn btn"
        onClick={() => {
          dispatch({
            type: "DECREASE_PAGE",
          });
        }}
        style={{opacity: page <= 1 ? "0.2" : "1", cursor: page <= 1 ? "not-allowed" : "pointer" }}
        disabled={page <= 1 ? true : false}
      >
        Anterior
      </button>
      <p className="movies__pagination__content">{`${page} de ${total_pages}`}</p>
      <button
        className="movies__pagination__next-btn btn"
        onClick={() => {
          dispatch({
            type: "INCREASE_PAGE",
          });
        }}
      >
        Proximo
      </button>
      <style jsx>{`
        .movies__pagination {
          display: flex;
          justify-content: center;
          padding: 24px 0;
        }
        .movies__pagination__content, .btn {
          font-family: "Poppins", sans-serif;
          font-size: 1.2rem;
          font-weight: 600;
          line-height: 1.5;
          color: #ddd;
        }
        .movies__pagination__content {
          margin: 0 16px;
        }
        .btn {
          background: #333;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Pagination;
