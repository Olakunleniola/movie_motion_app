import { useEffect, useState } from 'react'
import Search from './components/Search'
import Loader from './components/Loader';
import MovieCard from './components/moviecard';
import { useDebounce } from 'use-debounce';
import { getTrendingMovies, updateSearchCount } from './appwrite';

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const App = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({type:"", message:""});
  const [debouncedSearch] = useDebounce(search, 1000);
  const [trendingMovies, setTrendingMovies] = useState([])
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setMessage({type:"", message:""});
      try {
        const endpoint = debouncedSearch ? `${API_URL}/search/movie?query=${encodeURIComponent(debouncedSearch)}` : `${API_URL}/discover/movie?sort_by=popularity.desc`

        const response = await fetch(endpoint, {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${API_KEY}`
          }
        })
        const data = await response.json() || [];
        if (!data.results.length > 0) {
          setMessage({type: "info", message: `No results found for "${debouncedSearch}"`})
        }

        if (debouncedSearch && data.results.length > 0) {
          updateSearchCount(debouncedSearch, data.results[0])
        }
        setMovies(data.results);
      } catch (error) {
        console.error(error)
        setMessage({type: "error", message: "Something went wrong. Try Again Later"});
      } finally {
        setLoading(false);
      }
    }
    fetchMovies()
  }, [debouncedSearch])

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const result = await getTrendingMovies()
        setTrendingMovies(result)
      } catch (error) {
        console.log(error)
      }
    }
    fetchTrendingMovies()
  }, [])

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
          <section className='trending'>
            {
              trendingMovies && (
                <ul>
                  {
                    trendingMovies.map((movie, index) => <li key={movie.$id}>
                      <p>{index + 1}</p>
                      <img src={movie.poster_url} alt="trending" />
                    </li>)
                  }
                </ul>
              )
            }
          </section>
          <section className='all-movies'>
            <h2>All Movies</h2>
            {loading ? <Loader /> :
              message.type === "error" ? <p className='text-red-500'>{message.message}</p> :
                message.type === "info" ? <p className='text-blue-500'>{message.message}</p> :
                (<ul>
                  {movies &&
                    movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
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

