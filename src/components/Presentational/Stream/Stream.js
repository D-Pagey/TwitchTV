import React from 'react';

import './Stream.css';

function Stream({name, status, url, description}) {
  return (
    <li className='stream'>
      <h3 className='stream-title'>{name}</h3>
      <a href={url} target='_blank' className='stream-link'>
      <p className={'stream-description-' + status}>{description}</p></a>
      <p className={'stream-' + status}>{status.charAt(0).toUpperCase()
         + status.slice(1)}</p>
    </li>
  )
}

function StreamList({streams}) {
  const streamsArray = Object.keys(streams).map((i) => streams[i]);
  const streamList = streamsArray.map((stream) => <Stream 
  key={stream.username} {...stream} />);

  return (
    <ul className='stream-list'>
      {streamList}
    </ul>
  )
}

export default StreamList;
