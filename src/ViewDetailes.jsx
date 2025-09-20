import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ViewDetailes = () => {
  const { imdbID } = useParams()

  const [data, setData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        let apiPath = `http://www.omdbapi.com/?apikey=c0a6198e&i=${imdbID}`
        console.log(apiPath)
        let apiResponse = await axios.get(apiPath)
        console.log(apiResponse)
        setData({ ...apiResponse.data })
      } catch (error) {
        setData(null)
        alert(`Unable to process your request ...`)
      }
    }
    getData()
  }, [])
  return (
    <div className='container'>
      <div className='row justify-content-center mt-5'>
        {data != null && (
          <div className='row'>
            <div className='col-md-4'>
              <img
                src={data.Poster}
                alt={data.Title}
                className='img-fluid rounded shadow'
              />
            </div>
            <div className='col-md-8'>
              <h2>
                {data.Title} - {data.Year}
              </h2>
              <p>{data.Plot}</p>
              <p>
                <strong>Genre : </strong>
                {data.Genre}
              </p>
              <p>
                <strong>Writer : </strong>
                {data.Writer}
              </p>
              <p>
                <strong>Actors : </strong>
                {data.Actors}
              </p>
              <p>
                <strong>Awards : </strong>
                {data.Awards}
              </p>
              <p>
                <strong>IMDB Rating : </strong>
                {data.imdbRating}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ViewDetailes
