import React from 'react';
import datas from '../data.json';

export default function Features() {
  return (
    <div className='container' id='features'>
      <h3><strong>Why Participate in <span style={{color: 'green'}}>AI Challanges?</span></strong></h3>
      <div className='row'>

     {datas && datas.map(data => {
      return(
        <div className='term feature col-lg-6' key={data.id}>
        <dt>
            <img className='fimg' src={data.imgUrl} alt='fimg'/> <br/>
            <h5 className='fname'><strong>{data.name}</strong></h5>
        </dt>
        <dd className='fdescription'>{data.description}</dd>
      </div> 
      )
     })}
      </div>
      </div>
  )
}
