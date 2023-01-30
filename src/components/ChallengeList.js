import React from 'react';
import ListItem from './Listitem';



// import { Link } from 'react-router-dom';

export default function ChallengeList({list}) {
  
  return (
    
    <div className='row challengelist my-auto mx-auto'>
    {list.map((item) => (
      <ListItem key={item.id} item={item} />
    ))}
  </div>
  )
}
     