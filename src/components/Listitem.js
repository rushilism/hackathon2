import React from 'react';
import leveli from '../assets/icons/carbon_skill-level-basic.svg';
import { Link } from "react-router-dom";

const ListItem = ({
  item: { pimg, status, level, title, timer, date, day, hour, minutes, id },
}) => (
    <div className="card challenge  mx-auto my-2 col-lg-4" style={{ width: '20rem' }}  >
    <img src={pimg} className="card-img-top" alt="" />
    <div className="card-body -body">
      <p className={`card-text ${status === 'Active' ? 'statusa' : 'status'}`} style={{ 'backgroundColor': status === 'Past' ? '#f4979f' : status === 'Upcoming' ? '#f8daa3' : '#b0f8b3' }}>{status}</p>
      <p className='level'><img src={leveli} alt='' /> <b>{level}</b></p>
      <h6 className="card-title"><strong>{title}</strong></h6>
      <p className="card-text">{timer}</p>
      {day === false ? <div className='date'><h6>{date}</h6></div> : <div className="timer row" role="timer">
        <div className='col-4 box mx-auto'>

          <p id="day"><strong>{day}:</strong></p>
          <span className="text">Days</span>

        </div>
        <div className="col-4 box mx-auto">

          <p id="hour"><strong>{hour}:</strong></p>
          <span className="text">Hours</span>

        </div>
        <div className="col-4 box mx-auto">

          <p id="minute"><strong>{minutes}</strong></p>
          <span className="text">Minutes</span>

        </div>
      </div>}
      <br />
      <Link to={`/details/${id}`} className="btn btn-success"><img style={{ width: '13px', margin: '0.1rem' }} src='assets\icons\checkedpng' alt='' />Participant Now</Link>
    </div>
  </div>
);

export default ListItem;