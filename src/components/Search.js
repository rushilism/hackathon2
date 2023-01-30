import React from 'react';
import CheckboxProton from './CheckboxProton';
import Status from './Status';




export default function Search({levels, changeChecked, value, changeInput, statChecked, statuses}) {
  
  return (
    <div id='bottom'>
      <div className='search'>
        <h4>Explore Challanges</h4>
        <form className="d-flex " role="search">
        <input className="form-control mx-auto me-2 searchi" type="search" placeholder="Search" aria-label="Search"
        value={value}
        onChange={changeInput}/>
          <div className='input-group'>
          <div className="btn-group">
          <button type="button" className=" searchb btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Filter
            </button>
            <ul className="dropdown-menu">
            <hr className="dropdown-divider mx-auto" style={{'width':'80%'}}/>
            <span className="dropdown-item">Level</span>
          
                <div className="form-check check">
                      
                  {levels.map((level) => (
                    <CheckboxProton
                      key={level.id}
                      level={level}
                      changeChecked={changeChecked}
                    />
                  ))}
            
          </div>
            
                <hr className="dropdown-divider mx-auto" style={{'width':'80%'}}/>
                <span className="dropdown-item">Status</span>
                
                <div className="form-check check">
                {statuses.map((status) => (
              <Status
                key={status.id}
                status={status}
                statChecked={statChecked}
              />
            ))}
           
          </div>
           
                
            </ul>
            
            
          </div>
        </div>
        </form>
      </div>
    </div>
  )
}
