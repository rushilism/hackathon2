import React,{ useState} from 'react';
// import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import TextField from '@mui/material/TextField';
// import dayjs from 'dayjs';
// import { useEffect } from 'react';
// import {ChallangeContext} from '../context/ChallangeContext';
// import {MDBValidation, MDBInput, MDBBtn} from 'mdb-react-ui-kit';
// pe6la9aa
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';


const initialState = {
    title: "",
    description: "",
    level:"",
    imageUrl:""
}
const options = ["Easy", "Medium", "Hard"];

const CreateChallange = () => {

    const [formValue, setFormValue] = useState(initialState);
    const [levelErrMsg, setLevelErrMsg] = useState(null);
    const {title, description, level, imageUrl} = formValue;

    // const getDate = () => {
    //     let today = new Date();
    //     let dd = String(today.getDate()).padStart(2,"0");
    //     let mm = String(today.getMonth() + 1).padStart(2, "0");
    //     let yyyy = today.getFullYear();
    // }
    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(!level) {
            setLevelErrMsg("Please select a level");
        }
        if(title && description && imageUrl && level) {
            // const currentDate = getDate();
            // const updatedChallangeData = {...formValue, date: currentDate}
            const response = await axios.post("http://localhost:5000/challanges", formValue);
            if(response.status === 201){
                toast.success("Challange Created Succsesfully");
            }else {
                toast.error("something went wrong");
            }
            setFormValue({title:"", description:"", level:"", imageUrl:""});
            navigate("/")
        }
    };

    const onInputChange = (e)=> {
        let {name, value} = e.target;
        setFormValue({...formValue, [name]: value});
    };

    const onUploadImage = (file) => {
        
    //    console.log("file", file);
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "jmhpzibc");
        axios.post("https://api.cloudinary.com/v1_1/dc18xcjlq/image/upload", formData).then((resp)=> {
            toast.info("Image Uploaded Succesfully");
            setFormValue({...formValue, imageUrl: resp.data.url});
        })
        .catch((err)=>{
            toast.error("something went weong");
        });
    };

    const levelChange= (e) => {
        setLevelErrMsg(null);
        setFormValue({...formValue, level: e.target.value});
    }


      // useEffect(()=>{
      //   console.log(challange);
      // },[challange])
      
    //   const createChallange=(event,property)=>{
    //     setChallange({...challange,[property]:event.target.value});
    //   }
      
      

    // const [levels] = useState([
    //     { id: 1, checked: false, label: 'Easy' },
    //     { id: 2, checked: false, label: 'Medium' },
    //     { id: 3, checked: false, label: 'Hard' },
    //   ]);

      

    // const [svalue, setSValue] = useState(dayjs(''));
    // const [evalue, setEValue] = useState(dayjs(''));
    // const [ivalue, setIValue] = useState(false);

    // function handleChange(e) {
    //     console.log(e.target.files);
    //     setIValue(URL.createObjectURL(e.target.files[0]));
    // }

    // function submitChallange(event) {
    //   props.onAdd(challange);
    //   setChallange({
    //     title: "",
    //     description: "",
    //     level:""
    //   });
    //   event.preventDefault();
    // }
   
   
   
  return (
    <>
      
    <div className='editpage'>
        <h4>Challenge Details</h4>
    </div>
    <form className='edit-form' noValidate onSubmit={handleSubmit} >
        <div className="form-group edit-label">
            <label for="formGroupExampleInput">Challenge Name</label>
            {/* {JSON.stringify(challange)} */}
            <input
            name='title'
            type="text"
            // onChange={(e)=>createChallange(e,'title')}
            onChange={onInputChange}
            className="form-control edit-label" id="formGroupExampleInput" 
            value={title || ''}
            required
            validation="Please provide a title"
            invalid
             />
        </div>
        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="form-group edit-label">
            <label className='edit-label'  for="formGroupExampleInput2">Start Date</label><br/>
          
            <DesktopDateTimePicker
                
               
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
         
            <DesktopDateTimePicker
                
                
                onChange={(newValue) => {
                    setEValue(newValue);
                }}
                value={evalue}
                renderInput={(params) => <TextField {...params} />}
                className='form-control edit-label'
            />
        </div>
        </LocalizationProvider> */}
        <div className="form-group edit-label">
            <label className='edit-label' for="exampleFormControlTextarea1">Description</label>
            <input
                className="form-control"
                // onChange={(e)=>createChallange(e,'description')} 
                value={description || ''}
                id="exampleFormControlTextarea1" rows="6"
                onChange={onInputChange}
                name='description'
                type="text"
                required
                validation="Please provide a title"
                invalid
                ></input>
        </div>
       
        <div className="form-group edit-label wrapperc">
        <div><label className='edit-label'>Image</label></div>
             {/* { ivalue && <img className='previmg' alt='' src={ivalue} />} */}
              {/* <label className='labelImg' for="inputTag">Upload</label> */}
              <input
                        type='file'
                        // onChange={handleChange}
                        className='myFile'
                        // id='inputTag'
                        required
                        onChange={(e) => onUploadImage(e.target.files[0])}
                        validation='provide img'
                        invalid
                 />      
              </div>
        
        
        <div className="form-group edit-label">
                <select className='levelType' onChange={levelChange} value={level}>
                    <option>select level</option>
                    {options.map((option, index)=> (
                        <option value={option || ''} key={index}>{option}</option>
                    ))}
                </select>
                {levelErrMsg && (
                    <div className='levelErrorMsg'>{levelErrMsg}</div>
                )}
                {/* <div><label className='levelType'  for="formGroupExampleInput">Level Type</label></div>
            <div className="btn-group " role="group">
                <button type="button" className="btn btn-light btn-lg dropdown-toggle lbtn" data-bs-toggle="dropdown" aria-expanded="false">
                  {challange.level? challange.level:"Easy"}
                </button>
                <ul className="dropdown-menu">
                    {levels.map((item) => (
                      <li><button  key={item.id} value={item.label} onClick={(e)=>createChallange(e,'level')} className="dropdown-item">{item.label}</button></li>
                    ))}        
                </ul>
            </div> */}
        </div>
        <div className="form-group edit-label">
            <button  type='submit'  className='btn btn-success lbtn btn-lg'>Create Challange</button>
            {/* onClick={()=> navigate('/')} */}
        </div>
    </form>
   
       
        

        
    
</>
  )
}

export default CreateChallange
