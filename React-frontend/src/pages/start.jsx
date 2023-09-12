import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Start = () => {
    return (
      <div className='d-flex justify-content-center align-items-center' style={{height: "calc(100vh - 100px)"}}>
        <div className='d-flex row'>
          <h1 className='display-1 text-center' style={{fontSize: '10vh', fontWeight: "400"}}>Immigr8 Now</h1>
          <div className='d-flex col justify-content-evenly mt-5'>
            <Link to="/form">
              <Button variant="primary" className='mt-2' style={{width: '250px', height: '70px', fontSize: '1.5rem'}}>Start</Button>
            </Link>
            <Link to="/review">
              <Button variant="outline-secondary" className='mt-2' style={{width: '250px', height: '70px', fontSize: '1.5rem'}}>Review</Button>
            </Link>
          </div>
        </div>
      </div>
    );
}

export default Start;