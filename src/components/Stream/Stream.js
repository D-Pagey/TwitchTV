import React from 'react';

import './Stream.css';

function Stream({data}) {
  return (
    <li className='stream'>
      <h3 className='stream-title'>{data.name}</h3>
      <a href={data.url} target='_blank' className='stream-link'>
      <p className={'stream-description-' + data.status}>{data.description}</p></a>
      <p className={'stream-' + data.status}>{data.status.charAt(0).toUpperCase()
         + data.status.slice(1)}</p>
    </li>
  )
}

function StreamList({streams}) {
  const streamsArray = Object.keys(streams).map((i) => streams[i]);
  const streamList = streamsArray.map((stream) => <Stream data={stream} />);

  return (
    <ul className='stream-list'>
      {streamList}
    </ul>
  )
}

export default StreamList;