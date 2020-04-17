import Link from "next/link";
import { useContext } from "react";
import { MovieContext } from "../context/movieContext";

const MovieLink = () => {
  const { moviesState } = useContext(MovieContext);
  const { movies } = moviesState;

  return (
    <ul className="movie-list">
      {movies.map((movie) => (
      <li className="movie-list__item" key={movie.id}>
        <Link href={`/movie?title=${movie.title}`}>
          <a>
            <div className="movie-list__img">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <h3 className="movie-list__item-title">{movie.title}</h3>
          </a>
        </Link>
      </li>
      ))}
        <style jsx>{`
          .movie-list {
            display: flex;
            flex-wrap: wrap;
            list-style: none;
            padding: 0;
            margin: 0 auto;
            width: 80%;
          }
          .movie-list__item {
            padding: 24px;
            flex-basis: 25%;
          }
          .movie-list__item a {
            text-decoration: none;
          }
          .movie-list__img {
            width: 100%;
            margin: 0 auto;
          }
          .movie-list__img img {
            object-fit: contain;
            width: 100%;
          }
          .movie-list__item-title {
            font-family: "Poppins", sans-serif;
            font-weight: 400;
            font-size: 1.5rem;
            line-height: 1.5;
            color: #ddd;
            margin: 0;
          }
          @media only screen and (max-width: 720px) {
            .movie-list__item {
              padding: 16px;
              flex-basis: 100%;
            }
          }
        `}</style>
    </ul>
  );
};

export default MovieLink;
