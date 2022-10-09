import React from 'react';


export default function Home() {
  return (
    <div id='home'>
       <div className='container home'>
          {/* <h1 className='heading'>Accelerate Innovation <br/>With Global AI Challanges </h1>  */}
          <h1 className='heading'>Accelerate Innovation</h1> <br/>
          <h1 className='heading'>With Global AI Challanges </h1> 
            <div className='headingp'>
              <p>AI Challanges at DPhi simulate real-world problmes. it is a <br/>great place to put your AI/Data science skills to test on<br/> diverse datasets allowing you to faster learning through <br/> competitions.</p>
            </div>
            <div>
              <button type="button" className="hbtn btn btn-light btn-lg"><strong>Create Challange</strong></button>
            </div>
            <img className='hicon' src='assets/icons/PicsArt_04-14-04.42 1.svg' alt='hicon'/>

            
        </div>
          <div className='homebanner row row-cols-1 row-cols-md-3'>
                  <div className='col-lg-4 records'>
                    <img className='rimg' src='assets/icons/Group 1000002515.svg' alt='' />
                    <h4>100K+</h4>
                    <p className='rp'>AI model submissions</p>
                  </div>
                  
                  <div className='col-lg-4 records'>
                    <img className='rimg' src='assets/icons/Group 1000002515.svg' alt='' />
                    <h4>100K+</h4>
                    <p className='rp'>AI model submissions</p>
                  </div>
                  <div className='col-lg-4 records'>
                    <img className='rimg' src='assets/icons/Group 1000002515.svg' alt='' />
                    <h4>100K+</h4>
                    <p className='rp'>AI model submissions</p>
                  </div>
          </div>
    </div>
  )
}
