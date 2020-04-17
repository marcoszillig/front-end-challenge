import Link from "next/link";
import { useContext } from "react";
import { MovieContext } from "../context/movieContext";

const Spotlight = () => {
  const { moviesState } = useContext(MovieContext);
  const { movies } = moviesState;
  return movies.length > 0 && (
    <div className="spotlight">
      <div className="spotlight__header">
        <h4 className="spotlight__header-subtitle">Destaque da Semana</h4>
        <h2 className="spotlight__header-title">
          {movies[0].title}
        </h2>
      </div>
      <div className="spotlight__content">
        <h2>{movies[0].title}</h2>
        <Link href={`/movie?title=${movies[0].title}`}>
          <a>
            <div className="spotlight__content-img">
              <img
                src={`https://image.tmdb.org/t/p/w500${
                  movies[0].poster_path
                }`}
                alt={movies[0].title}
              />
            </div>
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          .spotlight {
            display: grid;
            background-color: #000;
            grid-template-columns: 2fr 1fr;
            justify-items: end;
            margin-left: 30%;
            position: relative;
            grid-template-rows: 400px;
            margin-bottom: 8%;
            margin-top: 8%;
          }
          .spotlight__header {
            justify-self: flex-start;
            margin-left: 24px;
            align-self: center;
          }
          .spotlight__content {
            align-self: center;
          }
          .spotlight h1 {
            color: #fff;
          }

          .spotlight__content-img img {
            object-fit: contain;
            width: 100%;
            height: 500px

          }
          .spotlight__content h2 {
            color: #fff;
            font-family: "Poppins", sans-serif;
            font-weight: 600;
            font-size: 14rem;
            line-height: 1;
            position: absolute;
            left: -32%;
            opacity: 0.1;
            top: 50%;
            transform: translateY(-50%);
            margin: 0;
          }
          .spotlight__header-subtitle {
            color: #ddd;
            font-family: "Poppins", sans-serif;
            font-weight: 400;
            font-size: 2.5rem;
            line-height: 1.5;
            margin: 0;
          }
          .spotlight__header-title {
            font-family: "Poppins", sans-serif;
            color: #ddd;
            font-weight: 200;
            font-size: 5rem;
            margin: 0;
          }
          @media only screen and (max-width: 720px) {
            .spotlight {
              margin-left: 15%;
              grid-template-columns: 1fr 1fr;
            }
            .spotlight__content h2 {
              font-size: 4.5rem;
              left: -15%;
            }
            .spotlight__header-subtitle {
              font-size: 1rem;
            }
            .spotlight__header-title {
              font-size: 2rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Spotlight;
