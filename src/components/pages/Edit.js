import React, {useState} from 'react';
import { Data } from '../../data';
import { useParams } from 'react-router-dom';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import {Data as LData} from '../../data';



const Edit = () => {
    const [levels, setlevels] = useState([
        { id: 1, checked: false, label: 'Easy' },
        { id: 2, checked: false, label: 'Medium' },
        { id: 3, checked: false, label: 'Hard' },
      ]);

    const { id } = useParams();
  const challange = Data.find((data) => {
    return data.id === parseInt(id);
  });

  const [svalue, setSValue] = useState(dayjs(`${challange.startDate}`));
  const [evalue, setEValue] = useState(dayjs(`${challange.endDate}`));
  const [ivalue, setIValue] = useState('');
  
  function handleChange(e) {
    console.log(e.target.files);
    setIValue(URL.createObjectURL(e.target.files[0]));
}

  return (
      <>
      
          <div className='editpage'>
              <h4>Challenge Details</h4>
          </div>
          <form className='edit-form'>
              <div className="form-group edit-label">
                  <label for="formGroupExampleInput">Challenge Name</label>
                  <input type="text" className="form-control edit-label" id="formGroupExampleInput" value={challange.title} placeholder="Example input" />
              </div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
              <div className="form-group edit-label">
                  <label className='edit-label'  for="formGroupExampleInput2">Start Date</label><br/>
                  {/* <input type="datetime-local" className="form-control edit-label" id="formGroupExampleInput2" value="16th May'22 09:00 PM"  /> */}
                  <DesktopDateTimePicker
                      
                      defaultValue={challange.startDate}
                      onChange={(newValue) => {
                          setSValue(newValue);
                      }}
                      value={svalue}
                      renderInput={(params) => <TextField {...params} />}
                      className='form-control edit-label'
                  />
              </div>
              <div className="form-group edit-label">
                  <label className='edit-label' for="formGroupExampleInput2">End Date</label>
                  {/* <input type="datetime-local" className="form-control" id="formGroupExampleInput2" defaultValue={challange.endDate}  placeholder={challange.endDate} /> */}
                  <DesktopDateTimePicker
                      
                      defaultValue={challange.endDate}
                      onChange={(newValue) => {
                          setEValue(newValue);
                      }}
                      value={evalue}
                      renderInput={(params) => <TextField {...params} />}
                      className='form-control edit-label'
                  />
              </div>
              </LocalizationProvider>
              <div className="form-group edit-label">
                  <label className='edit-label' for="exampleFormControlTextarea1">Description</label>
                  <textarea className="form-control" defaultValue={challange.description} id="exampleFormControlTextarea1" rows="6"></textarea>
              </div>
             
              
              <div className="form-group edit-label wrapper">
              <img className='previmg' alt='' src={ivalue? ivalue:challange.pimg} />
              <label className='labelImg' for="inputTag">Change Image</label>
              <input
                        type='file'
                        onChange={handleChange}
                        className='myFile'
                        id='inputTag'
                 />      
              </div>
              
              <div className="form-group edit-label">
              <div><label className='levelType' for="formGroupExampleInput">Level Type</label></div>
                  <div className="btn-group " role="group">
                      <button type="button" className="btn btn-light btn-lg dropdown-toggle lbtn" data-bs-toggle="dropdown" aria-expanded="false">
                         {challange.level}
                      </button>
                      <ul class="dropdown-menu">
                          {levels.map((item) => (
                            <li><a className="dropdown-item" href="#">{item.label}</a></li>
                          ))}        
                      </ul>
                  </div>
              </div>
              <div className="form-group edit-label">
                  <button type='button' className='btn btn-success lbtn btn-lg'>Save Changes</button>
              </div>
          </form>
         
             
              

              
          
      </>
  )
}

export default Edit
