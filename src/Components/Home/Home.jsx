import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Home() {

  const baseURL = 'https://image.tmdb.org/t/p/original';

  let [ trendingMovies, setTrendingMovies ] = useState( [] );
  let [ trendingTvShows, setTrendingTvShows ] = useState( [] );
  let [ trendingPeople, setTrendingPeople ] = useState( [] );

  async function getTrendingItems( type, callBack ) {
    let { data } = await axios.get( `https://api.themoviedb.org/3/trending/${ type }/day?api_key=4b619c037478d1113b15cffe100789c6` );
    callBack( data.results );
  }

  useEffect( () => {
    getTrendingItems( 'movies', setTrendingMovies );
    getTrendingItems( 'tv', setTrendingTvShows );
    getTrendingItems( 'person', setTrendingPeople );
  }, [] );

  return (
    <>
      <div className='row mt-5 pt-5'>

        <div className="col-md-4">
          <div className="titleSec fs-4">
            <hr className='w-50' />
            <h3 className='text-capitalize'>trending <br /> movies <br /> to watch now</h3>
            <p className="text-muted my-3">Most watched movies by days</p>
            <hr className='w-100' />
          </div>
        </div>

        { trendingMovies.map( ( oneTrending, index ) =>
          <div className="col-md-2 my-3" key={ index }>
            <div className="Item position-relative">
              <div className="vote bg-info position-absolute end-0 top-0">
                <p className='text-white fw-bold px-2 pt-2'>{ oneTrending.vote_average }</p>
              </div>
              <img src={ baseURL + oneTrending.poster_path } alt="" className='w-100' />
              <h5 className='my-2'>{ oneTrending.title }</h5>
            </div>
          </div>
        ) }
      </div>

      <div className='row mt-5'>
        <div className="col-md-4">
          <div className="titleSec fs-4">
            <hr className='w-50' />
            <h3 className='text-capitalize'>trending <br /> tv Shows <br /> to watch now</h3>
            <p className="text-muted my-3">Most watched Tv shows by days</p>
            <hr className='w-100' />
          </div>
        </div>

        { trendingTvShows.map( ( oneTrending, index ) =>
          <div className="col-md-2 my-3" key={ index }>
            <div className="Item position-relative">
              <div className="vote bg-info position-absolute end-0 top-0">
                <p className='text-white fw-bold px-2 pt-2'>{ oneTrending.vote_average }</p>
              </div>
              <img src={ baseURL + oneTrending.poster_path } alt="" className='w-100' />
              <h5 className='my-2'>{ oneTrending.name }</h5>
            </div>
          </div>
        ) }
      </div>

      <div className='row mt-5'>
        <div className="col-md-4">
          <div className="titleSec fs-4">
            <hr className='w-50' />
            <h3 className='text-capitalize'>trending <br /> people <br /> to watch now</h3>
            <p className="text-muted my-3">Most watched people by days</p>
            <hr className='w-100' />
          </div>
        </div>

        { trendingPeople.map( ( oneTrending, index ) =>
          <div className="col-md-2 my-3" key={ index }>
            <div className="Item">
              <img src={ baseURL + oneTrending.profile_path } alt="" className='w-100' />
              <h5 className='my-2'>{ oneTrending.name }</h5>
            </div>
          </div>
        ) }
      </div>


    </>
  )
}
