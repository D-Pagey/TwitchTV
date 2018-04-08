import React from 'react';

import './Stream.css';
import rawData from './RawData.js';

function Stream() {

  let streamers;

    streamers = rawData().map((element) => (
      <div className='stream-container' key={element.key}>
      <h3 className='stream-title'>{element.name}</h3>
      <p className='stream-description'>{element.description}</p>
      <p className='stream-status'>{element.status}</p>
    </div>
    ))

    return <main>{streamers}</main>;
}

export default Stream;