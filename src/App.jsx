import { useState } from 'react'

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
        </div>
      </div>
    </main>
  )
}

export default App

