import { useEffect, useState } from 'react'
import Search from './components/Search'
import Loader from './components/Loader';

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const App = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setErrorMessage('');
      try {
        const endpoint = search ? `${API_URL}/search/movie?query=${encodeURIComponent(search)}` : `${API_URL}/discover/movie?sort_by=popularity.desc`

        const response = await fetch(endpoint, {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${API_KEY}`
          }
        })
        const data = await response.json();
        setMovies(data.results);
        setLoading(false);
      } catch (error) {
        console.error(error)
        setErrorMessage('Something went wrong with the API');
      } finally {
        setLoading(false);
      }
    }
    fetchMovies()
  }, [search])

  return (
    <main>
      <div className='pattern'>
        <div className='wrapper'>
          <img src="/movie_motion.png" alt="logo" className='app-logo' />
          <header>
            <img src="/hero.png" alt="logo" className='' />
            <h1> Find <span className='text-gradient'>Movies </span> You'll Love</h1>
            <Search search={search} setSearch={setSearch} />
          </header>
          <section className='trending'>trending ....

          </section>
          <section className='all-movies'>
            <h2>All Movies</h2>
            {!loading ? <Loader/> :
              errorMessage ? <p>{errorMessage}</p> :
                (<ul>
                  {movies &&
                    movies.map((movie) => <li className='movie-card text-white' key={movie.id}>
                      {movie.title}
                    </li>)
                  }
                </ul>)
            }
          </section>

        </div>
      </div>
    </main>
  )
}

export default App

