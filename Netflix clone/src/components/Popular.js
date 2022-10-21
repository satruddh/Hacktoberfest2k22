import React from 'react';
import Featured from './Featured';
import Categories from './Categories';
import Listpop from './Listpop';
import request from '../request';

function Popular() {
  return (
      <div>
      <Featured api_link={request.fetchPopularMovie} />
        {Listpop.map(va => (
        <Categories
          key={va.id}
          title={va.title}
          fetch_link = {va.fetchURL}
        />
      ))}
    </div>
  )
}

export default Popular;