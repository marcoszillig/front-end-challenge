import { useRouter } from 'next/router';
import Layout from '../components/Layout'

const Movie = () => {
  const router = useRouter()

  return (
    <Layout>
      <h1>{router.query.title}</h1>
      <p>This is the movie content</p>
    </Layout>
  )
}

export default Movie;