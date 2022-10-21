import React from 'react';
import Featured from './Featured';
import Categories from './Categories';
import Listtv from './Listtv';
import request from '../request';

function Tv() {
  return (
      <div>
      <Featured api_link={request.fetchLatestTv} />
        {Listtv.map(va => (
        <Categories
          key={va.id}
          title={va.title}
          fetch_link = {va.fetchURL}
        />
      ))}
    </div>
  )
}

export default Tv;