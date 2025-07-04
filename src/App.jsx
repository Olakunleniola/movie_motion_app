import { useState } from 'react'
import Search from './components/Search'

const App = () => {
  const [search, setSearch] = useState('')
  return (
    <main>
      <div className='pattern'>
        <div className='wrapper'>
          <img src="/movie_motion.png" alt="logo" className='app-logo' />
          <header>
            <img src="/hero.png" alt="logo" className='' />
            <h1> Find <span className='text-gradient'>Movies </span> You'll Love</h1>
          </header>
          <div className='trending'>trending .... </div>
          <Search search={search} setSearch={setSearch} />
          <div className='all-movies text-white'>
            {search}
          </div>
        </div>
      </div>
    </main>
  )
}

export default App

