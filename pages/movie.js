import { useRouter } from "next/router";
import Layout from "../components/Layout";

const Movie = () => {
  const router = useRouter();

  return (
    <Layout>
      <div className="movie-container">
        <h1 className="movie-title">{router.query.title}</h1>
        <p className="movie-content"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, dolorem enim. Doloremque ex vel molestiae, labore illo, temporibus a, omnis magni consectetur ullam id! Nulla eius error ipsum ut quisquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum corrupti deserunt facilis fuga autem maxime, eum temporibus commodi magnam quo saepe quasi laboriosam odio atque libero doloribus maiores asperiores pariatur.</p>
      </div>
      <style jsx>{`
        .movie-container {
          max-width: 80%;
          margin: 0 auto;
        }
        .movie-title {
          font-family: "Poppins", sans-serif;
          color: #ddd;
          font-weight: 700;
          font-size: 5rem;
        }
        .movie-content {
          font-family: "Poppins", sans-serif;
          color: #fff;
          font-weight: 400;
          font-size: 1rem;
        }
      `}</style>
    </Layout>
  );
};

export default Movie;
