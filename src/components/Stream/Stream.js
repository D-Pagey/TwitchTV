import React from 'react';

import './Stream.css';

function Stream({data}) {

  console.log(data);

  return (

    <li className='stream-container'>
    <h3 className='stream-title'>{data.name}</h3>
       <p className='stream-description'>{data.description}</p>
        <p className='stream-status'>{data.status}</p>
     </li>

    // <li className='stream-container'>
    //     <h3 className='stream-title'>{data.streams.freecodecamp.name}</h3>
    //   <p className='stream-description'>{data.streams.freecodecamp.description}</p>
    //    <p className='stream-status'>{data.streams.freecodecamp.status}</p>
    // </li>
  )
}

function StreamList({streams}) {

  console.log(streams.freecodecamp);

  return (
    <ul>
      <Stream data={streams.freecodecamp}/>
      <Stream data={streams.edberg}/>     
    </ul>
  )
}

export default StreamList;