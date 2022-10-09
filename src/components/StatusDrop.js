import React, { useContext } from 'react';
import { ChallengeContext } from './ChallengeContext';
// import down from '../assets/icons/down-arrow.png';

const StatusDrop = () => {
    const {  setStatus, statuses } = useContext(ChallengeContext);
    const {  setLevel, levels } = useContext(ChallengeContext);
    // const [isOpen, setIsOpen] = useState(false);

    return (
        <>
           <form className="d-flex " role="search">
        <input className="form-control mx-auto me-2 searchi" type="search" placeholder="Search" aria-label="Search"/>
        {/* <button className="btn btn-light mx-auto searchb " type="submit">Filter  <span><img className='down mx-auto' src={down} alt=''/></span></button> */}
        
            <div className="btn-group">
            <button type="button" className=" searchb btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Filter
            </button>
            <ul className="dropdown-menu">
            <hr className="dropdown-divider mx-auto" style={{'width':'80%'}}/>
            <span className="dropdown-item">Status</span>
          {statuses.map((status, index)=>{
            return (
                <div className="form-check check">
            <input className="form-check-input" onClick={()=> setStatus(status)} key={index} type="checkbox" value="" id="flexCheckDefault"/>
            <label className="form-check-label" for="flexCheckDefault">
             {status}
            </label>
          </div>
            );
          })}
                <hr className="dropdown-divider mx-auto" style={{'width':'80%'}}/>
                <span className="dropdown-item">Level</span>
                {levels.map((level, index)=>{
            return (
                <div className="form-check check">
            <input className="form-check-input" onClick={()=> setLevel(level)} key={index} type="checkbox" value="" id="flexCheckDefault"/>
            <label className="form-check-label" for="flexCheckDefault">
             {level}
            </label>
          </div>
            );
          })}
                
            </ul>
</div>
    </form>
        </>
    );
};

export default StatusDrop;