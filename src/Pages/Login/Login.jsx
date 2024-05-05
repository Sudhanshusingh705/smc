import React, { useState } from 'react';
import logo5 from "../../assets/logo/logo05.png";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput
} from 'mdb-react-ui-kit';
import "../../Pages/Login/Login.css";
import smcblack from "../../assets/logo/smcblack.png";

const LoginPage = () => {
    const [showPopup, setShowPopup] = useState(false);
  
    return (
        <MDBContainer className="my-5 gradient-form">

        <MDBRow className="justify-content-center">
  
          <MDBCol md="6" className="mb-5">
            <div className="d-flex flex-column">
  
              <div className="text-center">
                <img src={smcblack}
                  style={{ width: '185px' }} alt="logo" />
              </div>
  
              <p className="text-center">Please login to your account</p>
  
  
              <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' />
              <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' />
  
  
              <div className="text-center pt-1 mb-5 pb-1">
                <MDBBtn className="mb-4 w-100 gradient-custom-2">Sign in</MDBBtn>
                <a className="text-muted" href="#!">Forgot password?</a>
              </div>
  
              <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                <p className="mb-0">Don't have an account?</p>
                <MDBBtn outline className='mx-2' color='danger'>
                  Sign up
                </MDBBtn>
              </div>
  
            </div>
  
          </MDBCol>
  
          <MDBCol md="6" className="mb-5">
            <div className="d-flex flex-column justify-content-center gradient-custom-2 h-100 mb-4">
  
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 className="mb-4">Search My College</h4>
                <p className="small mb-0">SearchMyCollege" is a comprehensive online platform designed to streamline the college search and selection process for students, parents, and educators. With an extensive database of colleges and universities worldwide, SearchMyCollege provides users with valuable insights, tools, and resources to make informed decisions about higher education.
                </p>
              </div>
  
            </div>
  
          </MDBCol>
  
        </MDBRow>
  
      </MDBContainer>
    );
  };
  
  export default LoginPage;
