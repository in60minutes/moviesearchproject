import { useState } from 'react'
import axios from 'axios'

function App() {
  const [searchWord, setSearchWord] = useState('')
  const [moviesData, setMoviesData] = useState([])

  const searchMovies = async () => {
    // URL
    // METHOD
    // DATA

    try {
      let apiPath = `http://www.omdbapi.com/?apikey=c0a6198e&s=${searchWord}`
      let apiResponse = await axios.get(apiPath)
      setMoviesData([...apiResponse.data.Search])
    } catch (ex) {
      alert('Site is under maintance ...')
    }
  }
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-7'>
            <h3 className='text-danger'>Search Movie Name</h3>

            <div className='card mt-4 border-0 shadow-sm'>
              <div className='card-body'>
                <div>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Search Movies, Series'
                    onChange={(e) => setSearchWord(e.target.value)}
                  />
                </div>
                <div className='mt-4'>
                  <button
                    className='btn btn-primary'
                    onClick={(e) => searchMovies()}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* Result */}

            {moviesData.map((movies, index) => (
              <div className='card mt-3 border-0 shadow-sm' key={movies.imdbID}>
                <div className='row gap-0'>
                  <div className='col-md-2'>
                    <img
                      src={movies.Poster}
                      className='img-fluid rounded-start'
                      alt={movies.Title}
                    />
                  </div>
                  <div className='col-md-10'>
                    <a href={'view/' + movies.imdbID} target='_blank'>
                      <h5>{movies.Title}</h5>
                    </a>
                    <div>Year : {movies.Year}</div>
                    <div> Type : {movies.Type}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
