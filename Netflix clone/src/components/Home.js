import React from 'react';
import Featured from './Featured';
import Categories from './Categories';
import Listhome from './Listhome';
import request from '../request';

function Home() {
  return (
      <div>
        <Featured api_link={request.fetchTrending} />
        {Listhome.map(va => (
        <Categories
          key={va.id}
          title={va.title}
          fetch_link = {va.fetchURL}
        />
      ))}
    </div>
  )
}

export default Home;