import React from 'react';
import challenges from '../challenge.json';
import leveli from '../assets/icons/carbon_skill-level-basic.svg'

export default function Challenge() {
  return (
<>
{challenges && challenges.map(challenge =>{
  return(
    <div className="card challenge mx-auto  col-lg-4" style={{width: '20rem'}} key={challenge.id} >
    <img src={challenge.cimg} className="card-img-top" alt="..."/>
        <div className="card-body challenge-body">
           <p className={`card-text ${challenge.status === 'Active' ? 'statusa' : 'status'}`} style={{'backgroundColor': challenge.status === 'Past'?'#f4979f':challenge.status === 'Upcoming' ? '#f8daa3':'#b0f8b3'}}>{challenge.status}</p>
           <p className='level'><img src={leveli} alt='' /> <b>{challenge.level}</b></p>
           <h6 className="card-title"><strong>{challenge.title}</strong></h6>
           <p className="card-text">{challenge.timer}</p>   
            {challenge.day === false ? <div className='date'><h6>{challenge.date}</h6></div> :<div className="timer row" role="timer">
              <div className='col-4 box mx-auto'>
        
                <p id="day"><strong>{challenge.day}:</strong></p>
                <span className="text">Days</span>
        
              </div>
              <div className="col-4 box mx-auto">
                
                <p id="hour"><strong>{challenge.hour}:</strong></p>
                <span className="text">Hours</span>
                
              </div>
              <div className="col-4 box mx-auto">
              
                <p id="minute"><strong>{challenge.minutes}</strong></p>
                <span className="text">Minutes</span>
                
              </div>
            </div>}
                    <br/>
                    <a href="/"  className="btn btn-success"><img style={{width:'13px', margin:'0.1rem 1rem 0.1rem 0.1rem'}} src='assets\icons\checked.png' alt=''/>Participant Now</a>
         </div>
</div>
  )
}) 
}
</>
  )
}
