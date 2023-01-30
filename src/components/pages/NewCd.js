import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import Clock from '../../assets/icons/clock.png';
import '../../App.css';
import leveli from '../../assets/icons/carbon_skill-level-basic.svg';
import {ChallangeContext} from '../context/ChallangeContext';

const NewCd = () => {

    const [challange] = useContext(ChallangeContext);

  return (
    <>
    <div className='challengeDetails'>
      <p className='eventtime'><img alt='' className='clock' src={Clock}/>Starts on 17th jun'22 09:00 PM (Indian Standard Time)</p>
      <h2 className='headingD'>{challange.title}</h2>
      <p className='detailP'>{challange.description}</p>
      <p className='detailL'><img className='leveli' alt='' src={leveli} /> <b className='levelit' >{challange.level}</b></p>
    </div>
    <div className='overview navbar justify-content-between'>
        <p className='overviewP navbar-brand'><b>Overview</b></p>
        <form className='form-inline'>
        <Link to={`/edit`}><button className='btnE mx-2'>Edit</button></Link>
        <button  className='btnD mx-2'>Delete</button>
        </form>
    </div>
      <div className='challenge-overview'>
        <p className='challenge-overview-p'>Sprints, also referred to as “iterations,” essentially break the project schedule into digestible blocks of time in which smaller goals can be accomplished.<br/>
        <br/>
          In simple terms, a sprint is one timeboxed iteration of a continuous development cycle, and within this sprint, a planned amount of work has to be completed by the team and made ready for review.<br/>
          <br/>
          In Scrum, we typically work in sprints depending on the extent of the overall project. In a sense, one Sprint within Scrum should be a project in itself, with start and finish. We work towards a Sprint goal, we plan, refine, build, deliver, review, etc.</p>
      </div>
  </>
  )
}

export default NewCd
