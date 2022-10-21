import React from 'react';
import Featured from './Featured';
import Categories from './Categories';
import Listmovie from './Listmovie';
import request from '../request';

function Movie() {
  return (
      <div>
      <Featured api_link={request.fetchLatestMovie} />
        {Listmovie.map(va => (
        <Categories
          key={va.id}
          title={va.title}
          fetch_link = {va.fetchURL}
        />
      ))}
    </div>
  )
}

export default Movie;