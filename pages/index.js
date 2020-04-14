import Layout from "../components/Layout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const MovieLink = (props) => (
  <li key={props.key}>
    <Link href={`/movie?title=${props.title}`}>
      <a>
        {props.title}
        <img src={`https://image.tmdb.org/t/p/w500${props.image}`} alt="" />
      </a>
    </Link>
  </li>
);

const Home = (props) => (
  <Layout>
    <main>
      <div className="spotlight">
        <div className="spotlight__header">
          <h4 className="spotlight__header-subtitle">Destaque da Semana</h4>
          <h2 className="spotlight__header-title">{props.movies[0].title}</h2>
        </div>
        <div className="spotlight__content">
          <h2>{props.movies[0].title}</h2>
          <div className="spotlight__content-img">
            <img
              src={`https://image.tmdb.org/t/p/w500${props.movies[0].poster_path}`}
              alt=""
            />
          </div>
        </div>
      </div>
      <ul>
        {props.movies.map((movie) => (
          <MovieLink
            key={movie.id}
            title={movie.title}
            image={movie.poster_path}
          />
        ))}
      </ul>
    </main>
    <style jsx>{`
      body {
        margin: 0;
        box-sizing: border-box;
      }
      .spotlight {
        display: grid;
        background-color: #000;
        grid-template-columns: 2fr 1fr;
        justify-items: end;
        margin-left: 30%;
        position: relative;
        grid-template-rows: 600px;
        margin-bottom: 120px;
      }
      .spotlight__header {
        justify-self: flex-start;
        margin-left: 24px;
        align-self: center;
      }
      .spotlight__content {
        position: relative;
        align-self: center;
      }
      .spotlight h1 {
        color: #fff;
      }
      
      .spotlight__content-img img {
        object-fit: cover;
        width: 100%;
      }
      .spotlight__content h2 {
        color: #fff;
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        font-size: 14rem;
        line-height: 1;
        position: absolute;
        left: -250%;
        opacity: 0.1;
       
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
      ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 16px;
        grid-template-rows: auto;
        justify-items: center;
      }
      ul li img {
        width: 200px;
      }
    `}</style>
  </Layout>
);
Home.getInitialProps = async function () {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=4cdf98dae1ad5192544b610b08d033c5"
  );
  const data = await res.json();

  console.log(data.results);

  return {
    movies: data.results.map((entry) => entry),
  };
};
export default Home;
