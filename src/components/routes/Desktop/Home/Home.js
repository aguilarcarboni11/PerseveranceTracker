import React from 'react'
import { Link } from 'react-router-dom'

import MarsMap from '../components/MarsMap';
import MostRecentPhoto from './components/MostRecentPhoto';

const Home = () => {
  return (
    <div className='homeContainer'>
      <div className='intro'>
        <h2 className='title'>Who is Perseverance?</h2> 
        <h3 className='subtitle'>Perseverance, or Perse, is a rover sent out by NASA to Mars. Similar to any other rover we have sent in the past, Perse roams around Mars completing his mission and recollecting data.</h3>
        <Link className='link' to="/aboutD">
          <h4 className='subtitle' href=''>Learn more.</h4>
        </Link>
        <MarsMap height={'50%'} width={'100%'}/>
      </div>
      <div className='recentPhoto'>
        <h2 className='captions'>Most recent photo</h2>
        <MostRecentPhoto /> 
      </div>
    </div>
  )
}

export default Home