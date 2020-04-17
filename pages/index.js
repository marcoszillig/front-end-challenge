import Layout from "../components/Layout";
import MovieLink from "../components/movies";
import MovieContextProvider from "../context/movieContext";
import Spotlight from "../components/spotlight";
import Filter from "../components/filter";
import Pagination from "../components/pagination";

const Home = () => (
  <Layout>
    <MovieContextProvider>
      <main>
        <Spotlight />
        <div className="movies-container">
          <h3 className="movies-container__title">
            Os filmes mais populares da semana
          </h3>
          <Filter />
          <hr />
          <Pagination />
          <MovieLink />
        </div>
      </main>
      <style jsx>{`
        body {
          margin: 0;
          box-sizing: border-box;
        }
        .movies-container {
          max-width: 80%;
          margin: 0 auto;
        }
        .movies-container__title {
          color: #ddd;
          font-family: "Poppins", sans-serif;
          font-weight: 400;
          font-size: 2.5rem;
          line-height: 1.5;
          margin: 0 auto 32px;
          text-align: center;
        }
        @media only screen and (max-width: 720px) {
          .movies-container {
            margin-top: 64px;
          }
          .movies-container__title {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </MovieContextProvider>
  </Layout>
);

export default Home;
