import React from 'react';

import './Stream.css';

function Stream({data}) {
  return (
    <li className='stream-container'>
      <h3 className='stream-title'>{data.name}</h3>
      <p className='stream-description'>{data.description}</p>
      <p className='stream-status'>{data.status}</p>
    </li>
  )
}

function StreamList({streams}) {
  const streamsArray = Object.keys(streams).map((i) => streams[i]);
  const streamList = streamsArray.map((stream) => <Stream data={stream} />);

  return (
    <ul>
      {streamList}
    </ul>
  )
}

export default StreamList;